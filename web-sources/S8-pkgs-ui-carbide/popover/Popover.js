
import { S8 } from "/S8-api/S8Context.js";
import { NeObject } from "/S8-core-bohr-neon/NeObject.js";
import { S8WebFront } from "/S8-pkgs-ui-carbide/S8WebFront.js";



S8WebFront.CSS_import("/S8-pkgs-ui-carbide/popover/Popover.css");





export class Popover extends NeObject {


    /**
     * @type {HTMLDivElement}
     */
    node;

    /**
     * @type {boolean}
     */
    isDisplayed;


    /**
     * @type {string}
     */
    theme = "light";


    /**
     * @type {direction}
     */
    direction = "direction";



    /**
     * @type{Popover}
     * For chaining purposes
     */
    popover;


    /**
     * 
     * @param {HTMLDivElement} parentNode 
     */
    constructor() {
        super();

        this.node = document.createElement("div");
        this.node.classList.add("popover");

        // visibility
        this.isDisplayed = false;
        this.node.classList.add("popover-hidden");

        // theme
        this.theme = "light";
        this.node.classList.add("popover-" + this.theme);

        // direction
        this.direction = "left-top";
        this.node.classList.add("popover-" + this.direction);


        // mouseover
        /**
         * @param {Event} event 
         */
        const _this = this;
        this.clickListener = function (event) {
            event.stopPropagation();
            S8.page.loseFocus();
           /* do nothing => inert click */
        }
        this.node.addEventListener("click", this.clickListener, false);
    }


    hide() {
        if (this.isDisplayed) {
            this.node.classList.replace("popover-visible", "popover-hidden");
            this.isDisplayed = false;
        }
    }


    show() {
        if (!this.isDisplayed) {
            this.node.classList.replace("popover-hidden", "popover-visible");
            this.isDisplayed = true;
        }
    }



    getEnvelope() {
        return this.node;
    }


    /**
     * 
     * @param {*} isVisible 
     */
    S8_set_visibility(isVisible) {
        if (isVisible) { this.show() } else { this.hide(); }
    }


    /**
     * 
     * @param {*} direction 
     */
    setTheme(theme) {
        /* ClassList Order MATTERS!!! because theme define colors for direction */
        this.node.classList.replace("popover-" + this.theme, "popover-" + theme);
        this.theme = theme;
    }

    /**
     * 
     * @param {code} code 
     */
    S8_set_theme(code) {
        this.setTheme(S8WebFront.parseTheme(code));
    }


    /**
     * 
     * @param {*} direction 
     */
    setDirection(direction) {
        /* ClassList Order MATTERS!!! because theme define colors for direction */
        this.node.classList.replace("popover-" + this.direction, "popover-" + direction);
        this.direction = direction;

        //this.redraw();
    }


    /**
    * 
    * @param {code} code 
    */
    S8_set_direction(code) {
        this.setDirection(S8WebFront.parseDirection(code));
    }





    /**
     * 
     * @param {NeObject[]} elements 
     */
    S8_set_content(elements) {
        const _this = this;

        // remove child nodes
        while (this.node.hasChildNodes()) { this.node.removeChild(this.node.firstChild); }

        elements.forEach(element => {
            //element.menu = _this;
            _this.node.appendChild(element.getEnvelope());
        });
    }




    /* <chaining> */

    /**
     * 
     * @param {Popover} popover
     */
    S8_set_popover(popover) {
        if (popover != null) {
            this.popover = popover;
            this.node.appendChild(this.popover.getEnvelope());
            //this.popover.attach(this.node);

            /* focus on node */
            this.popover.show();
        }
        else if (popover == null && this.popover != null) {
            this.node.removeChild(this.popover.getEnvelope());
            this.popover = null;
        }
    }


    /**
     * render
     */
    S8_render() { /* no post processing */ }


    S8_unfocus(){ this.hide(); }


    /**
     * dispose
     */
    S8_dispose() {

        // remove listeners
        this.inputNode.removeEventListener("click", this.clickListener);
    }
}