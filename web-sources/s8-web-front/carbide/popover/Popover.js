
import { NeObject } from "/s8-io-bohr-neon/NeObject.js";
import { S8WebFront } from "/s8-web-front/S8WebFront.js";



S8WebFront.CSS_import("/s8-web-front/carbide/popover/Popover.css");


export class Popover extends NeObject{



    constructor(){
        super();

        this.wrapperNode = document.createElement("div");

       

        // set theme
        this.theme = "light";
        this.wrapperNode.classList.add("popover-"+this.theme);      
       
        // set direction
        this.direction = "left-top";
        this.wrapperNode.classList.add("popover-"+this.direction);        
    }

    


    getEnvelope(){
        return this.wrapperNode;
    }



	/**
	 * 
	 * @param {*} direction 
	 */
	S8_set_theme(theme){
		/* ClassList Order MATTERS!!! because theme define colors for direction */
		this.wrapperNode.classList.replace("popover-"+this.theme, "popover-"+theme);
		this.theme = theme;
	}


    /**
	 * 
	 * @param {*} direction 
	 */
	setDirection(direction){
		/* ClassList Order MATTERS!!! because theme define colors for direction */
		this.wrapperNode.classList.replace("popover-"+this.direction, "popover-"+direction);
		this.direction = direction;
	}


    /**
     * 
     * @param {*} iconName 
     * @param {*} fieldName 
     */
    addItem(iconName, fieldName){

    }

    /**
     * 
     * @param {NeObject[]} items 
     */
    S8_set_elements(elements){
        const _this = this;
        
        // remove child nodes
        while(this.wrapperNode.hasChildNodes()){ this.wrapperNode.removeChild(this.wrapperNode.firstChild); }

        elements.forEach(element => {
            //element.menu = _this;
            _this.wrapperNode.appendChild(element.getEnvelope());
        });
    }


    S8_render(){

    }

    S8_dispose(){

    }
}