


import { NeObject } from '/S8-core-bohr-neon/NeObject.js';
import { S8WebFront } from '/S8-pkgs-ui-carbide/S8WebFront.js';



/**
 * basics
 */
S8WebFront.CSS_import('/S8-pkgs-ui-carbide/structure/Structure.css');


export class InlineTextBox extends NeObject {

    /**
     * 
     */
    constructor() {
        super();
        this.node = document.createElement("span");
        this.node.classList.add("inline-text");
    }

  

    getEnvelope() {
        return this.node;
    }


    /**
     * 
     * @param {string} text 
     */
    S8_set_text(text) {
        this.node.innerHTML = text;
    }

    
    S8_render() { /* continuous rendering approach... */ }
    S8_dispose() { /* continuous rendering approach... */ }
}