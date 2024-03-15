
import { S8 } from "/S8-api/S8Context.js";
import { NeObject } from "/S8-core-bohr-neon/NeObject.js";

import { S8WebFront } from "/S8-pkgs-ui-carbide/S8WebFront.js";

import { Popover } from "/S8-pkgs-ui-carbide/popover/Popover.js";
import { LightNavbar } from "./LightNavbar.js";


/**
 * 
 */
S8WebFront.CSS_import('/S8-pkgs-ui-carbide/navbars/light/LightNavbar.css');


/**
 * 
 */
export class LightNavbarElement extends NeObject {



    /**
     * @type{LightNavbar}
     */
    bar;
    

    /**
     * @type{number}
     */
    index;


    /**
     * @type{boolean}
     */
    isSelected;


    constructor(){
        super();
        this.node = document.createElement("div");
        this.node.classList.add("lightnavbar-element");

        /* selection */
        this.node.setAttribute("selected", "false");
        this.isSelected = false;

        const _this = this;
        this.node.addEventListener("click", function (event) {
            S8.page.loseFocus();
            _this.toggle();
            event.stopPropagation();
        }, false);
    }



    toggle(){
        if(!this.isSelected){
           this.select();
        }
        else{
            this.deselect();
        }
    }


    select(){
        if(!this.isSelected){

            /* deselect the others */
            this.bar.deselectAll();
            
            this.node.setAttribute("selected", "true");
            this.S8_vertex.runVoid("on-selected");
            this.isSelected = true;
        }
    }


    /**
     * 
     * @param {boolean} isSelected 
     */
    deselect(){
        if(this.isSelected){
            this.node.setAttribute("selected", "false");
            this.S8_vertex.runVoid("on-deselected");
            this.isSelected = false;
        }
    }

    
    /**
     * 
     * @returns 
     */
    getEnvelope(){
        return this.node;
    }


    /**
     * name
     * @param {*} name 
     */
    S8_set_name(name){
       this.node.innerHTML = name;
    }


    /**
     * name
     * @param {*} name 
     */
    S8_set_isSelected(isSelected){
        this.select(isSelected);
    }


    /**
     * 
     * @param {Popover} popover 
     */
    S8_set_popover(popover){
        if(popover != null){
            this.popoverNode = popover.getEnvelope();
            this.node.appendChild(this.popoverNode);
        }
        else if(popover == null){
            if(this.popoverNode != null){
                this.node.removeChild(this.popoverNode);
            }
            this.popoverNode = null;
        }
    }



    
    /**
     * 
     */
    S8_render(){
    }


    /**
     * 
     */
    S8_dispose(){
    }


}