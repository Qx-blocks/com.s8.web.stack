
import { S8WebFront } from "/S8-pkgs-ui-carbide/S8WebFront.js";
import { S8Object } from "/S8-api/S8Object.js";
import { BreadcrumbsItem } from "./BreadcrumbsItem.js";




/**
 * 
 */
S8WebFront.CSS_import('/S8-pkgs-ui-carbide/breadcrumbs/Breadcrumbs.css');


/**
 * 
 */
export class Breadcrumbs extends S8Object {

    /** @type {HTMLDivElement} */
    wrapperNode;
    
    /**
     * 
     */
    constructor(){
        super();
        this.wrapperNode = document.createElement("div");
        this.wrapperNode.classList.add("breadcrumbs");
    }


    /**
     * 
     * @returns 
     */
    getEnvelope(){
        return this.wrapperNode;
    }


    /** @param {BreadcrumbsItem[]} items */
    S8_set_items(items){
       S8WebFront.setS8Elements(this.wrapperNode, items);
    }


    /** render */
    S8_render(){}


    /** dispose */
    S8_dispose(){}

}