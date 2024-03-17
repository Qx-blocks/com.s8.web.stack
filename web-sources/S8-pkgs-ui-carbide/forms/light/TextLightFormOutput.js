

import { PrimtiveLightFormOutput } from './PrimitiveLightFormOutput.js';


/**
 * 
 */
export class TextLightFormOutput extends PrimtiveLightFormOutput {

    constructor() {
        super(2);
    }

    createOutputNode() {

        /* <output> */
        this.outputNode = document.createElement("div");
        this.outputNode.classList.add("lightform-output");
        this.fieldNode.appendChild(this.outputNode);
        this.outputNode.innerHTML = `<span>(value)</span>`;
        /* </output> */

    }

    S8_set_value(value){
        this.outputNode.innerHTML = `<span>${value}</span>`;
    }
}
