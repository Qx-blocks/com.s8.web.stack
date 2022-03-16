import { NeLexicon } from "./NeLexicon";
import { NeOrbitalTypeFieldHandler } from "./NeOrbitalTypeFieldHandler";
import { NeSphere } from "./NeSphere";



export const BOHR_PROTOTYPE_PATHNAME = "BOHR_Prototype";


/**
 * 
 */
export class NeOrbitalTypeHandler {



    /**
     * @type {NeLexicon}
     */
    lexicon = null;


    /**
     * @type {string}
     */
    typeClasspath = "(undefined)";



	/**
	 * 0 = unresolved, 1 = loading-in-progres, 2 = building, 3 = built
	 * @type {number}
	 */
	state = 0;


	
	/**
	 * @type { * }
	 */
	_constructor = null;

	/**
	 * @type {Object}
	 */
	BOHR_prototype = null;


	/**
	 * @type { Map<string, NeOrbitalTypeFieldHandler> }
	 */
	fieldHandlersByName = new Map();


	/**
	 * @type { Map<number, NeOrbitalTypeFieldHandler> }
	 */
	fieldHandlersByCode = new Map();

	/**
	 * @type {instantiable[]} inst
	 */
	instantiables = [];

	/**
	 * 
	 * @param {NeLexicon} lexicon 
	 * @param {string} typeClasspath 
	 */
	constructor(lexicon, typeClasspath) {
		this.lexicon = lexicon;
		this.typeClasspath = typeClasspath;
		
		
	}

    /**
     * 
     * @param {NeSphere} sphere 
     */
	load(sphere) {
		if (this.state == 0) { // unresolved
			
			this.state = 1; // loading

			let lastSeparatorIndex = -1, i;
			while ((i = this.typeClasspath.indexOf("/", lastSeparatorIndex + 1)) >= 0) {
				lastSeparatorIndex = i;
			}
			if (lastSeparatorIndex == -1) {
				throw "Illformed classpath: " + this.typeClasspath;
			}
			let n = this.typeClasspath.length;

			// pathname (with last folder separator)
			let pathname = this.typeClasspath.substring(0, lastSeparatorIndex + 1);

			let classname = this.typeClasspath.substring(lastSeparatorIndex + 1, n);

			let generated = pathname + classname;


			let _this = this;
			let setConstructor = function (_constructor) {
				// handler
				_this._constructor = _constructor;

				// set as loaded
				_this.state = 2;

				_this.build(sphere);
			}

			// trigger loading
			import(generated).then(module => setConstructor(module[classname]));
		}
	}



	/**
	 * 
	 * @param { NeSphere } sphere 
	 */
	build(sphere){

		this.BOHR_prototype = this._constructor[BOHR_PROTOTYPE_PATHNAME];

		/**
		 * build fields
		 */
		let fields = this.BOHR_prototype.fields
		if(fields != undefined && fields instanceof Array){
			this.BOHR_prototype.fields.forEach(fieldDeclarator => {
				let name = fieldDeclarator.name;
				let fieldHandler = NeOrbitalTypeFieldHandler.build(this, fieldDeclarator);
				this.fieldHandlersByName.set(name, fieldHandler);
			});
		}
		else{
			throw "NeTypeHandler: BOHR_Prototype must define an array: fields";
		}


		this.state = 3;

		// handler
		this.instantiables.forEach(instantiable => instantiable.instantiate(sphere));
		delete _this.instantiables;
	}


	declareFieldCode(name, code){
		let fieldHandler = this.fieldHandlersByName.get(name);
		if (fieldHandler != undefined) {
			this.fieldHandlersByCode.set(code, fieldHandler);
		}
		else {
			throw "[NeLexicon] Failed to match type for name: " + name;
		}
	}


	/**
	 * 
	 * @param {*} instance 
	 * @param {number} code 
	 * @param {*} value 
	 * @param {*} bindings 
	 */
	set(instance, code, valueEncoding, value, bindings) {

		this.fieldHandlersByCode.get(code).setValue(instance, valueEncoding)
		let setter = this.settersByCode(code);
		setter.call(instance, value, bindings);
	}

	createNewInstance(id) {
		return new this._constructor(id);
	}
}
