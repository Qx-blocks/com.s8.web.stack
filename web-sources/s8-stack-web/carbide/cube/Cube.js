
import { S8 } from '/s8-io-bohr/atom/S8.js';
import { S8Object } from '/s8-io-bohr/atom/S8Object.js';

/**
 * 
 */
S8.import_CSS('/s8-stack-web/carbide/cube/Cube.css');


/**
 * 
 */
export class Cube extends S8Object {


    constructor() {
        super();
        this.wrapperNode = document.createElement("div");
        this.wrapperNode.classList.add("cube");
    }

    getEnvelope() {
        return this.wrapperNode;
    }


    S8_render() { /* continuous rendering approach... */ }


    /**
     * 
     * @param {*} layers 
     */
    S8_set_layers(layers) {
        layers.forEach(layer => {
            if (layer != null) {
                this.wrapperNode.appendChild(layer.getEnvelope());
            }
        });
    }


    S8_dispose() { /* no disposing to be done... */ }
}
