import { S8Object } from "/S8-api/S8Object.js";
import { S8WebFront } from "/S8-pkgs-ui-carbide/S8WebFront.js";

import { PaperFormFieldOption } from "./PaperFormFieldOption.js";




/**
 * 
 */
export class PaperFormField extends S8Object {

    /**
     * @type{HTMLDivElement}
     */
    wrapperNode;



    /**
     * @type{PaperFormFieldOption[]}
     */
    options;

    /**
        * @type{number}
        */
    selectedIndex = -1;


    constructor() {
        super();
        this.wrapperNode = document.createElement("div");
        this.wrapperNode.classList.add("paperform-field");

        this.titleNode = document.createElement("h1");
        this.titleNode.innerHTML = "${title}";
        this.wrapperNode.appendChild(this.titleNode);

        this.descriptionNode = document.createElement("h2");
        this.descriptionNode.innerHTML = "${description}";
        this.wrapperNode.appendChild(this.descriptionNode);

        this.optionsContainerNode = document.createElement("div");
        this.optionsContainerNode.classList.add("paperform-options-container");
        this.wrapperNode.appendChild(this.optionsContainerNode);
    }


    getEnvelope() { return this.wrapperNode; }

    /**
     * 
     * @param {number} index 
     */
    onSelected(index) {
        this.options[this.selectedIndex].deselect();
        this.selectedIndex = index;
        this.options[this.selectedIndex].select();
        this.S8_vertex.runUInt8("on-selected", index);
    }


    /**
     * 
     * @param {string} text 
     */
    S8_set_title(text) {
        this.titleNode.innerHTML = text;
    }


    /**
     * 
     * @param {string} text 
     */
    S8_set_description(text) {
        this.descriptionNode.innerHTML = text;
    }


    /**
     * 
     * @param {PaperFormFieldOption[]} options 
     */
    S8_set_options(options) {
        this.options = options;
        const n = options.length;
        let option;
        for (let i = 0; i < n; i++) {
            option = options[i];
            option.field = this;
            option.index = i;
            this.optionsContainerNode.appendChild(option.getEnvelope());
        }
    }

    /**
    * 
    * @param {PaperFormFieldOption[]} options 
    */
    S8_set_selectedIndex(index) {
        if(this.options) {
            if(this.selectedIndex >= 0){  this.options[this.selectedIndex].deselect(); }
            this.selectedIndex = index;
            this.options[this.selectedIndex].select();
        }
    }

    S8_render() { /* nothing to do */ }
    S8_dispose() { /* nothing to do */ }
}