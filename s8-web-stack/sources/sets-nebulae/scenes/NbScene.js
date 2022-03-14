

import { gl, Nb } from '../nebulae';
import { S8Orbital } from '../../s8/S8';
import { NbAppearance } from '../appearances/NbAppearance';
import { NbRenderingPipe } from '../appearances/NbRenderingPipe';
import { NbEnvironment } from './environment/NbEnvironment';
import { NbGear } from "./NbGear";
import { NbView } from "./view/NbView";
import { StdNbViewController } from "./view/StdNbViewController";


/**
 * 
 */
export class NbScene extends S8Orbital {

	/** 
	 * @type {NbRenderingPipe[]} the rendering pipes (performance-section) 
	 */
	renderingPipes = [];
	

	/** 
	 * @type {Map<string, NbRenderingPipe>} the pipes mapping
	 */
	renderingPipeMap = new Map();


	/** 
	 * @type {Map<string, NbAppearance>} the appearances mapping
	 */
	appearanceMap = new Map();


	/**
	 * @type {NbEnvironment} the view 
	 */
	environment = NbEnvironment.initPreset();


	/** 
	 * @type {NbView} the view 
	 */
	view = new NbView();


	/**
	 * @type {NbViewController} the centralized controller
	 */
	controller = null;


	/** @type {NbGear[]} */
	gears = [];


	constructor(id) {
		super(id);

		// rendering pipes
		this.setAppearances([]);

		// bind scene to view
		this.view.scene = this;

		// start controller
		this.controller = new StdNbViewController(this, this.view);

		// <initialize rendering>

		//OpenGL initialization

		gl.clearStencil(128);

		//Set-up canvas parameters
		gl.enable(gl.DEPTH_TEST);

		// </initialize rendering>

		this.totalRenderingTime = 0;
		this.nbRenderings = 0;

		// create picking module and link it
		//this.picking = new WebGL_PickingModule(this);
	}



	/**
	 * 
	 * @param {*} code 
	 * @param {*} value 
	 */
	S8_set(code, value) {
		switch (code) {

			// appearances
			case 0x22: this.setAppearances(value); break;
			case 0x23: this.setEnvironment(value); break;

			default: throw "Unsupported code: " + code;
		}
	}


	activate(){
		Nb.scene = this;
		this.view.onCanvasResized(Nb.canvasWidth, Nb.canvasHeight);
	}


	onCanvasResized(width, height){
		this.view.updateProjectionMatrix(width, height);
	}

	setGears(gears){

		// perform binding
		gears.forEach(gear => { gear.scene = this; })
		this.gears = gears;
	}

	/**
	 * 
	 * @param {NbAppearance[]} appearances 
	 */
	setAppearances(appearances) {

		// rendering pipes
		this.renderingPipes = new Array();

		// rendering pipes mapped by program pathnames
		this.renderingPipeMap = new Map();

		// appearances
		this.appearanceMap = new Map();

		appearances.forEach(appearance => {
			let pathname = appearance.program.pathname;

			// create rendering pipe if not already done
			let renderingPipe = this.renderingPipeMap.get(pathname);
			if (renderingPipe == undefined) {
				renderingPipe = new NbRenderingPipe(appearance.program);
				this.renderingPipes.push(renderingPipe);
				this.renderingPipeMap.set(pathname, renderingPipe);
			}

			// append appearance to rendering pipe
			renderingPipe.appearances.push(appearance);

			// append appearance
			this.appearanceMap.set(appearance.name, appearance);
		});
	}


	/**
	 * @param {string} name 
	 * @returns { NbAppearance }
	 */
	getAppearance(name) {
		let appearance = this.appearances.get(name);
		if (appearance == undefined) {
			throw "No appearance defined for name: " + this.appearanceName;
		}
		return appearance;
	}



	setEnvironment(environment) {
		this.environment = environment;
	}


	/**
	* [WebGL_Scene API method]
	* setPickingCallback allows to specify a behaviour if the event of a picking click.
	* The shape id is passed to the callback function when a picking click occurs.
	*/
	setPickingCallback(callback) {
		this.picking.callback = callback;

		// do a rendering pass to apply changes
		this.render();
	}


	/**
	 * [WebGL_Scene API method]
	 * clear scene by deleting all shapes
	 */
	clear() {

		// remove all instances, keep programs, styles and models
		this.shapeInstances.clear();

		// do a rendering pass to apply changes
		this.render();
	}


	/**
	 * When already bound, can rebind with no adverse effects
	 */
	bind(){
		// controller
		this.controller.scene = this;
		this.controller.view = this.view;

		// environment
		this.environment.view = this.view;
	}


	start(){
		// bind
		this.bind();

		// start controller
		this.controller.start();

		// render
		this.render();
	}

	/**
	 * Render
	 */
	render() {

		// unbind picking fbo if active
		//this.picking.unbind();

		// timer
		//var startTime = performance.now(); 

		// update view
		this.view.updateViewMatrix();

		this.environment.update();

		gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);

		// gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
		gl.clearColor(1.0, 1.0, 1.0, 1.0);
		gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT | gl.STENCIL_BUFFER_BIT);


		// render pipes
		let nPipes = this.renderingPipes.length;
		for (let i = 0; i < nPipes; i++) { this.renderingPipes[i].render(this.view); }


		// Recommended pattern for frame animation
		let _this = this;
		window.requestAnimationFrame(function () { _this.render(); });


		// FPS computations
		/*
		this.totalRenderingTime+=(performance.now() - startTime);
		this.nbRenderings++;
		var averareRenderingTime = this.totalRenderingTime/this.nbRenderings;
		logNode.innerHTML = "rendering time: "+averareRenderingTime+" ms"
		+"nb renderings: "+this.nbRenderings;
		*/
	}

}

