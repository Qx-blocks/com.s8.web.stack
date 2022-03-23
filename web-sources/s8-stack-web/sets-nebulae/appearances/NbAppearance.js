
import { S8Orbital } from '/s8/S8';
import { NbPrograms } from './NbProgramLibrary';





/**
 * appearance
 */
export class NbAppearance extends S8Orbital {

	/**
	 * To be overridden...
	 * @param {*} id 
	 */
	constructor(id, programId) {
        super(id);

		// auto-bind to program
		this.program = NbPrograms.get(programId);

		this.models = [];
	}


	/**
	 * To be overridden
	 * @param {*} code 
	 * @param {*} value 
	 */
	S8_set(code, value) {
		switch (code) {
			case 0x02: this.name = value; break;
			default : throw "Unsupported code: "+code;
		}
	}


    /**
     * 
     */
	S8_render(){
        // nothing to render...
    }


	/**
	 * 
	 * @param {Array} models 
	 */
	setModels(models){
		this.models = models;
	}


	/**
	 * 
	 * @param {NbView} view
	 */
	render(view){
		let nModels = this.models.length;
		for(let i=0; i<nModels; i++){
	
			/** @type {NbMesh} model */ 
			let model = this.models[i];

			// bind model
			program.bindModel(view, model);

			// draw it!
			model.draw();
		}
	}
}