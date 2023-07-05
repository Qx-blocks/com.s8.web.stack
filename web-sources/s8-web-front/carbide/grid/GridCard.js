
import { PopoverBox } from '/s8-web-front/carbide/popover/PopoverBox.js';
import { NeObject } from '/s8-io-bohr-neon/NeObject.js';
import { S8WebFront } from '/s8-web-front/S8WebFront.js';



/**
 * 
 */
S8WebFront.CSS_import('/s8-web-front/carbide/grid/Grid.css');

export class GridCard extends NeObject {




    /**
     * @type {PopoverBox}
     */
    popoverBox = null;

    constructor() {
        super();

        this.wrapperNode = document.createElement("div");
        this.wrapperNode.classList.add("grid-card-wrapper");

        this.cardNode = document.createElement("div");
        this.cardNode.classList.add("grid-card");
       
        this.picNode = document.createElement("div");
        this.picNode.classList.add("grid-card-image");
        this.cardNode.appendChild(this.picNode);

        this.titleNode = document.createElement("div");
        this.titleNode.classList.add("grid-card-title");
        this.cardNode.appendChild(this.titleNode);

        this.infoNode = document.createElement("div");
        this.infoNode.classList.add("grid-card-info");
        this.cardNode.appendChild(this.infoNode);
        this.wrapperNode.appendChild(this.cardNode);


        let popoverBox = new PopoverBox();
        popoverBox.show();
        popoverBox.setDirection("top");
        popoverBox.setTheme("light");
        this.popoverBox = popoverBox;


        let _this = this;
        this.isPopoverAttached = false;
        this.cardNode.addEventListener("click", function (event) {
            _this.cardNode.setAttribute("selected", '');
            _this.S8_vertex.runVoid("on-click");
        }, false);
    }

    S8_render() { /* continuous rendering approach... */ }

    getEnvelope() {
        return this.wrapperNode;
    }


    attachPopover(){
        this.popoverBox.attach(this.cardNode);
    }

    detachPopover(){
        this.popoverBox.detach();
    }


    /**
     * 
     * @param {Popover} popoverBox 
     */
    S8_set_popoverContent(elements) {

        this.attachPopover();

        /* clear child */
        this.popoverBox.clearContent();

        /* elements */
        elements.forEach(element => this.popoverBox.node.appendChild(element.getEnvelope()));

        /* focus on node */
        this.popoverBox.show();
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


    S8_dispose() { /* continuous rendering approach... */ }
}