

import { S8Object } from '/S8-api/S8Object.js';


/**
 * 
 */
export class ObjFormTextDoc extends S8Object {

    constructor() {
        super();

         /* <output> */
         this.node = document.createElement("div");
         this.node.classList.add("objform-doc-text");
         /* </output> */

    }

    getEnvelope(){
        return this.node;
    }


    /**
     * 
     * @param {string} value 
     */
    S8_set_text(value){
        this.node.innerHTML = value;
    }

    S8_render(){ /* no post processing */ }
    S8_dispose(){ /* continuous */ }
    
}
