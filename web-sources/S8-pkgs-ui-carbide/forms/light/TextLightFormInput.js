

import { S8 } from '/S8-api/S8Context.js';
import { PrimtiveLightFormInput } from './PrimtiveLightFormInput.js';


export class TextLightFormInput extends PrimtiveLightFormInput {


    /**
     * 
     */
    value = "(unset)";

    constructor() {
        super();
    }

    createInputNode() {

        /* <input> */
        let inputWrapperNode = document.createElement("div");
        inputWrapperNode.classList.add("lightform-input-wrapper");
        this.inputNode = document.createElement("input");
        this.inputNode.classList.add("lightform-input");
        this.inputNode.setAttribute("type", "text");

        inputWrapperNode.appendChild(this.inputNode);
        this.fieldNode.appendChild(inputWrapperNode);

        const _this = this;
        this.inputNode.addEventListener("blur", function(event){
            S8.page.loseFocus();
            _this.sendValue();
            event.stopPropagation();
        });
        /* </input> */

    }

    sendValue(){
        let newInputValue = this.inputNode.value;
        if(newInputValue != this.value){
            this.value = newInputValue;
            this.S8_vertex.runStringUTF8("on-value-changed", this.value);
        }
    }

    S8_set_value(value){
        this.inputNode.value = value;
    }

}
