
import { S8 } from "/S8-api/S8Context.js";
import { S8Object } from "/S8-api/S8Object.js";

import { S8WebFront } from "/S8-pkgs-ui-carbide/S8WebFront.js";
import { ThumbNavbar } from "./ThumbNavbar.js";


/**
 * 
 */
S8WebFront.CSS_import('/S8-pkgs-ui-carbide/navbars/thumb/ThumbNavbar.css');


/**
 * 
 */
export class ThumbNavbarMenu extends S8Object {



    /**
     * @type{ThumbNavbar}
     */
    navbar;
    

    /**
     * @type{number}
     */
    index;



    constructor(){
        super();
        this.wrapperNode = document.createElement("div");
        this.wrapperNode.classList.add("thumbnavbar-menu");

        this.imageNode = document.createElement("img");
        this.imageNode.classList.add("thumbnavbar-menu-image");
        this.wrapperNode.appendChild(this.imageNode);

        this.nameNode = document.createElement("div");
        this.nameNode.classList.add("thumbnavbar-menu-name");
        this.wrapperNode.appendChild(this.nameNode);
        
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
     * @param {string} pathname 
     */
    S8_set_imageURL(pathname){
       this.imageNode.src = pathname;
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