
import { S8WebFront } from "/s8-web-front/S8WebFront.js";
import { NeObject } from "/s8-io-bohr-neon/NeObject.js";


/**
 * 
 */
S8WebFront.CSS_import('/s8-web-front/carbide/navbar/Navbar.css');


/**
 * 
 */
export class NavbarMenu extends NeObject {

    

    /**
     * @type{number}
     */
    index;


    constructor(){
        super();
        this.wrapperNode = document.createElement("div");
        this.wrapperNode.classList.add("navbar-menu");


        this.labelNode = document.createElement("div");
        this.labelNode.classList.add("navbar-menu-label");
        this.wrapperNode.appendChild(this.labelNode);

        this.iconNode = document.createElement("div");
        this.iconNode.classList.add("navbar-menu-icon");
        this.labelNode.appendChild(this.iconNode);

        this.nameNode = document.createElement("div");
        this.nameNode.classList.add("navbar-menu-name");
        this.labelNode.appendChild(this.nameNode);
        
    }




    changeSelection(isSelected){
        if(isSelected){
            this.wrapperNode.setAttribute("selected", '');
        }
        else{
            this.wrapperNode.removeAttribute("selected");
        }      
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


    /**
     * 
     */
    S8_dispose(){
    }


}