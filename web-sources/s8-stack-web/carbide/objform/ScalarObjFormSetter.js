

import { PrimtiveObjFormSetter } from '/s8-stack-web/carbide/objform/PrimtiveObjFormSetter.js';


export class ScalarObjFormSetter extends PrimtiveObjFormSetter {

    constructor() {
        super(2);
    }

    createInputNode() {

        /* <input> */
        let inputWrapperNode = document.createElement("div");
        inputWrapperNode.classList.add("objform-input");
        this.inputNode = document.createElement("input");
        this.inputNode.setAttribute("type", "text");
        inputWrapperNode.appendChild(this.inputNode);
        this.fieldNode.appendChild(inputWrapperNode);
        /* </input> */

        /* <unit> */
        let unitWrapperNode = document.createElement("div");
        unitWrapperNode.classList.add("objform-unit");
        this.unitNode = document.createElement("span");
        this.unitNode.innerHTML = "(unit)";
        unitWrapperNode.appendChild(this.unitNode);
        this.fieldNode.appendChild(unitWrapperNode);
        /* </unit> */
    }


    setUnit(abbreviation){
        this.unitNode.innerHTML = abbreviation;
    }


    S8_set_unit(abbreviation){
        this.setUnit(abbreviation);
    }

}
