

import { S8WebFront } from '/s8-web-front/S8WebFront.js';
import { NeObject } from '/s8-io-bohr-neon/NeObject.js';
import { Popover } from '/s8-web-front/carbide/popover/Popover.js';


S8WebFront.CSS_import("/s8-web-front/carbide/objform/ObjForm.css");



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



export class ObjFormElement extends NeObject {

    

    /** @type{HTMLDivElement} */
    fieldNode;


    /**
     * @type{HTMLDivElement}
     */
    infoNode;

    /**
     * @type{Popover}
     */
    tooltip = null;

    /**
     * 
     */
    documentation = null;

    constructor(){
        super();
        this.fieldNode = document.createElement("div");
    }

    getEnvelope() {
        return this.fieldNode;
    }





    createInfoNode(){
        this.infoNode = document.createElement("div");
        this.infoNode.classList.add("objform-info");
        this.infoNode.innerHTML = "?";
        this.infoNode.setAttribute("enabled", "false");

        /*
        const _this = this;
        this.infoNode.addEventListener("mouseenter", function(event){
            event.stopPropagation();
            if(_this.tooltip !=null){ _this.tooltip.show(); }
        });
        this.infoNode.addEventListener("mouseleave", function(event){
            event.stopPropagation();
            if(_this.tooltip !=null){ _this.tooltip.hide(); }
        });
        */
        return this.infoNode;
    }


    S8_set_tooltip(tooltip){
        if(tooltip != null){
            this.infoNode.setAttribute("enabled", "true");
            if(this.tooltip == null){
                this.tooltip = tooltip;
                this.tooltip.show();
                this.infoNode.appendChild(this.tooltip.getEnvelope());
            }
        }
        else{ // tooltip == null
            this.infoNode.setAttribute("enabled", "false");
            if(this.tooltip != null){ this.infoNode.removeChild(this.tooltip.getEnvelope()); }
        }
    }
}

