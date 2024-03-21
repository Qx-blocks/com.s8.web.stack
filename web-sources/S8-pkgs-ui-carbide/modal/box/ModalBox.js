
import { S8 } from "/S8-api/S8Context.js";
import { S8Object } from "/S8-api/S8Object.js";
import { NeObject } from "/S8-core-bohr-neon/NeObject.js";
import { S8WebFront } from "/S8-pkgs-ui-carbide/S8WebFront.js";

import { StdButton } from "../../buttons/std/StdButton.js";



S8WebFront.CSS_import("/S8-pkgs-ui-carbide/modal/box/ModalBox.css");





export class ModalBox extends NeObject {



    /** @type{object} */
    modalLayer;

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
        this.wrapperNode.classList.add("modalbox");


        this.iconNode = document.createElement("div");
        this.iconNode.classList.add("modalbox-icon");
        this.wrapperNode.appendChild(this.iconNode);
        S8WebFront.SVG_insertByName(this.iconNode, "set3/branch.svg", 64, 64);

        this.mainNode = document.createElement("div");
        this.mainNode.classList.add("modalbox-main");        

        this.messageNode = document.createElement("div");
        this.messageNode.classList.add("modalbox-message");
        this.mainNode.appendChild(this.messageNode);

        this.blocksNode = document.createElement("div");
        this.blocksNode.classList.add("modalbox-blocks");
        this.mainNode.appendChild(this.blocksNode);

        this.validationNode = document.createElement("div");
        this.validationNode.classList.add("modalbox-validation");
        this.mainNode.appendChild(this.validationNode);

        this.wrapperNode.appendChild(this.mainNode);


        // mouseover
        /**
         * @param {Event} event 
         */
        const _this = this;
        this.clickListener = function (event) {
            event.stopPropagation();
            S8.page.loseFocus();
           /* do nothing => inert click */
        }
        this.wrapperNode.addEventListener("click", this.clickListener, false);
    }



    getEnvelope() {
        return this.wrapperNode;
    }


    /**
     * render
     */
    S8_render() { /* no post processing */ }


    S8_unfocus(){ this.hide(); }


    S8_set_icon(code){
        S8WebFront.SVG_insertByCode(this.iconNode, code, 64, 64);
    }
   
    S8_set_message(text){
        this.messageNode.innerText = text;
    }


     /**
     * } items 
     */
     S8_set_blocks(blocks){
        S8WebFront.removeChildren(this.blocksNode);
        const n = blocks.length;
        for(let i =0; i < n; i++) {
            this.blocksNode.appendChild(blocks[i].getEnvelope());
        }
    }


    /**
     * items 
     */
    S8_set_validationItems(items){
        S8WebFront.removeChildren(this.validationNode);
        const n = items.length;
        for(let i =0; i<n; i++){
            const itemNode = document.createElement("div");
            itemNode.classList.add("modalbox-validation-item");
            itemNode.appendChild(items[i].getEnvelope());
            this.validationNode.appendChild(itemNode);
        }
    }


    /**
     * dispose
     */
    S8_dispose() {

        // remove listeners
        this.inputNode.removeEventListener("click", this.clickListener);
    }
}