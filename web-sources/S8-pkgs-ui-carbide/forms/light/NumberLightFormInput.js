

import { S8 } from '/S8-api/S8Context.js';
import { S8_NumberFormats } from '/S8-pkgs-ui-carbide/S8NumberFormat.js';
import { PrimtiveLightFormInput } from './PrimtiveLightFormInput.js';


export class NumberLightFormInput extends PrimtiveLightFormInput {


    /**
     * 
     */
    value = "(unset)";

    /**
     * @type{Intl.NumberFormat}
     */
    format = S8_NumberFormats[0x22];


    constructor() {
        super();
    }

    createInputNode() {

        /* <input> */
        let inputWrapperNode = document.createElement("div");
        inputWrapperNode.classList.add("lightform-input-wrapper");
        this.inputNode = document.createElement("input");
        this.inputNode.classList.add("lightform-input")
        this.inputNode.setAttribute("type", "text");

        inputWrapperNode.appendChild(this.inputNode);
        this.wrapperNode.appendChild(inputWrapperNode);

        const _this = this;
        this.inputNode.addEventListener("change", function(event){
            S8.page.loseFocus();
            _this.sendValue();
            event.stopPropagation();
        });
        /* </input> */

        /* <unit> */
        let unitWrapperNode = document.createElement("div");
        unitWrapperNode.classList.add("lightform-unit");
        this.unitNode = document.createElement("span");
        this.unitNode.innerHTML = "(unit)";
        unitWrapperNode.appendChild(this.unitNode);
        this.wrapperNode.appendChild(unitWrapperNode);
        /* </unit> */
    }


    sendValue(){
        let value = parseFloat(this.inputNode.value);
        this.S8_vertex.runFloat32("on-value-changed", value);
    }

    setUnit(abbreviation){
        this.unitNode.innerHTML = abbreviation;
    }


    S8_set_unit(abbreviation){
        this.setUnit(abbreviation);
    }


    /**
     * 
     * @param {number} value 
     */
    S8_set_value(value){
        this.inputNode.value = this.format.format(value);
    }

    S8_set_format(code){
        this.format = S8_NumberFormats[code];
    }

}
