

import { getColor, getSVGShape, ICON_ROOT_PATHNAME, ObjFormElement } from '/s8-stack-web/carbide/objform/ObjFormElement.js';
import { S8 } from '/s8-io-bohr/atom/S8.js';


/**
 * 
 */
export class ObjectObjFormElement extends ObjFormElement {

    constructor() {
        
        super();

        // default setup
        this.isExpanded = false;
        this.iconColorCode = 4;
        this.markupColorCode = 3;

        // field node already created by super
        this.fieldNode.classList.add("objform-object-field");

        /* <header> */
        this.headerNode = document.createElement("div");
        this.headerNode.classList.add("objform-object-header");
        this.fieldNode.appendChild(this.headerNode);


        /* <ribbon> */
        this.ribbonNode = document.createElement("div");
        this.ribbonNode.classList.add("objform-markup");
        this.ribbonNode.classList.add("objform-markup-" + getColor(this.markupColorCode));
        this.headerNode.appendChild(this.ribbonNode);
        /* </ribbon> */

        /* <triangle> */
        this.triangleNode = document.createElement("div");
        this.triangleNode.classList.add("objform-icon-triangle-collapsed");
        this.triangleNode.innerHTML = ` <svg height="10" width="10" viewBox="0 0 16 16">
            <polygon points="2,0 14,8 2,16" />
            </svg>`;
        this.headerNode.appendChild(this.triangleNode);
        /* </triangle> */

        /* <name> */
        //<div class=><span>Folder_00:</span></div>
        let nameWrapperNode = document.createElement("div");
        nameWrapperNode.classList.add("objform-field-name-object");
        this.headerNode.appendChild(nameWrapperNode);

        this.nameNode = document.createElement("span");
        this.nameNode.innerHTML = "${field_name}:";
        nameWrapperNode.appendChild(this.nameNode);
        /* </name> */

        this.iconNode = document.createElement("div");
        this.iconNode.classList.add("objform-icon-size-16");
        this.iconNode.classList.add("objform-icon-color-" + getColor(this.iconColorCode));
        this.iconNode.innerHTML = ` <svg 
        width="16px" height="16px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" d="M2 6V6.29266C2 7.72154 2.4863 9.10788 3.37892 10.2236L8 16L12.6211 10.2236C13.5137 9.10788 14 7.72154 14 6.29266V6C14 2.68629 11.3137 0 8 0C4.68629 0 2 2.68629 2 6ZM8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8Z"
            fill-rule="evenodd" />
        </svg>`;

        this.headerNode.appendChild(this.iconNode);


        // <div><span class="">R3Container</span></div>
        let typeWrapperNode = document.createElement("div");
        typeWrapperNode.classList.add("objform-object-header-type");
        this.headerNode.appendChild(typeWrapperNode);

        this.typeNode = document.createElement("span");
        this.typeNode.innerHTML = "${field_type}:";
        typeWrapperNode.appendChild(this.typeNode);

        this.plusNode = document.createElement("div");
        this.plusNode.classList.add("objform-icon-dots");
        this.plusNode.innerHTML = ` <svg 
            width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
            <circle cx="8" cy="32" r="8" />
            <circle cx="32" cy="32" r="8" />
            <circle cx="56" cy="32" r="8" />
        </svg>`;
        this.headerNode.appendChild(this.plusNode);

        const _this = this;
        this.headerNode.addEventListener("click", function(){
           _this.toggle();
        }, false);
        /* </header> */

        /* <body> */
        this.isExpanded = false; // initially collapsed
        this.bodyNode = document.createElement("div");
        this.bodyNode.classList.add("objform-object-body", "objform-object-body-collapsed");
        this.fieldNode.appendChild(this.bodyNode);
        /* </body> */
    }

    S8_set_iconColor(colorCode) {
        let previous = "objform-icon-color-" + getColor(this.iconColorCode);
        let next = "objform-icon-color-" + getColor(colorCode);
        this.iconNode.classList.replace(previous, next);
        this.iconColorCode = colorCode;
    }
    
    S8_set_markupColor(colorCode) {
        let previous = "objform-markup-" + getColor(this.markupColorCode);
        let next = "objform-markup-" + getColor(colorCode);
        this.ribbonNode.classList.replace(previous, next);
        this.markupColorCode = colorCode;
    }

    S8_set_name(name) {
        this.nameNode.innerHTML = name;
    }

    S8_set_typeName(name) {
        this.typeNode.innerHTML = name;
    }

    S8_set_iconShapeByCode(code){
       S8.insert_SVG(this.iconNode, ICON_ROOT_PATHNAME+getSVGShape(code), 16, 16);
    }

    S8_set_iconShape(name){
        S8.insert_SVG(this.iconNode, ICON_ROOT_PATHNAME+name, 16, 16);
    }

    S8_set_fields(fields){
        // remove previous nodes
        S8.removeChildren(this.bodyNode);

        // add new ones
        let _this = this;
        fields.forEach(field => {
            _this.bodyNode.appendChild(field.getEnvelope());
        });
    }


    /**
     * 
     * @param {boolean} mustBeExpanded 
     */
    S8_set_togglingState(mustBeExpanded) {
        if(this.isExpanded != mustBeExpanded){
            this.toggle();
        }
    }


    toggle(){
        if(!this.isExpanded){ // initially collapsed
            // update header
            this.triangleNode.classList.replace("objform-icon-triangle-collapsed", "objform-icon-triangle-expanded");
            this.bodyNode.classList.replace(
                "objform-object-body-collapsed", 
                "objform-object-body-expanded");

            // load fields
            this.isExpanded = true;
        }
        else { // is expanded
            this.triangleNode.classList.replace("objform-icon-triangle-expanded", "objform-icon-triangle-collapsed");
            this.bodyNode.classList.replace(
                "objform-object-body-expanded", 
                "objform-object-body-collapsed");
            this.isExpanded = false;
        }
    }

    loadFields(){

    }

    removeFields(){
         S8.removeChildren(this.bodyNode);
    }

    S8_render(){ /* continuous rendering approach... */ }

    S8_dispose(){ /* nothing to dispose*/ }
}

