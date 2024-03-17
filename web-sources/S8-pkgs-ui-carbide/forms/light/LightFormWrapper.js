
import { CubeElement } from '/S8-pkgs-ui-carbide/cube/CubeElement.js';
import { S8WebFront } from '../../S8WebFront.js';
import { S8 } from '/S8-api/S8Context.js';


S8.page.CSS_import("/S8-pkgs-ui-carbide/forms/light/LightForm.css");

/**
 * 
 */
export class LightFormWrapper extends CubeElement {

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
       this.node.appendChild(root.getEnvelope());
    }


    getEnvelope() {
        return this.node;
    }

    S8_dispose(){ /* TODO */ }
}
