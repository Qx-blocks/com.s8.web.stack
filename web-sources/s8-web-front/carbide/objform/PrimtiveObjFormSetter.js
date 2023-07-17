

import { getColor, ObjFormElement } from '/s8-web-front/carbide/objform/ObjFormElement.js';



/**
 * 
 */
export class PrimtiveObjFormSetter extends ObjFormElement {

    constructor(markupColor) {
        super();
        // setup
        this.markupColor = markupColor;

        this.buttonNode = document.createElement("div");
        this.buttonNode.classList.add("objform-primitive-field");


        /* <ribbon> */
        this.ribbonNode = document.createElement("div");
        this.ribbonNode.classList.add("objform-markup");
        this.ribbonNode.classList.add("objform-markup-" + getColor(markupColor));
        this.buttonNode.appendChild(this.ribbonNode);
        this.markupColor = markupColor;
        /* </ribbon> */

        this.createNameNode();
        this.createInputNode();
        
        /* tooltip node */
        this.buttonNode.appendChild(this.createInfoNode());

         /* options node */
         this.buttonNode.appendChild(this.createPlusNode());
    }

    createNameNode() {
        this.nameNode = document.createElement("div");
        this.nameNode.classList.add("objform-field-name-primitive");
        this.nameNode.innerHTML = "<span>field_name:</span>";
        this.buttonNode.appendChild(this.nameNode);
    }


    getEnvelope() {
        return this.buttonNode;
    }

    setMarkupColor(colorCode) {
        let previous = "objform-markup-" + getColor(this.markupColor);
        this.markupColor = colorCode;
        this.nameNode.classList.replace(previous, "objform-markup-" + getColor(this.markupColor));
    }

    S8_set_name(name) {
        this.nameNode.innerHTML = `<span>${name}</span>`;
    }


    S8_render(){ /* continuous rendering approach... */ }

    S8_dispose(){ /* nothing to dispose*/ }
}

