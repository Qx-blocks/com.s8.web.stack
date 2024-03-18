
import { S8WebFront } from "/S8-pkgs-ui-carbide/S8WebFront.js";
import { S8Object } from "/S8-api/S8Object.js";
import { B2Column } from "./B2Column.js";



S8WebFront.CSS_import('/S8-pkgs-ui-carbide/boxes/b2/B2Box.css');


/**
 * 
 */
export class B2ColumnsStruct extends S8Object {

    /** @type {HTMLDivElement} */
    wrapperNode;


    /** */
    constructor() {
        super();
        this.wrapperNode = document.createElement("div");
        this.wrapperNode.classList.add("b2struct-columns");
    }


    /** @returns */
    getEnvelope() {
        return this.wrapperNode;
    }


    /** @param {B2Column[]} columns */
    S8_set_columns(columns) {
        S8WebFront.setS8Elements(this.wrapperNode, columns);
    }


    /** render */
    S8_render(){}


    /** dispose */
    S8_dispose(){}
}