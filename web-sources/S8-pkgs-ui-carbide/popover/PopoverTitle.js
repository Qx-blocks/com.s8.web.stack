import { Popover } from "./Popover.js";
import { S8Object } from "/S8-api/S8Object.js";


export class PopoverTitle extends S8Object {



    /**
     * @type {Popover}
     */
    menu;

    
    constructor(){
        super();

        this.wrapperNode = document.createElement("div");
        this.wrapperNode.classList.add("popover-element");

        this.titleNode = document.createElement("h1");
        this.wrapperNode.appendChild(this.titleNode);
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
     * @param {string} name 
     */
    S8_set_text(text){
        this.titleNode.innerHTML = text;
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