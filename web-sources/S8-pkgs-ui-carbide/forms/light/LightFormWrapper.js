

import { S8 } from '/S8-api/S8Context.js';
import { LightFormElement } from './LightFormElement.js';
import { S8Object } from '/S8-api/S8Object.js';


S8.page.CSS_import("/S8-pkgs-ui-carbide/forms/light/LightForm.css");

/**
 * 
 */
export class LightFormWrapper extends S8Object {


    /**
     * @type{LightFormElement}
     */
    root;


    /**
     * 
     */
    constructor(){
        super();

        this.node = document.createElement("div");
        this.node.classList.add("lightform-box");

        this.node.addEventListener("scroll", function(event){ event.stopPropagation(); });
    }


    S8_render(){ /* continuous rendering approach... */ }

    /**
     * 
     * @param {*} root 
     */
    S8_set_root(root) {
        this.root = root;
        this.node.appendChild(root.getEnvelope());
    }


    getEnvelope() {
        return this.node;
    }

    /** @returns{S8Object[]} */
    getComponents() {
        return [this.root];
    }

    S8_dispose(){ /* TODO */ }
}
