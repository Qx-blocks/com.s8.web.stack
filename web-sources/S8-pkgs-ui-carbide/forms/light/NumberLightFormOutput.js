

import { S8_NumberFormats } from '/S8-pkgs-ui-carbide/S8NumberFormat.js';
import { PrimtiveLightFormOutput } from './PrimitiveLightFormOutput.js';


/**
 * 
 */
export class NumberLightFormOutput extends PrimtiveLightFormOutput {

    /**
     * @type{Intl.NumberFormat}
     */
    format = S8_NumberFormats[0x22];

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

        /* <output> */
        let unitWrapperNode = document.createElement("div");
        unitWrapperNode.classList.add("lightform-unit");
        this.unitNode = document.createElement("span");
        this.unitNode.innerHTML = "(unit)";
        unitWrapperNode.appendChild(this.unitNode);
        this.fieldNode.appendChild(unitWrapperNode);
        /* </unit> */
    }

    /**
     * 
     * @param {number} value 
     */
    S8_set_value(value){
        this.outputNode.innerHTML = `<span>${this.format.format(value)}</span>`;
    }

    S8_set_unit(abbreviation){
        this.unitNode.innerHTML = abbreviation;
    }

    S8_set_format(code){
        this.format = S8_NumberFormats[code];
    }
}
