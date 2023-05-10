

import { S8 } from '/s8-io-bohr/atom/S8.js';
import { NeObject } from '/s8-io-bohr/neon/NeObject.js';


S8.import_CSS("/s8-web-front/carbide/objform/ObjForm.css");



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

export const ICON_ROOT_PATHNAME = "/s8-web-front/carbide/icon/";

export const getSVGShape = function(code) {
    switch (code) {
        
        case 0x02: return "octicons/alert";
        case 0x03: return "octicons/beaker";
        case 0x04: return "octicons/check";
        case 0x05: return "octicons/database";
        case 0x06: return "octicons/gift";

        case 0x22: return "set2/forward";
        case 0x23: return "set2/geopoint";
        default: throw "Unsupported shape code";
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

