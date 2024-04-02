
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

        this.baseLayerNode = document.createElement("div");
        this.baseLayerNode.classList.add("simplepage-layer-base");
        this.wrapperNode.appendChild(this.baseLayerNode);
        
        this.modalLayerNode = document.createElement("div");
        this.modalLayerNode.classList.add("simplepage-layer-modal");
        this.modalLayerNode.style.display = "none";
        this.wrapperNode.appendChild(this.modalLayerNode);
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
    S8_set_elements(elements){

        /* remove children */
        S8WebFront.removeChildren(this.baseLayerNode);

        let n = elements.length;
        for(let i=0; i<n; i++){
            let element = elements[i];
            this.baseLayerNode.appendChild(element.getEnvelope());
        }
        this.elements = elements;
    }


     /**
     * 
     * @param {ModalBox} elements 
     */
     S8_set_modalBox(box){
        if(box != null){
            this.modalLayerNode.appendChild(box.getEnvelope());
            this.modalLayerNode.style.removeProperty("display");
        }
        else{
            this.modalLayerNode.style.display = "none";
        }
    }


   /** continuous rendering approach */
    S8_render(){}

    /** continuous rendering approach */
    S8_dispose(){}
}