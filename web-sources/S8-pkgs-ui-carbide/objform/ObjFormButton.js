

import { S8 } from "/s8-core-io-bohr-atom/S8.js";

import { ObjFormElement } from "/s8-pkgs-ui-carbide/objform/ObjFormElement.js";




/**
 * 
 */
export class ObjFormButton extends ObjFormElement {



    constructor(){
        super();
    
        this.fieldNode = document.createElement("div");
        this.fieldNode.classList.add("objform-button");

        const _this = this;
        this.fieldNode.addEventListener("click", function(event){
            _this.S8_vertex.runVoid("on-click");
            S8.branch.loseFocus();
            event.stopPropagation();
        });

        this.labelNode = document.createElement("span");
        this.fieldNode.appendChild(this.labelNode);
    }


    getEnvelope(){
        return this.fieldNode;
    }



    /**
     * 
     * @param {*} str 
     */
    S8_set_label(str){
        this.labelNode.innerHTML = str;
    }



    S8_render() { /* nothing to do */ }
    S8_unfocus() { /* nothing to do */ }
    S8_dispose() { /* nothing to do */ }



}