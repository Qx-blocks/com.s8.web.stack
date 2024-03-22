

import { S8WebFront } from '/S8-pkgs-ui-carbide/S8WebFront.js';

import { S8Object } from '/S8-api/S8Object.js';


/**
 * 
 */
export class LightFormSet extends S8Object {


    /** @type{HTMLDivElement} */
    wrapperNode;

    constructor() {
        super();
        this.wrapperNode = document.createElement("div");
    }


    getEnvelope(){
        return this.wrapperNode;
    }

    /** @returns{S8Object[]} */
    getComponents(){
        return this.fields;
    }
    

    S8_set_fields(fields) {
        // remove previous nodes
        S8WebFront.removeChildren(this.wrapperNode);

        // add new ones
        let _this = this;
        this.fields = fields;
        fields.forEach(field => {
            _this.wrapperNode.appendChild(field.getEnvelope());
        });
    }



    S8_render() { /* continuous rendering approach... */ }

    S8_dispose() { /* nothing to dispose*/ }

    S8_unfocus() { /* stable when unfocussing : do nothing */ }
}

