
import { NeObject } from "/S8-core-bohr-neon/NeObject.js";

import { S8WebFront } from "/S8-pkgs-ui-carbide/S8WebFront.js";
import { S8Object } from "/S8-api/S8Object.js";




/**
 * 
 */
S8WebFront.CSS_import('/S8-pkgs-ui-carbide/structs/gs/GsBody.css');


/**
 * 
 */
export class GsBody extends NeObject {

    /** @type {HTMLDivElement} */
    wrapperNode;

    
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


    /** @param {S8Object[]} element */
    S8_set_elements(elements){
        S8WebFront.setS8Elements(this.wrapperNode, elements);
    }

    /** render */
    S8_render(){}

    /** dispose */
    S8_dispose(){}
}