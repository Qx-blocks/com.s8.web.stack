


export class NeFieldValue {

	/**
	 * @type {number} code for the field this value will be assigned to
	 */
	fieldCode = -1;

	/**
	 * @type {number} (One of BOHR_Protocol.Encoding): encode the type of value
	 */
    fieldValueTypeCode = -1;

	/**
	 * @type { * }
	 */
	fieldValue;

    constructor(fieldValueTypeCode){
        this.fieldValueTypeCode = fieldValueTypeCode;
    }
}


/**
 * 
 */
export class DirectNeFieldValue {
   
    /**
     * 
     * @param {number} fieldValueTypeCode 
     * @param {*} fieldValue 
     */
    constructor(fieldValueTypeCode, fieldValue){
        super(fieldValueTypeCode);
        this.fieldValue = fieldValue;
    }

    /**
     * 
	 * @param {NeSphere} sphere 
	 */
	bind(){
		// nothing to bind
	}
}


export class SingleBindingNeFieldValue extends NeFieldValue {

	constructor(fieldValueTypeCode, index){
		super(fieldValueTypeCode);
		this.index = index;
	}

	/**
	 * 
	 * @param {NeSphere} sphere 
	 */
	bind(sphere){
		if(this.index != null){
			// might be null
			this.fieldValue = sphere.getOrbital(this.index);
		}
	}
}


export class ArrayBindingNeFieldValue extends NeFieldValue {

	constructor(fieldValueTypeCode, indices){
		super(fieldValueTypeCode);
		this.indices = indices;
	}

	/**
	 * 
	 * @param {NeSphere} sphere 
	 */
	bind(sphere){
		if(this.indices != null){
			let n = this.indices.length;
			let orbitals = new Array(n);
			for(let i=0; i<n; i++){ orbitals[i] = sphere.getOrbital(this.indices[i]); }
			this.fieldValue = orbitals;
		}
		else{
			this.fieldValue = null;
		}
	}
}
