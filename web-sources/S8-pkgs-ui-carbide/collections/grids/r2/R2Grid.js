

import { NeObject } from '/S8-core-bohr-neon/NeObject.js';

import { S8WebFront } from '/S8-pkgs-ui-carbide/S8WebFront.js';

import { R2GridCard } from './R2GridCard.js';



/**
 * 
 */
S8WebFront.CSS_import('/S8-pkgs-ui-carbide/collections/grids/r2/R2Grid.css');

export class R2Grid extends NeObject {


    constructor(){
        super();
        this.wrapperNode = document.createElement("div");
        this.wrapperNode.classList.add("r2grid-wrapper");

        this.coreNode = document.createElement("div");
        this.coreNode.classList.add("r2grid-core");
        this.wrapperNode.appendChild(this.coreNode);

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
     * @param {R2GridCard[]} cards 
     */
    S8_set_cards(cards){

        /* clear wrapper node content */
       while(this.coreNode.hasChildNodes()){ this.coreNode.removeChild(this.coreNode.lastChild); }
       
       /* append cards */
       cards.forEach(card => this.coreNode.appendChild(card.getEnvelope()));
    }

    S8_dispose(){ /* continuous rendering approach... */ }
}