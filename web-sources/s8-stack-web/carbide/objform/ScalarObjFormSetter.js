

import { PrimtiveObjFormSetter } from '/s8-stack-web/carbide/objform/PrimtiveObjFormSetter.js';


export class ScalarObjFormSetter extends PrimtiveObjFormSetter {


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
        this.inputNode.setAttribute("type", "text");
        inputWrapperNode.appendChild(this.inputNode);
        this.fieldNode.appendChild(inputWrapperNode);

        let _this = this;
        this.inputListener = function(){ _this.sendValue(); };
        this.inputNode.addEventListener("blur", this.inputListener);
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


    sendValue(){
        let newInputValue = this.inputNode.value;
        if(newInputValue != this.value){
            this.value = newInputValue;
            this.S8_vertex.runFloat32("set-value", this.value);
        }
    }

    setUnit(abbreviation){
        this.unitNode.innerHTML = abbreviation;
    }


    S8_set_unit(abbreviation){
        this.setUnit(abbreviation);
    }

    S8_set_value(value){
        this.inputNode.value = value;
    }

}
