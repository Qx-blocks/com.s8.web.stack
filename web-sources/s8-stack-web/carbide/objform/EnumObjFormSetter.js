

import { PrimtiveObjFormSetter } from '/s8-stack-web/carbide/objform/PrimtiveObjFormSetter.js';
import { S8 } from '/s8-io-bohr/atom/S8.js';


export class EnumObjFormSetter extends PrimtiveObjFormSetter {

    constructor() {
        super(4);
    }

    createInputNode() {

        /* <select> */
        let selectWrapperNode = document.createElement("div");
        selectWrapperNode.classList.add("objform-input");

        this.selectNode = document.createElement("select");
        this.selectNode.setAttribute("name", "list");
        selectWrapperNode.appendChild(this.selectNode);
        this.fieldNode.appendChild(selectWrapperNode);

        // populate with options
        for(let i=0; i<4; i++){
            let optionNode = document.createElement("option");
            optionNode.setAttribute("value", `i=${i}`);
            optionNode.innerText = "Option "+i;
            this.selectNode.appendChild(optionNode);
        }
        /* </select> */
    }

    S8_set_options(options){
        // remove previous nodes
        S8.removeChildren(this.selectNode);

        // add new ones
        let _this = this;
        let n = options.length;
        for(let i=0; i<n; i++){
            let optionNode = document.createElement("option");
            optionNode.setAttribute("value", `i=${i}`);
            optionNode.innerText = options[i];
            this.selectNode.appendChild(optionNode);
        }
    }


}
