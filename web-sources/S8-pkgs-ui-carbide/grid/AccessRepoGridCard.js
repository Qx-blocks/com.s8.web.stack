
import { S8WebFront } from '/S8-pkgs-ui-carbide/S8WebFront.js';
import { GridCard } from '/S8-pkgs-ui-carbide/grid/GridCard.js';



/**
 * 
 */
S8WebFront.CSS_import('/S8-pkgs-ui-carbide/grid/Grid.css');

export class AccessRepoGridCard extends GridCard {

    constructor() {
        super();

        this.containerNode = document.createElement("div");
        this.containerNode.classList.add("grid-card-repo");
     
        this.picNode = document.createElement("div");
        this.picNode.classList.add("grid-card-repo-image");
        this.containerNode.appendChild(this.picNode);

        this.titleNode = document.createElement("div");
        this.titleNode.classList.add("grid-card-repo-title");
        this.containerNode.appendChild(this.titleNode);

        this.infoNode = document.createElement("div");
        this.infoNode.classList.add("grid-card-repo-info");
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