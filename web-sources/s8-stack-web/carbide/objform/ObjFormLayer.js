
import { CubeElement } from '/s8-stack-web/carbide/cube/CubeElement.js';
import { S8 } from '/s8-io-bohr/atom/S8.js';

S8.import_CSS("/s8-stack-web/carbide/dock/Dock.css");

/**
 * 
 */
export class ObjFormLayer extends CubeElement {

    /**
     * 
     */
    constructor(){
        super();

        this.node = document.createElement("div");
        this.node.classList.add("objform-box");
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
