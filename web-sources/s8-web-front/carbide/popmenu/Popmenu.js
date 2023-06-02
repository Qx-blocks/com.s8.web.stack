import { PopmenuItem } from "/s8-web-front/carbide/popmenu/PopmenuItem.js";
import { NeObject } from "/s8-io-bohr-neon/NeObject.js";
import { S8 } from "/s8-io-bohr-atom/S8.js";



S8.import_CSS("/s8-web-front/carbide/popmenu/Popmenu.css");


export class Popmenu extends NeObject{



    constructor(){
        super();

        this.wrapperNode = document.createElement("div");

        this.wrapperNode.classList.add("popmenu");        

        // set direction
        this.direction = "left-top";
        this.wrapperNode.classList.add("popmenu-"+this.direction);        
    }

    


    getEnvelope(){
        return this.wrapperNode;
    }



	/**
	 * 
	 * @param {*} direction 
	 */
	setDirection(direction){
		/* ClassList Order MATTERS!!! */
		this.wrapperNode.classList.replace("popmenu-"+this.direction, "popmenu-"+direction);
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
     * @param {PopmenuItem[]} items 
     */
    S8_set_items(items){
        const _this = this;
        
        // remove child nodes
        while(this.wrapperNode.hasChildNodes()){ this.wrapperNode.removeChild(this.wrapperNode.firstChild); }

        items.forEach(element => {
            element.menu = _this;
            _this.wrapperNode.appendChild(element.getEnvelope());
        });
    }


    S8_render(){

    }

    S8_dispose(){

    }
}