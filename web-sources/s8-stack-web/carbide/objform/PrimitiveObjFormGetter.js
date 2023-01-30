
import { getColor, ObjFormElement } from "/s8-stack-web/carbide/objform/ObjFormElement.js";

/**
 * 
 */
export class PrimtiveObjFormGetter extends ObjFormElement {

    constructor(markupColor) {

        super();

        // setup
        this.markupColor = markupColor;

        this.fieldNode.classList.add("objform-primitive-field");


        /* <ribbon> */
        this.ribbonNode = document.createElement("div");
        this.ribbonNode.classList.add("objform-markup");
        this.ribbonNode.classList.add("objform-markup-" + getColor(markupColor));
        this.fieldNode.appendChild(this.ribbonNode);
        this.markupColor = markupColor;
        /* </ribbon> */

        /* <name> */
        this.nameNode = document.createElement("div");
        this.nameNode.classList.add("objform-field-name-primitive");
        this.nameNode.innerHTML = "<span>field_name:</span>";
        this.fieldNode.appendChild(this.nameNode);
        /* </name> */


        this.createOutputNode();
        this.createPlusNode();
    }

    createPlusNode() {
        this.plusNode = document.createElement("div");
        this.plusNode.classList.add("objform-icon-dots");
        this.plusNode.innerHTML = `<svg 
      width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <circle cx="8" cy="32" r="8" />
      <circle cx="32" cy="32" r="8" />
      <circle cx="56" cy="32" r="8" /></svg>`;
        this.fieldNode.appendChild(this.plusNode);
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
