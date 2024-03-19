
import { S8WebFront } from "/S8-pkgs-ui-carbide/S8WebFront.js";


import { TopbarElement } from "./TopbarElement.js";


import { Popover } from "/S8-pkgs-ui-carbide/popover/Popover.js";


/**
 * 
 */
S8WebFront.CSS_import('/S8-pkgs-ui-carbide/topbar/TopbarIconTextButton.css');


/**
 * 
 */
export class TopbarIconTextButton extends TopbarElement {


    /** @type{Popover} */
    tooltipPopover;

    /**
     * 
     */
    constructor() {
        super();
        this.wrapperNode = document.createElement("div");
        this.wrapperNode.classList.add("topbar-ictxbutton");

        this.iconNode = document.createElement("div");
        this.iconNode.classList.add("topbar-ictxbutton-icon");
        this.wrapperNode.appendChild(this.iconNode);

        this.textNode = document.createElement("div");
        this.textNode.classList.add("topbar-ictxbutton-text");
        this.wrapperNode.appendChild(this.textNode);


        this.tooltipPopover = new Popover();
        this.tooltipPopover.setTheme("dark");
        this.tooltipPopover.setDirection("top");
        this.wrapperNode.appendChild(this.tooltipPopover.getEnvelope());

        this.tooltipContent = document.createElement("div");
        this.tooltipContent.classList.add("topbar-ictxbutton-tooltip");
        this.tooltipContent.innerHTML = "This is a tooltip";
        this.tooltipPopover.node.appendChild(this.tooltipContent);

        const _this = this;
        this.tooltipPopover.hide();
        this.wrapperNode.addEventListener("mouseenter", function(){ 
            _this.tooltipPopover.show(); 
        }, false);
        this.wrapperNode.addEventListener("mouseleave", function(){ _this.tooltipPopover.hide(); }, false);
        this.wrapperNode.addEventListener("click", function(){ _this.tooltipPopover.hide(); }, false);
    }


    /**
     * 
     * @returns 
     */
    getEnvelope() {
        return this.wrapperNode;
    }



    /** continuous rendering approach */
    S8_render() { }

    /** continuous rendering approach */
    S8_dispose() { }

    /**
    * icon
    * @param {*} code 
    */
    S8_set_icon(code) {
        S8WebFront.SVG_insertByCode(this.iconNode, code, 16, 16);
    }

    /**
     * icon
     * @param {*} code 
     */
    S8_set_text(text) {
        this.textNode.innerHTML = text;
    }
}