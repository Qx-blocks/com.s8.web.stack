
import { NeObject } from "/S8-core-bohr-neon/NeObject.js";


import { S8WebFront } from "/S8-pkgs-ui-carbide/S8WebFront.js";
import { LightNavbarElement } from "./LightNavbarElement.js";




/**
 * 
 */
S8WebFront.CSS_import('/S8-pkgs-ui-carbide/navbars/light/LightNavbar.css');


/**
 * 
 */
export class LightNavbar extends NeObject {


    /**
     * @type {LightNavbarElement[]}
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
        this.wrapperNode.classList.add("lightnavbar-wrapper");
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
     * @param {TopbarElement[]} elements 
     */
    S8_set_elements(elements){
        let n = elements.length;
        for(let i=0; i<n; i++){
            let element = elements[i];

            element.bar = this;
            element.index = i;
            element.navbar = this;
            this.wrapperNode.appendChild(element.getEnvelope());
        }
        this.elements = elements;
    }

    /**
     * 
     */
    deselectAll(){
        if(this.elements){ this.elements.forEach(element => element.deselect()); }
    }


    /**
     * 
     */
    S8_render(){
    }


    /**
     * 
     */
    S8_dispose(){
    }


}