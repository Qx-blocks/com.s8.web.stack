
import { S8WebFront } from "/S8-pkgs-ui-carbide/S8WebFront.js";
import { S8Object } from "/S8-api/S8Object.js";




/**
 * 
 */
S8WebFront.CSS_import('/S8-pkgs-ui-carbide/messages/ictx/IconTextMessage.css');


/**
 * 
 */
export class IconTextMessage extends S8Object {

    /** @type {HTMLDivElement} */
    wrapperNode;

    /** @type {HTMLDivElement} */
    iconNode;

    /** @type {HTMLDivElement} */
    textNode;

    /** @type {string} */
    theme = "ictxmessage-theme-default";
    
    /**
     * 
     */
    constructor(){
        super();
        this.wrapperNode = document.createElement("div");
        this.wrapperNode.classList.add("ictxmessage");
        this.wrapperNode.classList.add(this.theme);

        this.iconNode = document.createElement("div");
        this.iconNode.classList.add("ictxmessage-icon");
        this.wrapperNode.appendChild(this.iconNode);

        this.textNode = document.createElement("div");
        this.textNode.classList.add("ictxmessage-text");
        this.wrapperNode.appendChild(this.textNode);
    }


    /**
     * @returns 
     */
    getEnvelope(){
        return this.wrapperNode;
    }

    /**
     * icon
     * @param {*} code 
     */
    S8_set_icon(code){
        S8WebFront.SVG_insertByCode(this.iconNode, code, 16, 16);
    }

    /**
     * 
     * @param {code} code 
     */
    S8_set_theme(code) {
        const newTheme = `ictxmessage-theme-${S8WebFront.parseTheme(code)}`;
        this.wrapperNode.classList.replace(this.theme, newTheme);
        this.theme = newTheme;
    }


    /**
     * icon
     * @param {*} code 
     */
    S8_set_text(text){
        this.textNode.innerText = text;
    }


    /** render */
    S8_render(){}


    /** dispose */
    S8_dispose(){}
}