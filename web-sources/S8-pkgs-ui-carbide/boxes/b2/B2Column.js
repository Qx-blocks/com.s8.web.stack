
import { S8WebFront } from "/S8-pkgs-ui-carbide/S8WebFront.js";
import { S8Object } from "/S8-api/S8Object.js";

S8WebFront.CSS_import('/S8-pkgs-ui-carbide/boxes/b2/B2Box.css');


/**
 * 
 */
export class B2Column extends S8Object {

    /** @type {HTMLDivElement} */
    wrapperNode;
    
    /**
     * 
     */
    constructor(){
        super();
        this.wrapperNode = document.createElement("div");
        this.wrapperNode.classList.add("b2struct-column");
    }


    /**
     * 
     * @returns 
     */
    getEnvelope(){
        return this.wrapperNode;
    }


    /** @param {S8Object[]} elements */
    S8_set_elements(elements){
       S8WebFront.setS8Elements(this.wrapperNode, elements);
    }


    /**
     * 
     * @param {number} width 
     */
    S8_set_width(width){
        if(width < 0){ /* clear width */
            this.wrapperNode.style.removeProperty("width");
        }
        else if(width > 0){
            this.wrapperNode.style.width = `${width * 100}vw`;
        }
    }


    /** render */
    S8_render(){}


    /** dispose */
    S8_dispose(){}

}