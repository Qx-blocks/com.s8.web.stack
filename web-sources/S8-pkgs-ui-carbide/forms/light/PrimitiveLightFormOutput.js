
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


    /** @returns{S8Object[]} */
    getComponents(){
        return null;
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
