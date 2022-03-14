

import { NbView } from '../scenes/view/NbView';
import { NbAppearance } from './NbAppearance';
import { NbProgram } from './NbProgram';


/**
 * 
 */
export class NbRenderingPipe {

	/** @type {NbProgram} */
	program = null;
	
	/** @type {Array<NbAppearance>} */
	appearances = new Array();

	constructor(program) {
		this.program = program;	
	}

	/**
	 * 
	 * @param {Map} apperancesByName 
	 */
	explore(apperancesByName){
		this.appearances.forEach(appearance => {
			let name = appearance.name;
			if(apperancesByName.has(name)){
				throw "Collision is appearance naming: "+name;
			}
			apperancesByName.set(name, appearance);
		});
	}


	/**
	 * 
	 * @param {NbView} view 
	 */
	render(view) {
		if (this.program.isReady) {
			// enable program
			this.program.enable();

			// render appearnce
			let nAppearances = this.appearances.length;
			for (let i = 0; i < nAppearances; i++) {

				/** @type {NbAppearance} appearance */
				let appearance = this.appearances[i];

				// bind appearance
				this.program.bindAppearance(appearance);

				// render the appearance
				appearance.render(view);
			}

			// disable program
			this.program.disable();
		}
	}
}