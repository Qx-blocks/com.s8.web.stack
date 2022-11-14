

import { PrimtiveObjFormGetter } from '/s8-stack-web/carbide/objform/PrimitiveObjFormGetter.js';


/**
 * 
 */
export class ScalarObjFormGetter extends PrimtiveObjFormGetter {

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

        /* <output> */
        let unitWrapperNode = document.createElement("div");
        unitWrapperNode.classList.add("objform-unit");
        this.unitNode = document.createElement("span");
        this.unitNode.innerHTML = "(unit)";
        unitWrapperNode.appendChild(this.unitNode);
        this.fieldNode.appendChild(unitWrapperNode);
        /* </unit> */
    }

    S8_set_value(value){
        this.outputNode.innerHTML = `<span>${value}</span>`;
    }

    S8_set_unit(abbreviation){
        this.unitNode.innerHTML = abbreviation;
    }
}
