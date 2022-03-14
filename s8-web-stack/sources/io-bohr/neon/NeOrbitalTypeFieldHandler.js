
export class NeOrbitalTypeFieldHandler {


    /**
    * @type {string}
        */
    name;

    /**
        * @type {number}
        */
    signature;

    /**
     * @type {Function}
     */
    setter;

    /**
     * @type { Set<number> }
     */
    typeSet = new Set();

    constructor(fieldDeclarator) {

        // name
        this.name = fieldDeclarator.name;

        // type
        fieldDeclarator.type.forEach(code => this.typeSet.add(code));

        // setter
        this.setter = fieldDeclarator.setter;
    }

    /**
     * 
     * @param {*} instance 
     * @param {number} valueEncoding 
     * @param {*} value 
     */
    setValue(instance, valueEncoding, value) {
        if (this.typeSet.has(valueEncoding)) {
            this.setter.call(instance, value);
        }
        else {
            throw `Cannot accept value of type ${valueEncoding} for field ${this.name}`;
        }
    }
}



