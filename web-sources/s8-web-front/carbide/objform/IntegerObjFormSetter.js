

import { PrimtiveObjFormSetter } from '/s8-web-front/carbide/objform/PrimtiveObjFormSetter.js';


export class IntegerObjFormSetter extends PrimtiveObjFormSetter {


    /**
     * 
     */
    value = "(unset)";

    constructor() {
        super(2);
    }

    createInputNode() {

        /* <input> */
        let inputWrapperNode = document.createElement("div");
        inputWrapperNode.classList.add("objform-input");
        this.inputNode = document.createElement("input");
        this.inputNode.setAttribute("type", "number");
        inputWrapperNode.appendChild(this.inputNode);
        this.buttonNode.appendChild(inputWrapperNode);

        let _this = this;
        this.inputListener = function(){ _this.sendValue(); };
        this.inputNode.addEventListener("blur", this.inputListener);
        /* </input> */

    }

    sendValue(){
        let newInputValue = this.inputNode.value;
        if(newInputValue != this.value){
            this.value = newInputValue;
            this.S8_vertex.runInt32("set-value", this.value);
        }
    }

    S8_set_value(value){
        this.inputNode.value = value;
    }

}
