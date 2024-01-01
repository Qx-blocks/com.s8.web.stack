


import { S8 } from '/S8-api/S8Context.js';
import { NeObject } from '/S8-core-bohr-neon/NeObject.js';



/**
 * basics
 */
S8.page.CSS_import('/S8-pkgs-ui-carbide/structure/Structure.css');


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