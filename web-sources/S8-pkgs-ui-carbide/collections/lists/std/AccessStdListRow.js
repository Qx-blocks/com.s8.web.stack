
import { NeObject } from '/S8-core-bohr-neon/NeObject.js';

import { S8WebFront } from '/S8-pkgs-ui-carbide/S8WebFront.js';



/**
 * 
 */
S8WebFront.CSS_import('/S8-pkgs-ui-carbide/collections/grids/std/StdGrid.css');

export class AccessStdListRow extends NeObject {

    constructor() {
        super();

        this.wrapperNode = document.createElement("div");
        this.wrapperNode.classList.add("stdlist-row-access");

        this.titleNode = document.createElement("div");
        this.titleNode.classList.add("stdlist-row-access-title");
        this.wrapperNode.appendChild(this.titleNode);

        this.infoNode = document.createElement("div");
        this.infoNode.classList.add("stdlist-row-access-info");
        this.wrapperNode.appendChild(this.infoNode);
        
    }


    getEnvelope() {
        return this.wrapperNode;
    }

   

   

    /**
     * 
     * @param {string} cards 
     */
    S8_set_title(name) {
        this.titleNode.innerHTML = name;
    }

    /**
    * 
    * @param {string} cards 
    */
    S8_set_info(name) {
        this.infoNode.innerHTML = name;
    }


    S8_render() { /* continuous rendering approach... */ }

    S8_dispose() { /* continuous rendering approach... */ }
    
}