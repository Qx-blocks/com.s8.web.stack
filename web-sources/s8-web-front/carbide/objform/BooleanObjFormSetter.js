

import { PrimtiveObjFormSetter } from '/s8-web-front/carbide/objform/PrimtiveObjFormSetter.js';

export class BooleanObjFormSetter extends PrimtiveObjFormSetter {

    constructor() {
        super(5);
    }

    createInputNode() {

        /* <input> */
        let inputWrapperNode = document.createElement("div");
        inputWrapperNode.classList.add("objform-input");
        this.inputNode = document.createElement("input");
        this.inputNode.setAttribute("type", "checkbox");
        inputWrapperNode.appendChild(this.inputNode);
        this.buttonNode.appendChild(inputWrapperNode);
        /* </input> */
    }

}

