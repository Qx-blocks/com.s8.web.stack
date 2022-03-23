import { NbScene } from "./scenes/NbScene";


/**
 * canvas
 */
var canvas;

/**
 * Scene
 */
var scene;


var logNode;


var glBkAddress;



/**
 * 
 */
class NbContext {

	/** @type {HTMLCanvasElement} */
	canvasNode = document.createElement("canvas");
	

	/**
	 * 
	 */
	canvasWidth = 0;

	/**
	 * 
	 */
	canvasHeight = 0;
	

	/**
	 * @type {WebGLRenderingContext}
	 */
	gl;


	/**
	 * @type {ResizeObserver}
	 */
	resizeObserver;

	/**
	 * @type {NbScene} scene
	 */
	activeScene = null;

	/**
	 *  @type {boolean} 
	 */
	isVerbose = true;


	constructor(){
		
	
		this.canvasNode 


	/**
	 * Global variable
	 * Note that the canvas element has ALWAYS id = "WebGL_Canvas"
	 */
	
	 let pxComputedWidth = this.canvasNode.offsetWidth;
	 let pxComputedHeight = this.canvasNode.offsetHeight;
	 this.canvasNode.width = pxComputedWidth;
	 this.canvasNode.height = pxComputedHeight;

		try {
			/**
			 * {}
			 */
			this.gl = this.canvasNode.getContext("webgl2", {stencil : true});
			this.gl.viewportWidth = pxComputedWidth;
			this.gl.viewportHeight = pxComputedHeight;
	
			/*
			var ext = gl.getExtension("OES_element_index_uint");
			if(ext==null){
				alert("Do not support OES UINT");
			}
			 */
	
		} catch (e) {
			alert("Could not initialise WebGL, sorry :-("+e);
		}



		this.resizeObserver = new ResizeObserver(function(entries) {
			// since we are observing only a single element, so we access the first element in entries array
			let rect = entries[0].contentRect;
		
			// current width & height
			this.canvasWidth = rect.width;
			this.canvasHeight = rect.height;

			if(this.scene){
				this.scene.onCanvasResized(this.canvasWidth, this.canvasHeight);
			}
		
			if(this.isVerbose){
				console.log(`WebGL Canvas dimensions are now: width = ${this.canvasWidth}, height = ${this.canvasHeight}`);
			}
		});
		
		// start observing for resize
		this.resizeObserver.observe(this.canvasNode);
	}

	getCanvasNode(){
		return this.canvasNode;
	}

	
}


export const Nb = new NbContext();




/**
 * @type {WebGL2RenderingContext}
 * Root context
 */
export const gl = Nb.gl;




export class WebGL_Screen {

	constructor(){
		
	}

}



/**
 * startup function
 */
var WebGL_start = function(){


	// WebGL_Service static address
	glBkAddress = new Uint8Array(
			[0x00, 0x00, 0x00, 0x00, 0x00, 0x08, 0x00, 0x08, // path
				0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x08]); // index	





	


	logNode = document.getElementById("log64");

	/**
	 * Scene
	 */
	scene = new WebGL_Scene();
	scene.render();


	// create control
	var control = new WebGL_Controller(scene);
	control.start();


};