

import { getColor, LightFormElement } from './LightFormElement.js';



/**
 * 
 */
export class PrimtiveLightFormInput extends LightFormElement {




    constructor() {
        super();

        this.fieldNode = document.createElement("div");
        this.fieldNode.classList.add("lightform-primitive-field");

        this.createNameNode();
        this.createInputNode();
        
         /* options node */
        this.fieldNode.appendChild(this.createPlusNode());
    }

    createNameNode() {
        this.fieldNameNode = document.createElement("div");
        this.fieldNameNode.classList.add("lightform-field-name-primitive");
        this.fieldNameNode.innerHTML = "<span>field_name:</span>";
        this.fieldNode.appendChild(this.fieldNameNode);
    }


    getEnvelope() {
        return this.fieldNode;
    }

    S8_set_fieldName(name) {
        this.fieldNameNode.innerHTML = `<span>${name}</span>`;
    }




    S8_render(){ /* continuous rendering approach... */ }

    S8_dispose(){ /* nothing to dispose*/ }
}

