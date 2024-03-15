
import { S8 } from "/S8-api/S8Context.js";
import { S8Object } from "/S8-api/S8Object.js";

import { S8WebFront } from "/S8-pkgs-ui-carbide/S8WebFront.js";
import { SubNavbar } from "./SubNavbar.js";


/**
 * 
 */
S8WebFront.CSS_import('/S8-pkgs-ui-carbide/navbars/sub/SubNavbar.css');


/**
 * 
 */
export class SubNavbarMenu extends S8Object {



    /**
     * @type{SubNavbar}
     */
    navbar;
    

    /**
     * @type{number}
     */
    index;



    constructor(){
        super();
        this.wrapperNode = document.createElement("div");
        this.wrapperNode.classList.add("subnavbar-menu");

        this.labelNode = document.createElement("div");
        this.labelNode.classList.add("subnavbar-menu-label");
        this.wrapperNode.appendChild(this.labelNode);

        this.iconNode = document.createElement("div");
        this.iconNode.classList.add("subnavbar-menu-icon");
        this.labelNode.appendChild(this.iconNode);

        this.nameNode = document.createElement("div");
        this.nameNode.classList.add("subnavbar-menu-name");
        this.labelNode.appendChild(this.nameNode);
        
        this.wrapperNode.setAttribute("selected", "true");

        const _this = this;
        this.wrapperNode.addEventListener("click", function (event) {
            S8.page.loseFocus();
            _this.navbar.select(_this.index);
            _this.S8_vertex.runVoid("on-selected");
            event.stopPropagation();
        }, false);
    }




    /**
     * 
     * @param {boolean} isSelected 
     */
    setSelected(isSelected){
        this.wrapperNode.setAttribute("selected", isSelected ? "true" : "false");
    }

    
    /**
     * 
     * @returns 
     */
    getEnvelope(){
        return this.wrapperNode;
    }


    /**
     * icon
     * @param {*} code 
     */
    S8_set_icon(code){
        S8WebFront.SVG_insertByCode(this.iconNode, code, 16, 16);
    }


    /**
     * name
     * @param {*} name 
     */
    S8_set_name(name){
       this.nameNode.innerHTML = name;
    }

    
    /**
     * 
     */
    S8_render(){
    }


    S8_unfocus(){ /* lose focus by other means */ }

    /**
     * 
     */
    S8_dispose(){
    }


}