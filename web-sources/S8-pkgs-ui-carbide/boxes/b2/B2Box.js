
import { S8WebFront } from "/S8-pkgs-ui-carbide/S8WebFront.js";
import { S8Object } from "/S8-api/S8Object.js";




/**
 * 
 */
S8WebFront.CSS_import('/S8-pkgs-ui-carbide/boxes/b2/B2Box.css');


/**
 * 
 */
export class B2Box extends S8Object {

    /** @type {HTMLDivElement} */
    wrapperNode;
    
    /**
     * 
     */
    constructor(){
        super();
        this.wrapperNode = document.createElement("div");
        this.wrapperNode.classList.add("b2box");

        this.headerNode = document.createElement("div");
        this.headerNode.classList.add("b2box-header");
        this.wrapperNode.appendChild(this.headerNode);

        this.bodyNode = document.createElement("div");
        this.bodyNode.classList.add("b2box-body");
        this.wrapperNode.appendChild(this.bodyNode);
    }


    /**
     * 
     * @returns 
     */
    getEnvelope(){
        return this.wrapperNode;
    }


    /** @param {string} text */
    S8_set_title(text){
       this.headerNode.innerText = text;
    }
 


    /** @param {S8Object[]} elements */
    S8_set_elements(elements){
       S8WebFront.setS8Elements(this.bodyNode, elements);
    }


    /** render */
    S8_render(){}


    /** dispose */
    S8_dispose(){}

}