

import { S8WebFront } from "/S8-pkgs-ui-carbide/S8WebFront.js";
import { S8Object } from "/S8-api/S8Object.js";
import { forSubComponents } from "/S8-pkgs-ui-carbide/carbide.js";




/**
 * 
 */
S8WebFront.CSS_import('/S8-pkgs-ui-carbide/structs/gs/GsStruct.css');


/**
 * 
 */
export class GsBody extends S8Object {

    /** @type {HTMLDivElement} */
    wrapperNode;


    /**
     * @type{S8Object[]}
     */
    elements;
    
    /**
     * 
     */
    constructor(){
        super();
        this.wrapperNode = document.createElement("div");
        this.wrapperNode.classList.add("gsbody");
    }


    /**
     * 
     * @returns 
     */
    getEnvelope(){
        return this.wrapperNode;
    }


   

    /** @returns{S8Object[]} */
    getComponents() {
        return this.elements;
    }
    


    /** @param {S8Object[]} element */
    S8_set_elements(elements){
        this.elements = elements;
        S8WebFront.setS8Elements(this.wrapperNode, elements);
    }

    /** render */
    S8_render(){}

    /** dispose */
    S8_dispose(){}
}