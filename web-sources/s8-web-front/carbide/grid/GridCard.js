
import { PopoverBox } from '/s8-web-front/carbide/popover/PopoverBox.js';
import { NeObject } from '/s8-io-bohr-neon/NeObject.js';
import { S8WebFront } from '/s8-web-front/S8WebFront.js';
import { Popover } from '/s8-web-front/carbide/popover/Popover.js';



/**
 * 
 */
S8WebFront.CSS_import('/s8-web-front/carbide/grid/Grid.css');

export class GridCard extends NeObject {




    /**
     * @type{Popover}
     */
    popover = null;



    constructor() {
        super();

        this.wrapperNode = document.createElement("div");
        this.wrapperNode.classList.add("grid-card-wrapper");

        this.cardNode = document.createElement("div");
        this.cardNode.classList.add("grid-card-shape");
        this.wrapperNode.appendChild(this.cardNode);

        this.containerNode = document.createElement("div");
        this.containerNode.classList.add("grid-card");

        this.picNode = document.createElement("div");
        this.picNode.classList.add("grid-card-image");
        this.containerNode.appendChild(this.picNode);

        this.titleNode = document.createElement("div");
        this.titleNode.classList.add("grid-card-title");
        this.containerNode.appendChild(this.titleNode);

        this.infoNode = document.createElement("div");
        this.infoNode.classList.add("grid-card-info");
        this.containerNode.appendChild(this.infoNode);
        this.cardNode.appendChild(this.containerNode);


        let _this = this;
        this.isPopoverAttached = false;
        this.containerNode.addEventListener("click", function (event) {
            _this.S8_vertex.runVoid("on-click");
            event.stopPropagation();
        }, false);
    }

    S8_render() { /* continuous rendering approach... */ }

    getEnvelope() {
        return this.wrapperNode;
    }


    attachPopover() {
        this.popoverBox.attach(this.cardNode);
    }

    detachPopover() {
        this.popoverBox.detach();
    }


    /**
     * 
     * @param {Popover} popover
     */
    S8_set_popover(popover) {
        if (popover != null) {
            this.popover = popover;
            this.cardNode.appendChild(this.popover.getEnvelope());
            //this.popover.attach(this.cardNode);

            /* focus on node */
            this.popover.show();
        }
        else if (popover == null && this.popover != null) {
            this.cardNode.removeChild(this.popover.getEnvelope());
            this.popover = null;
        }
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


    /**
     * 
     * @param {string} cards
     */
    S8_set_isSelected(isSelected) {
        if (isSelected) {
            this.containerNode.setAttribute("selected", '');
        }
        else {
            this.containerNode.removeAttribute("selected");
        }
    }


    S8_dispose() { /* continuous rendering approach... */ }
}