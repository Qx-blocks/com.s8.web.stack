

import { ColorNbProgram } from './color/program';
import { Color2NbProgram } from './color2/program';
import { Mat01NbProgram } from './mat01/program';

import { NbProgram } from './NbProgram';



class NbProgramLibrary {

	constructor() {
		this.map = new Map();
	}

	/**
	 * 
	 * @param {string} prgmId 
	 * @returns {NbProgram}
	 */
	get(prgmId) {
		let program = this.map.get(prgmId);
		if(program == undefined){
			program = this.retrieve(prgmId);
			program.load();
			this.map.set(prgmId, program);
		}
		return program;
	}

	retrieve(id){
		switch(id){
			case "color": return new ColorNbProgram();
			case "color2" : return new Color2NbProgram();
			case "mat01" : return new Mat01NbProgram();
			default : throw "Unsupported program: "+id;
		}
	}
}

export const NbPrograms = new NbProgramLibrary();
