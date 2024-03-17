


import { S8 } from "/S8-api/S8Context.js";




/**
 * 
 */
export class LightFormHelper {



    constructor(){
        super();
    
        this.wrapperNode = document.createElement("div");
        this.wrapperNode.classList.add("lightform-helper");
    }


    getEnvelope(){
        return this.wrapperNode;
    }




}

class LightFormHelperMessage {

    constructor(){
        super();
        this.wrapperNode = document.createElement("div");
        this.wrapperNode.classList.add("lightform-helper-message");

        this.iconNode = document.createElement("div");
        this.iconNode.classList.add("lightform-helper-message-icon");

        this.textNode = document.createElement("div");
        this.textNode.classList.add("lightform-helper-message-text");
    }




}