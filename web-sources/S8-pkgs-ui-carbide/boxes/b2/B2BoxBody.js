
import { S8WebFront } from "/S8-pkgs-ui-carbide/S8WebFront.js";
import { S8Object } from "/S8-api/S8Object.js";
import { S8 } from "/S8-api/S8Context.js";




/**
 * 
 */
S8.page.CSS_import('/S8-pkgs-ui-carbide/boxes/b2/B2Box.css');


/**
 * 
 */
export class B2BoxBody extends S8Object {

    /** @type {HTMLDivElement} */
    wrapperNode;

    elements;

    /**
     * 
     */
    constructor() {
        super();
        this.wrapperNode = document.createElement("div");
        this.wrapperNode.classList.add("b2box-body");
    }


    /**
     * 
     * @returns 
     */
    getEnvelope() {
        return this.wrapperNode;
    }

    /** @returns{S8Object[]} */
    getComponents() {
        return this.elements;
    }

    /** @param {S8Object[]} elements */
    S8_set_elements(elements) {
        this.elements = elements;
        S8WebFront.setS8Elements(this.wrapperNode, elements);
    }


    /** render */
    S8_render() { }


    /** dispose */
    S8_dispose() { }

}