
import { S8 } from "/S8-api/S8Context.js";

import { NeObject } from "/S8-core-bohr-neon/NeObject.js";
import { S8WebFront } from "/S8-pkgs-ui-carbide/S8WebFront.js";



S8WebFront.CSS_import("/S8-pkgs-ui-carbide/paragraph/std/StdParagraph.css");





export class StdParagraph extends NeObject {


    /**
     * @type {HTMLDivElement}
     */
    wrapperNode;



    /**
     * 
     * @param {HTMLDivElement} parentNode 
     */
    constructor() {
        super();

        this.wrapperNode = document.createElement("div");
        this.wrapperNode.classList.add("stdparagraph");
    }



    getEnvelope() {
        return this.wrapperNode;
    }


    /**
     * render
     */
    S8_render() { /* no post processing */ }


    S8_unfocus(){ this.hide(); }


   
    S8_set_text(text){
        this.wrapperNode.innerText = text;
    }


    /**
     * dispose
     */
    S8_dispose() {

        // remove listeners
        this.inputNode.removeEventListener("click", this.clickListener);
    }
}