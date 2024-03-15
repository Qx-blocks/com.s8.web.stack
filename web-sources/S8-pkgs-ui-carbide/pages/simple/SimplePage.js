
import { S8Object } from "/S8-api/S8Object.js";

import { S8WebFront } from "/S8-pkgs-ui-carbide/S8WebFront.js";


/**
 * 
 */
S8WebFront.CSS_import('/S8-pkgs-ui-carbide/pages/simple/SimplePage.css');


/**
 * 
 */
export class SimplePage extends S8Object {


    /**
     * @type {S8Object[]}
     */
    elements;


    /**
     * 
     */
    selectionIndex = 1;

    
    /**
     * 
     */
    constructor(){
        super();
        this.wrapperNode = document.createElement("div");
        this.wrapperNode.classList.add("simplepage");
    }


    /**
     * 
     * @returns 
     */
    getEnvelope(){
        return this.wrapperNode;
    }


    /**
     * 
     * @param {S8Object[]} elements 
     */
    S8_set_menus(elements){
        let n = elements.length;
        for(let i=0; i<n; i++){
            let element = elements[i];
            this.wrapperNode.appendChild(element.getEnvelope());
        }
        this.elements = elements;
    }


   /** continuous rendering approach */
    S8_render(){}

    /** continuous rendering approach */
    S8_dispose(){}
}