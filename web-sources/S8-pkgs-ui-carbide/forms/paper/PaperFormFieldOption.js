import { PaperFormField } from "./PaperFormField.js";
import { S8Object } from "/S8-api/S8Object.js";





/**
 * 
 */
export class PaperFormFieldOption extends S8Object {


    /**
     * @type{PaperFormField}
     */
    field;


    /**
     * @type{number}
     */
    index;


    /**
     * @type{HTMLDivElement}
     */
    wrapperNode;


    /**
     * @type{boolean}
     */
    isSelected = false;


    constructor() {
        super();
        this.wrapperNode = document.createElement("div");
        this.wrapperNode.classList.add("paperform-option");

        this.primaryNode = document.createElement("div");
        this.primaryNode.classList.add("paperform-option-primary");
        this.primaryNode.innerHTML = "${title}";
        this.wrapperNode.appendChild(this.primaryNode);

        this.secondaryNode = document.createElement("div");
        this.secondaryNode.classList.add("paperform-option-secondary");
        this.secondaryNode.innerHTML = "${description}";
        this.wrapperNode.appendChild(this.secondaryNode);

        this.deselect();

        const _this = this;
        this.wrapperNode.addEventListener("click", function(){ _this.field.onSelected(_this.index); }, false);

        
    }

    getEnvelope(){ return this.wrapperNode; }


    


    S8_set_primaryText(text) {
        this.primaryNode.innerHTML = text;
    }

    S8_set_secondaryText(text) {
        this.secondaryNode.innerHTML = text;
    }

    S8_set_isSelected(state) {
       if(state){ this.select(); }
       else{ this.deselect(); }
    }


    select() {
        this.wrapperNode.setAttribute("selected", "true");
        this.isSelected = true;
    }

    deselect() {
        this.wrapperNode.setAttribute("selected", "false");
        this.isSelected = false;
    }



    S8_render(){ /* nothing to do */ }
    S8_dispose(){ /* nothing to do */ }
}