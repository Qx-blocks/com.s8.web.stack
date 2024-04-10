import { PaperFormField } from "./PaperFormField.js";
import { S8Object } from "/S8-api/S8Object.js";
import { S8 } from "/S8-api/S8Context.js";


import { S8WebFront } from "/S8-pkgs-ui-carbide/S8WebFront.js";



S8.page.CSS_import("/S8-pkgs-ui-carbide/forms/paper/PaperForm.css");


/**
 * 
 */
export class PaperForm extends S8Object {

    /**
     * @type{HTMLDivElement}
     */
    wrapperNode;

    constructor() {
        super();
        this.wrapperNode = document.createElement("div");
        this.wrapperNode.classList.add("paperform-wrapper");

        this.coreNode = document.createElement("div");
        this.coreNode.classList.add("paperform-core");
        this.wrapperNode.appendChild(this.coreNode);
    }


    getEnvelope(){ return this.wrapperNode; }

    /**
     * 
     * @param {PaperFormField[]} fields 
     */
    S8_set_fields(fields) {
        S8WebFront.setS8Elements(this.coreNode, fields);
    }



    S8_render(){ /* nothing to do */ }
    S8_dispose(){ /* nothing to do */ }
}