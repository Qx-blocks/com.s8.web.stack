

import { NeObject } from '/S8-core-bohr-neon/NeObject.js';

import { S8WebFront } from '/S8-pkgs-ui-carbide/S8WebFront.js';


S8WebFront.CSS_import("/S8-pkgs-ui-carbide/button/Button.css")





/**
 * Flow base feature
 */
export class Button extends NeObject {


	theme = "default";


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
		this.node.classList.add("button-"+this.theme);
		/* </style> */

		this.isEnabled = true;
		

		/* <listeners> */

		// input		
        let _this = this;
        this.node.addEventListener("click", function (event) {
            _this.S8_vertex.runVoid("on-click");
			event.stopPropagation();
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
		let assignedSize = S8WebFront.parseSize(code);
		if(assignedSize != this.size){
			this.node.classList.replace("button-"+this.size, "button-"+assignedSize);
			this.size = assignedSize;
		}
	}

	
	/**
	 * 
	 * @param {number} code 
	 */
	S8_set_theme(code){
		let assignedTheme = S8WebFront.parseTheme(code);
		if(assignedTheme != this.theme){
			this.node.classList.replace("button-"+this.theme, "button-"+assignedTheme);
			this.theme = assignedTheme;
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
