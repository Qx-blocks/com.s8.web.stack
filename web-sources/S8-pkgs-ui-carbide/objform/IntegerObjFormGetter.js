

import { PrimtiveObjFormGetter } from '/S8-pkgs-ui-carbide/objform/PrimitiveObjFormGetter.js';


/**
 * 
 */
export class IntegerObjFormGetter extends PrimtiveObjFormGetter {

    constructor() {
        super(2);
    }

    createOutputNode() {

        /* <output> */
        this.outputNode = document.createElement("div");
        this.outputNode.classList.add("objform-output");
        this.fieldNode.appendChild(this.outputNode);
        this.outputNode.innerHTML = `<span>(value)</span>`;
        /* </output> */

    }

    S8_set_value(value){
        this.outputNode.innerHTML = `<span>${value}</span>`;
    }
}
