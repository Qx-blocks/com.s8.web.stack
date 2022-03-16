


export class S8Context {

	import_CSS(name) {
		throw "Import for " + name + " failed. Must provide implementation.";
	}

	sendRequest_GET(path, type, callback) {
		throw "Import for " + path + ", " + type + ", " + callback + " failed. Must provide implementation.";
	}


/**
 * 
 * @param {*} method 
 * @param {*} capacity 
 * @returns a { S8Request }
 */
	createRequest_POST(method, capacity) {
		throw "Import for " + method + ", " + capacity + ", " + callback + " failed. Must provide implementation.";
	}


	removeChildren(node) {
		/* An earlier edit to this answer used firstChild, 
		but this is updated to use lastChild as in computer-science, 
		in general, it's significantly faster to remove the last 
		element of a collection than it is to remove the first element 
		(depending on how the collection is implemented). */
		while (node.firstChild) {
			node.removeChild(node.lastChild);
		}
	}
}



/**
 * 
 */
export class S8Request {


	/**
	 * 
	 * @param {*} id 
	 */
	setView(id) { throw "not implemented: " + id; }


	/**
	 * 
	 * @param {*} index 
	 */
	setFieldIndex(index) { throw "not implemented " + index }

	/**
	 * 
	 * @param {*} slot 
	 * @param {*} value 
	 */
	setByteParam(slot, value) { throw "not implemented " + slot + " = " + value }

	/**
	 * 
	 * @param {*} slot 
	 * @param {*} value 
	 */
	setUInt8Param(slot, value) { throw "not implemented " + slot + " = " + value }

	/**
	 * 
	 * @param {*} slot 
	 * @param {*} value 
	 */
	setUInt16Param(slot, value) { throw "not implemented " + slot + " = " + value }


	/**
	 * 
	 * @param {*} slot 
	 * @param {*} value 
	 */
	setInt16Param(slot, value) { throw "not implemented " + slot + " = " + value }

	/**
	 * 
	 * @param {*} slot 
	 * @param {*} value 
	 */
	setUInt32Param(slot, value) { throw "not implemented " + slot + " = " + value }

	/**
	 * 
	 * @param {*} slot 
	 * @param {*} value 
	 */
	setInt32Param(slot, value) { throw "not implemented " + slot + " = " + value }

	/**
	 * 
	 * @param {*} slot 
	 * @param {*} value 
	 */
	setUInt64Param(slot, value) { throw "not implemented " + slot + " = " + value }

	/**
	 * 
	 * @param {*} slot 
	 * @param {*} value 
	 */
	setInt64Param(slot, value) { throw "not implemented " + slot + " = " + value }

	/**
	 * 
	 * @param {*} slot 
	 * @param {*} value 
	 */
	setFloat32Param(slot, value) { throw "not implemented " + slot + " = " + value }

	/**
	 * 
	 * @param {*} slot 
	 * @param {*} value 
	 */
	setFloat64Param(slot, value) { throw "not implemented " + slot + " = " + value }

	/**
	 * 
	 * @param {*} slot 
	 * @param {*} value 
	 */
	setL8StringASCIIParam(slot, value) { throw "not implemented " + slot + " = " + value }

	/**
	 * 
	 * @param {*} slot 
	 * @param {*} value 
	 */
	setL32StringUTF8Param(slot, value) { throw "not implemented " + slot + " = " + value }

	/**
	 * 
	 * @param {string} value 
	 * @returns 
	 */
	setBohrHashCode(value) { throw "not implemented " + slot + " = " + value }


	send(callback){ throw "interface level ("+callback+")"; }
}




export class S8Orbital {

    /**
     * 
     * @param {string} id 
     */
    constructor(id){
        this.id = id;
    }


    /**
     * 
     * @param {*} code 
     * @param {*} value 
     */
    S8_set(code, value){
        throw `The BOHR_set method must be overriden: code:${code} = value:${value}`;
    }


    S8_render(){
        /* 
			No rendering has been defined.
			Override for different behviour...
		*/
    }


    S8_dispose(){
         /* 
			Nothing to dispose
			Override for different behviour...
		*/
    }

}





import { NeSphere } from '../neon/NeSphere';

/**
 * 
 */
export const S8 = new NeSphere();