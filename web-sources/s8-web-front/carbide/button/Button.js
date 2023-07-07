
import { S8WebFront } from '/s8-web-front/S8WebFront.js';
import { NeObject } from '/s8-io-bohr-neon/NeObject.js';


S8WebFront.CSS_import("/s8-web-front/carbide/button/Button.css")

const sizeMapper = function(code){
	switch(code){
		case 0x02 : return "inlined";
		case 0x04 : return "small";
		case 0x06 : return "big";
		case 0x08 : return "huge";

		default : return "big";
	}
}

const styleMapper = function(code){
	switch(code){
		case 0x02 : return "default";
		case 0x03 : return "primary";
		case 0x04 : return "outline";
		case 0x05 : return "danger";

		default : return "default";
	}
}


/**
 * Flow base feature
 */
export class Button extends NeObject {


	style = "default";


	constructor(){
		super();

		// root node
		this.node = document.createElement("button");
		this.node.innerHTML = "button";
		
		this.node.classList.add("button");

		/* <size> */
		this.size = "small";
		this.node.classList.add("button-"+this.size);
		/* </size> */


		/* <style> */
		this.style = "default";
		this.node.classList.add("button-"+this.style);
		/* </style> */

		this.isEnabled = true;
		

		/* <listeners> */

		// input		
        let _this = this;
        this.node.addEventListener("click", function (event) {
            _this.S8_vertex.runVoid("on-click");
        }, false);
		/* </listeners> */
	}


	S8_set_label(text){
		this.node.innerHTML = text;
	}
	

	/**
	 * 
	 * @param {number} code 
	 */
	S8_set_size(code){
		let assignedSize = sizeMapper(code);
		if(assignedSize != this.size){
			this.node.classList.replace("button-"+this.size, "button-"+assignedSize);
			this.size = assignedSize;
		}
	}

	
	/**
	 * 
	 * @param {number} code 
	 */
	S8_set_style(code){
		let assignedStyle = styleMapper(code);
		if(assignedStyle != this.style){
			this.node.classList.replace("button-"+this.style, "button-"+assignedStyle);
			this.style = assignedStyle;
		}
	}


	/**
	 * 
	 * @param {state} state 
	 */
	S8_set_isEnabled(state){
		if(state){
			this.enable();
		}
		else{
			this.disable();
		}
	}



	getEnvelope(){
		return this.node;
	}

	enable(){
		if(!this.isEnabled){
			this.node.removeAttribute("disabled");
			this.isEnabled = true;
		}
	}

	disable() {
		if(this.isEnabled){
			this.node.setAttribute("disabled", "");
			this.isEnabled = false;
		}
	}


	S8_render(){
		/* nothing to post-process */
	}


	S8_dispose(){
		this.node.removeEventListener("click", this.clickListener);
	}
}
