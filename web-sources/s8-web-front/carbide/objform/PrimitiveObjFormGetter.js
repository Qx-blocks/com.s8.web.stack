
import { getColor, ObjFormElement } from "/s8-web-front/carbide/objform/ObjFormElement.js";

/**
 * 
 */
export class PrimtiveObjFormGetter extends ObjFormElement {



    constructor(markupColor) {

        super();

        // setup
        this.markupColor = markupColor;

        this.buttonNode.classList.add("objform-primitive-field");


        /* <ribbon> */
        this.ribbonNode = document.createElement("div");
        this.ribbonNode.classList.add("objform-markup");
        this.ribbonNode.classList.add("objform-markup-" + getColor(markupColor));
        this.buttonNode.appendChild(this.ribbonNode);
        this.markupColor = markupColor;
        /* </ribbon> */

        /* <name> */
        this.nameNode = document.createElement("div");
        this.nameNode.classList.add("objform-field-name-primitive");
        this.nameNode.innerHTML = "<span>field_name:</span>";
        this.buttonNode.appendChild(this.nameNode);
        /* </name> */


        this.createOutputNode();
        
        /* tooltip node */
        this.buttonNode.appendChild(this.createInfoNode());

        /* options node */
        this.buttonNode.appendChild(this.createPlusNode());
    }


    



    setMarkupColor(colorCode) {
        let previous = "objform-markup-" + getColor(this.markupColor);
        this.markupColor = colorCode;
        this.ribbonNode.classList.replace(previous, "objform-markup-" + getColor(this.markupColor));
    }


    S8_render(){ /* continuous rendering approach... */ }

    S8_set_name(name) {
        this.nameNode.innerHTML = `<span>${name}</span>`;
    }

    S8_dispose(){ /* nothing to dispose*/ }
}
