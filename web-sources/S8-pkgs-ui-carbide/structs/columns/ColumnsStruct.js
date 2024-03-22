
import { S8WebFront } from "/S8-pkgs-ui-carbide/S8WebFront.js";
import { S8Object } from "/S8-api/S8Object.js";
import { Column } from "./Column.js";



S8WebFront.CSS_import('/S8-pkgs-ui-carbide/structs/columns/Columns.css');


/**
 * 
 */
export class ColumnsStruct extends S8Object {

    /** @type {HTMLDivElement} */
    wrapperNode;


     /** @type {Column[]} */
    columns;


    /** */
    constructor() {
        super();
        this.wrapperNode = document.createElement("div");
        this.wrapperNode.classList.add("struct-columns");
    }


    /** @returns */
    getEnvelope() {
        return this.wrapperNode;
    }


    /** @returns{S8Object[]} */
    getComponents() {
        return this.elements;
    }


    /** @param {Column[]} columns */
    S8_set_columns(columns) {
        this.columns = columns;
        S8WebFront.setS8Elements(this.wrapperNode, columns);
    }


    /** render */
    S8_render(){}


    /** dispose */
    S8_dispose(){}
}