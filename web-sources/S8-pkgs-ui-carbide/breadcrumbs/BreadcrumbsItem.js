

import { S8WebFront } from "/S8-pkgs-ui-carbide/S8WebFront.js";
import { S8Object } from "/S8-api/S8Object.js";




/**
 * 
 */
S8WebFront.CSS_import('/S8-pkgs-ui-carbide/breadcrumbs/Breadcrumbs.css');


/**
 * 
 */
export class BreadcrumbsItem extends S8Object {

    /** @type {HTMLDivElement} */
    wrapperNode;

    
    /**
     * 
     */
    constructor(){
        super();
        this.wrapperNode = document.createElement("div");
        this.wrapperNode.classList.add("breadcrumbs-item");
    }


    /**
     * 
     * @returns 
     */
    getEnvelope(){
        return this.wrapperNode;
    }


    /** @param {string} content */
    S8_set_content(content){
       this.wrapperNode.innerText = content;
    }


    /** */
    S8_render(){}


    /** */
    S8_dispose(){}
}