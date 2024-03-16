
import { TopbarElement } from "./TopbarElement.js";
import { S8Object } from "/S8-api/S8Object.js";

import { S8WebFront } from "/S8-pkgs-ui-carbide/S8WebFront.js";


/**
 * 
 */
S8WebFront.CSS_import('/S8-pkgs-ui-carbide/topbar/Topbar.css');


/**
 * 
 */
export class Topbar extends S8Object {

    /** @type {HTMLDivElement[]} */
    wrapperNode;

    /** @type {HTMLDivElement[]} */
    leftStackNode;

    /** @type {HTMLDivElement[]} */
    rightStackNode;

    /**
     * 
     */
    constructor() {
        super();
        this.wrapperNode = document.createElement("div");
        this.wrapperNode.classList.add("topbar");

        this.leftStackNode = document.createElement("div");
        this.leftStackNode.classList.add("topbar-left");
        this.wrapperNode.appendChild(this.leftStackNode);

        this.rightStackNode = document.createElement("div");
        this.rightStackNode.classList.add("topbar-right");
        this.wrapperNode.appendChild(this.rightStackNode);
    }


    /**
     * 
     * @returns 
     */
    getEnvelope() {
        return this.wrapperNode;
    }


    /**
     * 
     * @param {TopbarElement[]} elements 
     */
    S8_set_leftElements(elements) {
        S8WebFront.removeChildren(this.leftStackNode);
        let n = elements.length;
        for (let i = 0; i < n; i++) {
            let element = elements[i];
            this.leftStackNode.appendChild(element.getEnvelope());
        }
    }


      /**
     * 
     * @param {TopbarElement[]} elements 
     */
      S8_set_rightElements(elements) {
        S8WebFront.removeChildren(this.rightStackNode);
        let n = elements.length;
        for (let i = 0; i < n; i++) {
            let element = elements[i];
            this.rightStackNode.appendChild(element.getEnvelope());
        }
    }


    /** continuous rendering approach */
    S8_render() { }

    /** continuous rendering approach */
    S8_dispose() { }
}