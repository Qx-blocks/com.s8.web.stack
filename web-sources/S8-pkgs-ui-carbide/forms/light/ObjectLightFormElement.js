

import { S8WebFront } from '/S8-pkgs-ui-carbide/S8WebFront.js';

import { Popover } from '/S8-pkgs-ui-carbide/popover/Popover.js';
import { PopoverMenuItem } from '/S8-pkgs-ui-carbide/popover/PopoverMenuItem.js';

import { getColor, LightFormElement } from './LightFormElement.js';
import { S8 } from '/S8-api/S8Context.js';


/**
 * 
 */
export class ObjectLightFormElement extends LightFormElement {


    /**
     * @type{boolean}
     */
    isUpToDate = false;


    /**
     * @type{number}
     */
    typeIndex = 0;



    constructor() {

        super();

        // default setup
        this.isExpanded = false;
        this.iconColorCode = 4;

        // field node already created by super
        this.wrapperNode.classList.add("lightform-object-field");
        const _this = this;

        /* <header> */
        this.headerNode = document.createElement("div");
        this.headerNode.classList.add("lightform-object-header");
        this.wrapperNode.appendChild(this.headerNode);


        /* <triangle> */
        this.triangleNode = document.createElement("div");
        this.triangleNode.classList.add("lightform-icon-triangle-collapsed");
        this.triangleNode.innerHTML = ` <svg height="10" width="10" viewBox="0 0 16 16">
            <polygon points="2,0 14,8 2,16" />
            </svg>`;
        this.headerNode.appendChild(this.triangleNode);
        /* </triangle> */

        /* <name> */
        //<div class=><span>Folder_00:</span></div>
        let nameWrapperNode = document.createElement("div");
        nameWrapperNode.classList.add("lightform-field-name-object");
        this.headerNode.appendChild(nameWrapperNode);

        this.fieldNameNode = document.createElement("span");
        this.fieldNameNode.innerHTML = "${field_name}:";
        nameWrapperNode.appendChild(this.fieldNameNode);
        /* </name> */

        this.iconNode = document.createElement("div");
        this.iconNode.classList.add("lightform-icon-size-16");
        this.iconNode.classList.add("lightform-icon-color-" + getColor(this.iconColorCode));
        this.iconNode.innerHTML = ` <svg 
        width="16px" height="16px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" d="M2 6V6.29266C2 7.72154 2.4863 9.10788 3.37892 10.2236L8 16L12.6211 10.2236C13.5137 9.10788 14 7.72154 14 6.29266V6C14 2.68629 11.3137 0 8 0C4.68629 0 2 2.68629 2 6ZM8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8Z"
            fill-rule="evenodd" />
        </svg>`;

        this.headerNode.appendChild(this.iconNode);


        // <div><span class="">R3Container</span></div>
        this.typeWrapperNode = document.createElement("div");
        this.typeWrapperNode.classList.add("lightform-object-header-type");
        this.typeWrapperNode.addEventListener("click", function (event) { event.stopPropagation(); }, false);
        this.headerNode.appendChild(this.typeWrapperNode);

        this.selectNode = document.createElement("select");
        this.selectNode.setAttribute("name", "list");
        this.selectNode.classList.add("lightform-input-type");
       
        this.selectNode.addEventListener("change", function(event){
            S8.page.loseFocus();
            _this.sendValue();
            event.stopPropagation();
        })
        
        this.typeWrapperNode.appendChild(this.selectNode);


        /* console node */
        this.headerNode.appendChild(this.createStatusNode());

        /* options node */
        this.headerNode.appendChild(this.createPlusNode());

        this.headerNode.addEventListener("click", function () {
            S8.page.loseFocus();
            _this.toggle();
        }, false);
        /* </header> */

        /* <body> */
        this.isExpanded = false; // initially collapsed
        this.bodyNode = document.createElement("div");
        this.bodyNode.classList.add("lightform-object-body", "lightform-object-body-collapsed");
        this.wrapperNode.appendChild(this.bodyNode);


        /* <content> */
        this.elementsNode = document.createElement("div");
        this.bodyNode.appendChild(this.elementsNode);
        /* </content> */

        /* </body> */
    }


    getRow() {
        return this.headerNode;
    }



    S8_set_iconColor(colorCode) {
        let previous = "lightform-icon-color-" + getColor(this.iconColorCode);
        let next = "lightform-icon-color-" + getColor(colorCode);
        this.iconNode.classList.replace(previous, next);
        this.iconColorCode = colorCode;
    }

    S8_set_markupColor(colorCode) {
        let previous = "lightform-markup-" + getColor(this.markupColorCode);
        let next = "lightform-markup-" + getColor(colorCode);
        this.ribbonNode.classList.replace(previous, next);
        this.markupColorCode = colorCode;
    }

    S8_set_fieldName(name) {
        this.fieldNameNode.innerHTML = name;
    }

    /**
     * 
     * @param {string[]} typenames 
     */
    S8_set_typeOptions(typenames) {
        S8WebFront.removeChildren(this.selectNode);
       
        // populate with options
        const n = typenames.length;
        for(let i=0; i<n; i++){
            let optionNode = document.createElement("option");
            optionNode.innerText = typenames[i];
            if(i == this.typeIndex){ optionNode.setAttribute("selected", ""); }
            this.selectNode.appendChild(optionNode);
        }
         /* </select> */
    }


    S8_set_typePreset(selectedIndex){
        let children = this.selectNode.children;
        let n = children.length;
        for(let i=0; i<n; i++){
            let optionNode = children[i];
            if(i == selectedIndex){
                optionNode.setAttribute("selected", "");
            }
            else{
                optionNode.removeAttribute("selected");
            }
        }
        this.typeIndex = selectedIndex;
    }


    sendValue(){
        this.S8_vertex.runUInt8("on-type-changed", this.selectNode.selectedIndex);
    }

    S8_set_iconShapeByCode(code) {
        S8WebFront.SVG_insertByCode(this.iconNode, code, 16, 16);
    }

    S8_set_iconShape(name) {
        S8WebFront.SVG_insertByName(this.iconNode, name, 16, 16);
    }

    S8_set_fields(fields) {
        // remove previous nodes
        S8.page.removeChildren(this.elementsNode);

        // add new ones
        let _this = this;
        fields.forEach(field => {
            _this.elementsNode.appendChild(field.getEnvelope());
        });
    }


    /**
     * 
     * @param {boolean} mustBeExpanded 
     */
    S8_set_togglingState(mustBeExpanded) {
        if (this.isExpanded != mustBeExpanded) {
            this.toggle();
        }
    }


    toggle() {
        if (!this.isExpanded) { // initially collapsed
            // update header
            this.triangleNode.classList.replace("lightform-icon-triangle-collapsed", "lightform-icon-triangle-expanded");
            this.bodyNode.classList.replace(
                "lightform-object-body-collapsed",
                "lightform-object-body-expanded");

            this.isExpanded = true;
            this.S8_vertex.runVoid("on-expanded");
        }
        else { // is expanded
            this.triangleNode.classList.replace("lightform-icon-triangle-expanded", "lightform-icon-triangle-collapsed");
            this.bodyNode.classList.replace(
                "lightform-object-body-expanded",
                "lightform-object-body-collapsed");
            this.isExpanded = false;
            this.S8_vertex.runVoid("on-collapsed");
        }
    }


    onPlus() {

        S8WebFront.focus(this);

        let item0 = new PopoverMenuItem();
        item0.S8_set_name("Fork");
        item0.S8_set_icon("octicons/alert");

        let item1 = new PopoverMenuItem();
        item1.S8_set_name("Fork");
        item1.S8_set_icon("octicons/pulse");

        let item2 = new PopoverMenuItem();
        item2.S8_set_name("Fork");
        item2.S8_set_icon("octicons/git-merge");

        let plusMenu = new Popover();
        plusMenu.S8_set_items([item0, item1, item2]);

        //plusMenu.setDirection("left-bottom");


        this.menuWrapperNode = document.createElement("div");
        this.menuWrapperNode.appendChild(plusMenu.getEnvelope());

        this.plusNode.appendChild(this.menuWrapperNode);
    }


    onSync() {
        this.S8_vertex.runVoid("on-sync");
    }


    loadFields() {

    }

    removeFields() {
        S8.page.removeChildren(this.elementsNode);
    }


    S8_render() { /* continuous rendering approach... */ }

    S8_dispose() { /* nothing to dispose*/ }

    S8_unfocus() { /* stable when unfocussing : do nothing */ }



}

