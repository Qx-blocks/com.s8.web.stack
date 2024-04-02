
import { S8 } from '/S8-api/S8Context.js';
import { NeObject } from '/S8-core-bohr-neon/NeObject.js';

import { S8WebFront } from '/S8-pkgs-ui-carbide/S8WebFront.js';
import { Popover } from '/S8-pkgs-ui-carbide/popover/Popover.js';
import { IconTextMessage } from '/S8-pkgs-ui-carbide/messages/ictx/IconTextMessage.js';


S8.page.CSS_import("/S8-pkgs-ui-carbide/forms/obj/ObjForm.css");
S8.page.CSS_import("/S8-pkgs-ui-carbide/forms/obj/ObjFormOptions.css");


export const getColor = function (code) {
    switch (code) {
        case 0x00: return "white";
        case 0x01: return "grey";
        case 0x02: return "blue";
        case 0x03: return "purple";
        case 0x04: return "yellow";
        case 0x05: return "green";
        default: throw "Unsupported color code";
    }
}



export const getStatus = function (code) {
    switch (code) {
        case 0x00: return "disabled";
        case 0x02: return "ok";
        case 0x06: return "out-of-sync";
        case 0x13: return "warning";
        case 0x26: return "error";
        default: throw "out-of-sync";
    }
}


export class LightFormElement extends NeObject {



    /** @type{HTMLDivElement} */
    wrapperNode = null;


    /**
     * @type{HTMLDivElement}
     */
    statusNode = null;

     /**
     * @type{Popover}
     */
    consolePopover = null;

    /**
     * @type{Popover}
     */
    helperPopover;


    /**
     * @type{boolean}
     */
    isFocused = false;


    /**
     * 
     */
    documentation = null;

    constructor() {
        super();
        this.wrapperNode = document.createElement("div");
    }

    getEnvelope() {
        return this.wrapperNode;
    }

    getRow() {
        return this.wrapperNode;
    }


    /**
     * 
     * @returns 
     */
    createStatusNode(){
        this.statusNode = document.createElement("div");
        this.statusNode.classList.add("lightform-status");
        this.setStatus("disabled");
        return this.statusNode;
    }


    setStatus(status){
        if( this.statusNode != null){
            this.statusNode.setAttribute("status", status);
            switch(status){
                case "ok": 
                S8WebFront.SVG_insertByName(this.statusNode, "octicons/check.svg", 16, 16);
                break;
    
                case "out-of-sync": 
                S8WebFront.SVG_insertByName(this.statusNode, "octicons/sync.svg", 16, 16);
                break;
    
                case "warning": 
                S8WebFront.SVG_insertByName(this.statusNode, "octicons/alert.svg", 16, 16);
                break;
    
                case "error": 
                S8WebFront.SVG_insertByName(this.statusNode, "octicons/alert.svg", 16, 16);
                break;
            }
        }
    }


    S8_set_status(code) {
        const status = getStatus(code);
        this.setStatus(status);
    }


    S8_set_statusPopover(popover) {
        /* clear previous */
        if (this.statusPopover != null) { this.statusNode.removeChild(this.statusPopover.getEnvelope()); }

        if (popover != null) {
            this.statusPopover = popover;
            this.statusNode.appendChild(popover.getEnvelope());
            popover.show();
            S8.page.setFocusOn(popover);
        }
        else { // tooltip == null
            this.infoNode.setAttribute("enabled", "false");
        }
    }





    createPlusNode() {
        this.plusNode = document.createElement("div");
        this.plusNode.classList.add("lightform-icon-dots");
        this.plusNode.setAttribute("enabled", "false");
        this.plusNode.innerHTML = ` <svg 
            width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
            <circle cx="8" cy="32" r="8" />
            <circle cx="32" cy="32" r="8" />
            <circle cx="56" cy="32" r="8" />
        </svg>`;

        /* create optionsPopover */
        this.optionsPopover = new Popover();
        this.optionsPopover.setTheme("dark");
        this.optionsPopover.setDirection("left-top");
        this.optionsPopover.hide();
        this.plusNode.appendChild(this.optionsPopover.getEnvelope());

        /* -X- */
        const _this = this;
        this.plusNode.addEventListener("click", function (event) {
            event.stopPropagation();

            S8.branch.setFocusOn(_this.optionsPopover);
            _this.optionsPopover.show();

            _this.S8_vertex.runVoid("on-options-required");
        });
        return this.plusNode;
    }


    S8_set_hasOptions(isEnabled) {
        if (isEnabled) {
            this.plusNode.setAttribute("enabled", "true");
        }
        else { // options == null
            this.plusNode.setAttribute("enabled", "false");
        }
    }


    /**
     * 
     * @param {Popover} options 
     */
    S8_set_options(options) {
        this.optionsPopover.S8_set_content(options);
    }




    /**
     * 
     * @param {IconTextMessage} messages 
     */
    S8_set_helperMessages(messages){
        if(!this.helperPopover){
            this.helperPopover = new Popover();
            this.helperPopover.hide();
            
            const row = this.getRow(), _this = this;;

            /*
            row.appendChild(this.helperPopover.getEnvelope());
            
            row.addEventListener("mouseenter", function(){ _this.helperPopover.show(); }, false);
            row.addEventListener("mouseleave", function(){ _this.helperPopover.hide(); }, false);
            */

            row.addEventListener("mouseenter", function(){ 
                _this.isFocused = true;
                _this.helperPopover.positionToTarget(_this.wrapperNode);
                S8.page.HTML_setPopover(_this.helperPopover.getEnvelope()); 
                _this.helperPopover.show();
            }, false);

            row.addEventListener("mouseleave", function(){ 
                _this.isFocused = false;
                _this.helperPopover.hide();
                S8.page.HTML_clearPopover(); 
            }, false);
        }

        this.helperPopover.S8_set_content(messages);
    }

    onScroll(){
        if(this.isFocused){
            this.isFocused = false;
            this.helperPopover.hide();
            S8.page.HTML_clearPopover(); 
        }
    }




}

