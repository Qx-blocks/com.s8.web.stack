

import { S8WebFront } from "/S8-pkgs-ui-carbide/S8WebFront.js";
import { S8Object } from "/S8-api/S8Object.js";

import { Popover } from "/S8-pkgs-ui-carbide/popover/Popover.js";




/**
 * 
 */
S8WebFront.CSS_import('/S8-pkgs-ui-carbide/breadcrumbs/Breadcrumbs.css');


/**
 * 
 */
export class BreadcrumbsNode extends S8Object {

    /** @type {HTMLDivElement} */
    wrapperNode;

    
    /**
     * 
     */
    constructor(){
        super();

        /* <displayed-structure> */
        this.wrapperNode = document.createElement("div");
        this.wrapperNode.classList.add("breadcrumbs-node");

        const slashNode = document.createElement("div");
        slashNode.classList.add("breadcrumbs-node-slash");
        this.wrapperNode.appendChild(slashNode);
        slashNode.innerHTML = "/";

        this.iconNode = document.createElement("div");
        this.iconNode.classList.add("breadcrumbs-node-icon");
        this.wrapperNode.appendChild(this.iconNode);

        this.textNode = document.createElement("div");
        this.textNode.classList.add("breadcrumbs-node-text");
        this.wrapperNode.appendChild(this.textNode);
        /* </displayed-structure> */


        this.tooltipPopover = new Popover();
        this.tooltipPopover.setTheme("dark");
        this.tooltipPopover.setDirection("top");
        this.wrapperNode.appendChild(this.tooltipPopover.getEnvelope());

        this.tooltipContent = document.createElement("div");
        this.tooltipContent.classList.add("breadcrumbs-node-tooltip");
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
    getEnvelope(){
        return this.wrapperNode;
    }


    /**
    * icon
    * @param {*} code 
    */
    S8_set_icon(code) {
        S8WebFront.SVG_insertByCode(this.iconNode, code, 20, 20);
    }

    /**
     * icon
     * @param {*} code 
     */
    S8_set_text(text) {
        this.textNode.innerHTML = text;
    }


    /** */
    S8_render(){}


    /** */
    S8_dispose(){}
}