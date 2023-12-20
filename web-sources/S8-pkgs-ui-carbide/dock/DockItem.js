

import { S8 } from '/S8-core-bohr-atom/S8.js';
import { NeObject } from '/S8-core-bohr-neon/NeObject.js';


import { S8WebFront } from '/S8-pkgs-ui-carbide/S8WebFront.js';

import { PopoverBox } from '/S8-pkgs-ui-carbide/popover/PopoverBox.js';


S8WebFront.CSS_import("/S8-pkgs-ui-carbide/dock/Dock.css");

export class DockItem extends NeObject {

     constructor(){
        super();
        this.wrapperNode = document.createElement("div");
        this.wrapperNode.classList.add("dock-item");

        this.node0 = document.createElement("div");
        this.wrapperNode.appendChild(this.node0);

        this.imageNode = document.createElement("img");
        this.node0.appendChild(this.imageNode);

        // popover
       

        this.isTooltipVisible = false;
        this.popover = new PopoverBox();
        this.popover.hide();
        this.popover.setDirection("left");
        this.popover.setTheme("light");
        
        this.billboardNode = document.createElement("div");
        this.billboardNode.innerHTML = "${Name}";
        this.billboardNode.classList.add("dock-item-tooltip");
        this.popover.node.appendChild(this.billboardNode);

        const _this = this;
        this.wrapperNode.addEventListener("click", function(event){
            S8.branch.loseFocus();
            _this.S8_vertex.runVoid("on-click");
            event.stopPropagation();
        });

    }



    S8_set(code, value){
        switch(code){
            case 0x02 : this.setName(value); break;
            case 0x04 : this.setImage(value); break;
            default : throw `Unsupported code for DockItem: ${code}`;
        }
    }


    S8_render(){ /* continuous rendering approach... */ }

    S8_set_name(name){
        this.billboardNode.innerHTML = name;
    }

    S8_set_iconFilename(pathname) {
        this.imagePathname = pathname;
        let _this = this;
        this.loadImage(function (src) {
            _this.imageNode.src = src;
        });
    }

    loadImage(callback) {
        let imageLoader = new Image();

        // on load
        imageLoader.onload = function () {
            callback(this.src);
        }

        // launch loading
        imageLoader.src = this.imagePathname;
    }

    rescale(isGenieEffectEnabled, x, y) {

        let size = 64;
        if (isGenieEffectEnabled) {
            let bounds = this.wrapperNode.getBoundingClientRect();
            let y0 = 0.5 * (bounds.top + bounds.bottom);
            // size
            size *= (1.0 + 0.86*Math.exp(-(y - y0) * (y - y0) * 0.25e-3)*(1.0-Math.exp(-(72-x)/10)));

            if(y >= bounds.top && y <= bounds.bottom){
                this.showTooltip();
            }
            else{
                this.hideTooltip();
            }
        }
        else{
            this.hideTooltip();
        }

        // attribute
        this.imageNode.setAttribute("style", "width: " + size + "px; height: " + size + "px");
    }

    getEnvelope() {
        return this.wrapperNode;
    }


    /**
     * 
     */
    showTooltip(){
        console.log("showing tooltip for i="+this.index);
        if(!this.isTooltipVisible){
            this.popover.show();
            this.popover.attach(this.node0);
            this.isTooltipVisible = true;
        }
    }

    hideTooltip(){
        console.log("hiding tooltip for i="+this.index);
        if(this.isTooltipVisible){
            this.popover.hide();
            this.popover.detach();
            this.isTooltipVisible = false;
        }
    }

    S8_dispose(){ /* TODO */ }
}
