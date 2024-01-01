


import { S8 } from '/S8-api/S8Context.js';
import { NeObject } from '/S8-core-bohr-neon/NeObject.js';



/**
 * basics
 */
S8.page.CSS_import('/S8-pkgs-ui-carbide/structure/Structure.css');


/**
 * 
 */
export class Div extends NeObject {

    /**
     * 
     */
    constructor() {
        super();
        this.node = document.createElement("div");
        //this.node.classList.add("row");
    }

    S8_render() { /* continuous rendering approach... */ }

    getEnvelope() {
        return this.node;
    }


    /**
     * 
     * @param {Popover} popoverBox 
     */
    S8_set_content(elements) {

        /* clear child nodes */
        while(this.node.hasChildNodes()){ this.node.removeChild(this.node.lastChild); }

        /* elements */
        elements.forEach(element => this.node.appendChild(element.getEnvelope()));
    }



    S8_dispose() { /* continuous rendering approach... */ }
}