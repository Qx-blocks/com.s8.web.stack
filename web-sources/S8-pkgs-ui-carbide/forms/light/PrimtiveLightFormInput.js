

import { LightFormElement } from './LightFormElement.js';



/**
 * 
 */
export class PrimtiveLightFormInput extends LightFormElement {



    constructor() {
        super();

        this.wrapperNode.classList.add("lightform-primitive-field");
       
        /* <name> */
        this.fieldNameNode = document.createElement("div");
        this.fieldNameNode.classList.add("lightform-field-name-primitive");
        this.fieldNameNode.innerHTML = "<span>field_name:</span>";
        this.wrapperNode.appendChild(this.fieldNameNode);
        /* </name> */
        
        /* to be overridden */
        this.createInputNode();
        
         /* options node */
        this.wrapperNode.appendChild(this.createPlusNode());
    }


    getEnvelope() {
        return this.wrapperNode;
    }

    /** @returns{S8Object[]} */
    getComponents(){
        return null;
    }

    S8_set_fieldName(name) {
        this.fieldNameNode.innerHTML = `<span>${name}</span>`;
    }

    S8_render(){ /* continuous rendering approach... */ }

    S8_dispose(){ /* nothing to dispose*/ }
}

