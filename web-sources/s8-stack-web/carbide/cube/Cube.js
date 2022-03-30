
import { CubeElement } from './CubeElement.js';
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
     * @param {CubeElement[]} elements 
     */
    S8_set_elements(elements) {
        elements.forEach(element => {
            if (element != null) {
                this.wrapperNode.appendChild(element.getEnvelope());
            }
        });
    }


    S8_dispose() { /* no disposing to be done... */ }
}
