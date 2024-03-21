
import { S8WebFront } from '/S8-pkgs-ui-carbide/S8WebFront.js';
import { StdGridCard } from './StdGridCard.js';



/**
 * 
 */
S8WebFront.CSS_import('/S8-pkgs-ui-carbide/collections/grids/std/StdGrid.css');

export class AccessStdGridCard extends StdGridCard {

    constructor() {
        super();

        this.containerNode = document.createElement("div");
        this.containerNode.classList.add("stdgrid-card-access");
     
        this.picNode = document.createElement("div");
        this.picNode.classList.add("stdgrid-card-access-image");
        this.containerNode.appendChild(this.picNode);

        this.titleNode = document.createElement("div");
        this.titleNode.classList.add("stdgrid-card-access-title");
        this.containerNode.appendChild(this.titleNode);

        this.infoNode = document.createElement("div");
        this.infoNode.classList.add("stdgrid-card-access-info");
        this.containerNode.appendChild(this.infoNode);

        this.cardNode.appendChild(this.containerNode);


        let _this = this;
        this.isPopoverAttached = false;
        this.containerNode.addEventListener("click", function (event) {
            _this.S8_vertex.runVoid("on-click");
            event.stopPropagation();
        }, false);
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

    S8_render() { /* continuous rendering approach... */ }

    S8_dispose() { /* continuous rendering approach... */ }
    
}