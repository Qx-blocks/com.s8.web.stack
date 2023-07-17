import { ObjFormElement } from "/s8-web-front/carbide/objform/ObjFormElement.js";
import { S8 } from "/s8-io-bohr-atom/S8.js";



/**
 * 
 */
export class ObjFormButton extends ObjFormElement {



    constructor(){
        super();
    
        this.buttonNode = document.createElement("div");
        this.buttonNode.classList.add("objform-button");

        const _this = this;
        this.buttonNode.addEventListener("click", function(event){
            _this.S8_vertex.runVoid("on-click");
            S8.branch.loseFocus();
            event.stopPropagation();
        });

        this.labelNode = document.createElement("span");
        this.buttonNode.appendChild(this.labelNode);
    }


    getEnvelope(){
        return this.buttonNode;
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