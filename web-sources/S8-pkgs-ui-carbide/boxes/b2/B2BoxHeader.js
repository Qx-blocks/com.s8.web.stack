
import { S8Object } from "/S8-api/S8Object.js";
import { S8 } from "/S8-api/S8Context.js";




/**
 * 
 */
S8.page.CSS_import('/S8-pkgs-ui-carbide/boxes/b2/B2Box.css');


/**
 * 
 */
export class B2BoxHeader extends S8Object {

    /** @type {HTMLDivElement} */
    wrapperNode;

    elements;

    /**
     * 
     */
    constructor() {
        super();

        this.headerNode = document.createElement("div");
        this.headerNode.classList.add("b2box-header");
    }


    /**
     * 
     * @returns 
     */
    getEnvelope() {
        return this.headerNode;
    }

    /** @returns{S8Object[]} */
    getComponents() {
        return [];
    }


    /** @param {string} text */
    S8_set_title(text) {
        this.headerNode.innerText = text;
    }

    /** render */
    S8_render() { }


    /** dispose */
    S8_dispose() { }

}