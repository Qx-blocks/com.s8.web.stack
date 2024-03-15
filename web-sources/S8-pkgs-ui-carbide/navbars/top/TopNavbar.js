
import { S8Object } from "/S8-api/S8Object.js";

import { S8WebFront } from "/S8-pkgs-ui-carbide/S8WebFront.js";

import { SubNavbarMenu } from "./TopNavbarMenu.js";




/**
 * 
 */
S8WebFront.CSS_import('/S8-pkgs-ui-carbide/navbars/top/TopNavbar.css');


/**
 * 
 */
export class TopNavbar extends S8Object {


    /**
     * @type {SubNavbarMenu[]}
     */
    menus;


    /**
     * 
     */
    selectionIndex = 1;

    
    /**
     * 
     */
    constructor(){
        super();
        this.wrapperNode = document.createElement("div");
        this.wrapperNode.classList.add("subnavbar-header");
    }


    /**
     * 
     * @returns 
     */
    getEnvelope(){
        return this.wrapperNode;
    }


    /**
     * 
     * @param {NavbarMenu[]} menus 
     */
    S8_set_menus(menus){
        let n = menus.length;
        for(let i=0; i<n; i++){
            let menu = menus[i];
            menu.index = i;
            menu.navbar = this;
            this.wrapperNode.appendChild(menu.getEnvelope());
        }
        this.menus = menus;

        this.updateSelection();
    }


    S8_set_selectedIndex(index){
        this.select(index);
    }


    /**
     * 
     * @param {*} index 
     */
    select(index){
        this.selectionIndex = index;
        this.updateSelection();
    }


    /**
     * 
     * @param {*} index 
     */
    updateSelection(){
        let n = this.menus.length;
        for(let i=0; i<n; i++){
            this.menus[i].setSelected(i == this.selectionIndex);
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