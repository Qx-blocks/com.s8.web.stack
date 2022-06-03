
import { AswCharacterAttitude } from '/s8-stack-web/asw/AswCharacterAttitude.js';
import { S8 } from '/s8-io-bohr/atom/S8.js';
import { S8Object } from '/s8-io-bohr/atom/S8Object.js';

/**
 * 
 */
S8.import_CSS('/s8-stack-web/asw/Asw.css');


export const VOICE_SYNTH = window.speechSynthesis;

/**
 * 
 */
export class AswCharacter extends S8Object {

    viewportX = 25;
    viewportY = 25;
    viewportWidth = 30;
    viewportHeight = 30;


    /**
     * @type {AswCharacterAttitude[]}
     */
    attitudes = [];

    /**
     * @type {Image[]}
     */
    faceImages;

    faceNode;

    /**
     * @type {number}
     */
    faceIndex = 0;


    voiceName = "Aurelie";

    isLoaded = false;

    onButtonPressed;


    constructor() {
        super();
        this.wrapperNode = document.createElement("div");
        this.wrapperNode.classList.add("asw-character");

        this.faceImageNode = document.createElement("img");

        this.buttonNode = document.createElement("button");
        this.buttonNode.innerHTML = "Start talking!";
        this.buttonNode.style.display = "hidden";

        let _this = this;
        this.onButtonPressed = function(e){ _this.start(); }
        this.buttonNode.addEventListener("click", this.onButtonPressed);

        this.wrapperNode.appendChild(this.faceImageNode);
        this.wrapperNode.appendChild(this.buttonNode);

        console.log("this");
    }

    /**
     * 
     * @param {AswAttitude} attitude 
     */
    repaint(attitude) {
        //this.wrapperNode.style.width = `${this.viewportWidth}%`;
        this.wrapperNode.style.top = `${this.viewportY}%`;
        this.wrapperNode.style.left = `${this.viewportX}%`;

        this.faceImageNode.src = attitude.faceImage.src;
    }

    getEnvelope() {
        return this.wrapperNode;
    }


    /**
     * 
     * @param {*[]} elements 
     */
    S8_set_elements(elements) {
        elements.forEach(element => {
            if (element != null) {
                this.wrapperNode.appendChild(element.getEnvelope());
            }
        });
    }


    S8_set_viewportX(x) {
        this.viewportX = x;
    }

    S8_set_viewportY(y) {
        this.viewportY = y;
    }

    S8_set_viewportWidth(width) {
        this.viewportWidth = width;
    }

    /**
     * 
     * @param {AswAttitude[]} attitudes 
     */
    S8_set_attitudes(attitudes) {
        this.attitudes = attitudes;
        this.attitudes.forEach(attitude => {
            attitude.character = this;
            attitude.load();
        });
    }

    S8_render() {
        /* continuous rendering approach... */
        this.repaint(this.attitudes[0]);
    }


    S8_dispose() { /* no disposing to be done... */ }



    notifyAttitudeLoaded(){
        let isLoaded = true;
        this.attitudes.forEach(attitude => {
            if(!attitude.isLoaded){
                isLoaded = false;
            }
        });
        this.isLoaded = isLoaded;

        if(this.isLoaded){
            this.showButton();
        }
    }

    start() {
        this.say(0, "Salut tout le monde");
    }


    say(index, text){
        let attitude = this.attitudes[index];
        this.repaint(attitude);
        attitude.say(text);
    }

    showButton(){
        this.buttonNode.style.display = "block";
    }
}




