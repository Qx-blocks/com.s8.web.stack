import { NeSphere } from "./NeSphere";




export class NeFieldHandler {

	
	/**
	 * @type {function setter(params) {}}
	 */
	setter;

	super(setter){
		this.setter = setter;
	}
}

export class FloatNeFieldHandler extends NeFieldHandler {

	constructor(setter){
		this.setter = setter;
	}
	
}

export class ObjectNeFieldHandler extends NeFieldHandler {

	constructor(setter){
		this.setter = setter;
	}
	
}

export class ObjectArrayNeFieldHandler extends NeFieldHandler {

	constructor(setter){
		this.setter = setter;
	}
	
}

export class NeOrbitalHandler {

	constructor(entries) {
		this.entries = entries;
		this.onInstantiated = function(){ /* to be ovrridden*/ };
	}

	setFields() {
		let object = this.object;
		this.entries.forEach(entry => {
			object.S8_set(entry.code, entry.value);
		});
	}

	render(){
		this.object.S8_render();
	}
}

/**
 * 
 */
export class CreateNeOrbitalHandler extends NeOrbitalHandler {

	constructor(id, typeHandler, fields){
		super(fields);
		this.id = id;
		this.typeHandler = typeHandler;
		this.hasBeenCreated = false;
	}


	/**
	 * 
	 * @param {NeSphere} sphere 
	 */
	instantiate(sphere) {

		if (!this.hasBeenCreated) {
			switch (this.typeHandler.state) {
				case 0: // not initiated
					this.typeHandler.instantiables.push(this);
					this.typeHandler.load(sphere);
					break;

				case 1: // loading in progress
					this.typeHandler.instantiables.push(this);
					break;

				case 2: // already loaded
					this.object = this.typeHandler.createNewInstance(this.id);
					sphere.setOrbital(this.id, this.object);
					this.hasBeenCreated = true;
					this.onInstantiated();
					break;

				default: throw "Unsupported state";
			}
		}
	}

	isInstantiated() { 
		return this.hasBeenCreated; 
	}
}

/**
 * 
 */
export class UpdateNeOrbitalHandler extends NeOrbitalHandler {

	constructor(object, fields){
		super(fields);
		this.object = object;
	}

	instantiate(sphere) {
		this.onInstantiated(this); // since already instantiated
	}

	isInstantiated(){ 
		return true; 
	}

}







export class NeLexicon {


	/**
	 * 
	 * @param {NeSphere} sphere 
	 */
	constructor(sphere) {

		// sphere
		this.sphere = sphere;

		/** codebase */
		this.codebase = new Map();

		/** */
		this.typeLoadings = new Array();
	}


	define(typeCode, typeClasspath) {
		
		// define new handler
		let handler = new NeOrbitalTypeHandler(this, typeClasspath);

		// store in codebase
		this.codebase.set(typeCode, handler);

		return handler;
	}

	get(typeCode) {
		return this.codebase.get(typeCode);
	}

}

