

import { S8WebFront } from '/s8-web-front/S8WebFront.js';
import { NeObject } from '/s8-io-bohr-neon/NeObject.js';


S8WebFront.CSS_import("/s8-web-front/carbide/objform/ObjForm.css");



export const getColor = function (code) {
    switch (code) {
        case 0x00: return "white";
        case 0x01: return "grey";
        case 0x02: return "blue";
        case 0x03: return "purple";
        case 0x04: return "yellow";
        case 0x05: return "green";
        default: throw "Unsupported color code";
    }
}



export class ObjFormElement extends NeObject {

    /** @type{HTMLDivElement} */
    fieldNode;


    constructor(){
        super();
        this.fieldNode = document.createElement("div");
    }

    getEnvelope() {
        return this.fieldNode;
    }
}

