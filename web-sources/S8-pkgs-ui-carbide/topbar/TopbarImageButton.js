
import { TopbarElement } from "./TopbarElement.js";


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