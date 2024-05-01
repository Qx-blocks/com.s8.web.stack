
import { S8Object } from "/S8-api/S8Object.js";


/**
 * 
 */
export class TopbarElement extends S8Object {


    /**
     * @type {S8Object[]}
     */
    leftStack;


    /**
     * 
     */
    selectionIndex = 1;

    
    /**
     * 
     */
    constructor(){
        super();
        this.node = document.createElement("div");
        this.node.classList.add("simplepage");
    }


    /**
     * 
     * @returns 
     */
    getEnvelope(){
        return this.node;
    }


    /**
     * 
     * @param {S8Object[]} elements 
     */
    S8_set_elements(elements){
        let n = elements.length;
        for(let i=0; i<n; i++){
            let element = elements[i];
            this.node.appendChild(element.getEnvelope());
        }
        this.elements = elements;
    }


   /** continuous rendering approach */
    S8_render(){}

    /** continuous rendering approach */
    S8_dispose(){}
}