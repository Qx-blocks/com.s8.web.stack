

import { S8 } from '/S8-api/S8Context.js';
import { PrimtiveLightFormInput } from './PrimtiveLightFormInput.js';

export class BooleanLightFormInput extends PrimtiveLightFormInput {

    constructor() {
        super();
    }

    createInputNode() {

        /* <input> */
        let inputWrapperNode = document.createElement("div");
        inputWrapperNode.classList.add("lightform-input-wrapper");

        this.inputNode = document.createElement("input");
        this.inputNode.classList.add("lightform-input");
        this.inputNode.setAttribute("type", "checkbox");
        inputWrapperNode.appendChild(this.inputNode);
        
        this.wrapperNode.appendChild(inputWrapperNode);
        
        const _this = this;
        this.inputNode.addEventListener("blur", function(event){
            S8.page.loseFocus();
            _this.sendValue();
            event.stopPropagation();
        });
        /* </input> */


    }


    /**
     * @param {boolean} value 
     */
    S8_set_value(value){
        this.inputNode.value = value;
    }

    sendValue(){
        let value = this.inputNode.checked;
        this.S8_vertex.runBool8("on-value-changed", value);
    }
}

