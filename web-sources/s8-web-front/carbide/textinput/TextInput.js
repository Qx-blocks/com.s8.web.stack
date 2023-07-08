
import { S8WebFront } from '/s8-web-front/S8WebFront.js';
import { NeObject } from '/s8-io-bohr-neon/NeObject.js';


/**
 * 
 */
S8WebFront.CSS_import("/s8-web-front/carbide/textinput/TextInput.css");



const typeMapper = function (code) {
	switch (code) {
		case 0x22: return "text";
		case 0x23: return "password";
		default: return "text";
	}
}


/**
 * Flow base feature
 */
export class TextInput extends NeObject {


	/**
	 * @type { String }
	 */
	type = "text";

	/**
	 * @type { string }
	 */
	placeholder = "input here...";

	/**
	 * @type {string}
	 */
	doc = "information here";


	/**
	 * State of the input
	 * @type {string}
	 */
	theme = "default";


	/**
	 * @type{string}
	 */
	size = "normal";

	constructor() {

		super();


		// build
		this.wrapperNode = document.createElement("div");
		this.wrapperNode.classList.add("text-input-wrapper");

		this.inputNode = document.createElement("input");
		this.inputNode.classList.add("text-input");

		this.size = "small";
		this.inputNode.classList.add("text-input-" + this.size);

		this.theme = "default";
		this.inputNode.classList.add("text-input-" + this.theme);

		this.inputNode.type = this.type;
		this.inputNode.placeholder = this.placeholder;

		this.wrapperNode.appendChild(this.inputNode);



		/*
		*/

		/* <popovers> */
		/* </popovers> */

		/* <listeners> */
		let _this = this;

		// mouseover
		this.mouseoverListener = function (event) {
			this.onMouseOver(event);
		}
		this.inputNode.addEventListener("mouseover", this.mouseOverListener, false);

		// mouseleave
		this.mouseleaveListener = function (event) {
			_this.onMouseleave(event);
		}
		this.inputNode.addEventListener("mouseleave", this.mouseLeaveListener, false);

		// focus
		this.focusListener = function (event) {
			_this.onFocus(event);
		}
		this.inputNode.addEventListener("focus", this.focusListener, false);

		// blur
		this.blurListener = function (event) {
			_this.onBlur(event);
		}
		this.inputNode.addEventListener("blur", this.blurListener, false);

		// input
		this.inputListener = function (event) {
			_this.onInput(event);
		}
		this.inputNode.addEventListener("input", this.inputListener, false);
		/* </listeners> */
	}

	getEnvelope() {
		return this.wrapperNode;
	}


	/**
	 * 
	 * @param {*} code 
	 */
	S8_set_type(code) {
		this.type = typeMapper(code);
		this.inputNode.type = this.type;
	}

	/**
 * 
 * @param {*} code 
 */
	S8_set_size(code) {
		let assignedSize = S8WebFront.parseSize(code);
		if(assignedSize != this.size){
			this.inputNode.classList.replace("text-input-"+this.size, "text-input-"+assignedSize);
			this.size = assignedSize;
		}
	}


	/**
	 * 
	 * @param {*} placeholder 
	 */
	S8_set_placeholder(placeholder) {
		this.inputNode.placeholder = placeholder;
	}


	/**
	 * 
	 * @param {*} code 
	 */
	S8_set_theme(code) {
		let assignedTheme = S8WebFront.parseTheme(code);
		this.inputNode.classList.replace("text-input-"+this.theme, "text-input-"+assignedTheme);
		this.theme = assignedTheme;
	}

		/**
	 * 
	 * @param {*} code 
	 */
		S8_set_width(width) {
			this.inputNode.size = width;
		}


	getStatus() {
		return this.status;
	}

	getValue() {
		return this.inputNode.value;
	}



	onMouseOver(event) {
		if (!this.popover && this.doc) {
			//_this.popover = ui.popover(_this.node, "bottom-left", "default",
			//	[ui.div("padding-8 width-256", [ui.span(null, this.doc)])]);
		}

		if (this.popover) {
			this.popover.show();
		}
	}


	onMouseLeave(event) {
		if (this.popover) {
			this.popover.hide();
		}
	}

	onFocus(event) {
		if (this.popover) {
			this.popover.show();
		}
	}

	onBlur(event) {
		if (this.popover) {
			this.popover.hide();
		}
	}


	onInput(event) {
		if (this.isValidating) {

			// increment until become reactive
			if (!this.isReacting) {
				this.nInputs++;
			}

			if (!this.isReacting && this.nInputs > 2) {
				// dispose previous one if any
				if (this.popover) {
					this.popover.dispose();
				}

				this.popover = ui.popover2(this.inputNode, "bottom-left",
					"success",
					[ui.div("padding-8 struct-row width-256", [
						this.iconNode = ui.icon(null, "check", 16, 16, "icon-flat-green"),
						this.resultNode = ui.span(null, "nothing yet to print...")])],
					"default",
					[ui.div("padding-8 width-256", [ui.span(null, this.doc)])]);
				this.update();
				this.popover.show();
				this.isReacting = true;
			}
			else if (this.isReacting) {
				this.update();
			}
		}
	}


	S8_render() {
		/* no post-processing */
	}

	S8_dispose() {

		// dispose popover if any
		if (this.popover) {
			this.popover.dispose();
		}

		// remove listeners
		this.inputNode.removeEventListener("mouseover", this.mouseoverListener);
		this.inputNode.removeEventListener("mouseleave", this.mouseleaveListener);
		this.inputNode.removeEventListener("focus", this.focusListener);
		this.inputNode.removeEventListener("blur", this.blurListener);
		this.inputNode.removeEventListener("input", this.inputListener);
	}

	isValid() {
		return !this.hasWarning;
	}
}
