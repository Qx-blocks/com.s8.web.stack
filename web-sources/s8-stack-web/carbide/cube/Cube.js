
import { NeObject } from 's8-io-bohr/neon/NeObject.js';
import { NeObjectTypeHandler } from 's8-io-bohr/neon/NeObjectTypeHandler.js';


/**
 * 
 */
S8.import_CSS('/carbide/cube/Cube.css');


/**
 * 
 */
export class Cube extends NeObject {

     /**
     * 
     * @param {string} id 
     * @param {NeObjectTypeHandler} type 
     */
    constructor(id, type) {
        super(id, type);
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
