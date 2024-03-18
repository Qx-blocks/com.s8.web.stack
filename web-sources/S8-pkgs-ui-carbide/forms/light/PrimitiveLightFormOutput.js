
import { getColor, LightFormElement } from "./LightFormElement.js";

/**
 * 
 */
export class PrimtiveLightFormOutput extends LightFormElement {



    constructor(markupColor) {

        super();

        // setup
        this.markupColor = markupColor;

        this.wrapperNode.classList.add("lightform-primitive-field");


        /* <ribbon> */
        this.ribbonNode = document.createElement("div");
        this.ribbonNode.classList.add("lightform-markup");
        this.ribbonNode.classList.add("lightform-markup-" + getColor(markupColor));
        this.wrapperNode.appendChild(this.ribbonNode);
        this.markupColor = markupColor;
        /* </ribbon> */

        /* <name> */
        this.fieldNameNode = document.createElement("div");
        this.fieldNameNode.classList.add("lightform-field-name-primitive");
        this.fieldNameNode.innerHTML = "<span>field_name:</span>";
        this.wrapperNode.appendChild(this.fieldNameNode);
        /* </name> */


        this.createOutputNode();
        
        /* options node */
        this.wrapperNode.appendChild(this.createPlusNode());
    }


    



    setMarkupColor(colorCode) {
        let previous = "lightform-markup-" + getColor(this.markupColor);
        this.markupColor = colorCode;
        this.ribbonNode.classList.replace(previous, "lightform-markup-" + getColor(this.markupColor));
    }


    S8_render(){ /* continuous rendering approach... */ }

    S8_set_fieldName(name) {
        this.fieldNameNode.innerHTML = `<span>${name}</span>`;
    }

    S8_dispose(){ /* nothing to dispose*/ }
}
