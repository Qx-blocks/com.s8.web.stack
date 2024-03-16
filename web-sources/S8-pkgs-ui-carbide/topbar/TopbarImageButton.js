
import { TopbarElement } from "./TopbarElement.js";

import { S8WebFront } from "/S8-pkgs-ui-carbide/S8WebFront.js";


/**
 * 
 */
S8WebFront.CSS_import('/S8-pkgs-ui-carbide/pages/simple/SimplePage.css');


/**
 * 
 */
export class TopbarImageButton extends TopbarElement {


    /**
     * 
     */
    constructor(){
        super();
        this.node = document.createElement("div");
        this.node.classList.add("topbar-imgbutton");
    }


    /**
     * 
     * @returns 
     */
    getEnvelope(){
        return this.node;
    }


    /**
     * icon
     * @param {*} code 
     */
    S8_set_imageURL(path){
       this.node.style.backgroundImage = `url(${path})`;
    }

   /** continuous rendering approach */
    S8_render(){}

    /** continuous rendering approach */
    S8_dispose(){}
}