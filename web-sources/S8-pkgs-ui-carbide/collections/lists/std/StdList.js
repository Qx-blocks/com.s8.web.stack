

import { NeObject } from '/S8-core-bohr-neon/NeObject.js';

import { S8WebFront } from '/S8-pkgs-ui-carbide/S8WebFront.js';

import { StdListRow } from './StdListRow.js';



/**
 * 
 */
S8WebFront.CSS_import('/S8-pkgs-ui-carbide/collections/lists/std/StdList.css');

export class StdList extends NeObject {


    constructor(){
        super();
        this.wrapperNode = document.createElement("div");
        this.wrapperNode.classList.add("stdlist-wrapper");

        this.headNode = document.createElement("div");
        this.headNode.classList.add("stdlist-head");
        this.headNode.innerHTML = "Branches";
        this.wrapperNode.appendChild(this.headNode);
       
        this.bodyNode = document.createElement("div");
        this.bodyNode.classList.add("stdlist-body");
        this.wrapperNode.appendChild(this.bodyNode);

        let _this = this;
        this.wrapperNode.addEventListener("click", function (event) {
            _this.S8_vertex.runVoid("on-click");
            event.stopPropagation();
        }, false);
    }

    S8_render(){ /* continuous rendering approach... */ }

    getEnvelope(){
        return this.wrapperNode;
    }
    

    /**
     * 
     * @param {StdListRow[]} rows 
     */
    S8_set_rows(rows){

        /* clear wrapper node content */
       while(this.bodyNode.hasChildNodes()){ this.bodyNode.removeChild(this.bodyNode.lastChild); }
       
       /* append cards */
       rows.forEach(row => this.bodyNode.appendChild(row.getEnvelope()));
    }

    S8_dispose(){ /* continuous rendering approach... */ }
}