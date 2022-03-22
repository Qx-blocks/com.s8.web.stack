
import { S8 } from '../../s8/S8.js';

/**
 * Flow base feature
 */
export class Input {

	constructor(props = {
		type: "text", 
		placeholder: "input here...", 
		doc: "information here",
		validator: function(){}, 
		onStatusUpdate: null, 
		style: null }) 
	{

		// import component syle
		S8.import_CSS("/air/input/Input.css");

		// doc
		if (props.doc) {
			this.doc = props.doc;
		}

		// validator
		this.isValidating = false;
		if (props.validator) {
			this.validator = props.validator;
			this.isValidating = true;
		}

		// override things
		if (props.onStatusUpdate) {
			this._onStatusUpdate = props.onStatusUpdate;
		}


		// state flags
		this.nInputs = 0;
		this.isReacting = false;
		this.status = "none";

		// build
		this.node = document.createElement("input");
		if (props.style) {
			this.node.className = props.style;
		}
		this.node.type = props.type;
		this.node.placeholder = props.placeholder;


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
		this.node.addEventListener("mouseover", this.mouseOverListener, false);

		// mouseleave
		this.mouseleaveListener = function (event) {
			_this.onMouseleave(event);
		}
		this.node.addEventListener("mouseleave", this.mouseLeaveListener, false);

		// focus
		this.focusListener = function(event) {
			_this.onFocus(event);
		}
		this.node.addEventListener("focus", this.focusListener, false);

		// blur
		this.blurListener = function (event) {
			_this.onBlur(event);
		}
		this.node.addEventListener("blur", this.blurListener, false);

		// input
		this.inputListener = function (event) {
			_this.onInput(event);
		}
		this.node.addEventListener("input", this.inputListener, false);
		/* </listeners> */
	}

	getNode() {
		return this.node;
	}

	getStatus() {
		return this.status;
	}

	getValue() {
		return this.node.value;
	}

	update() {
		// run validator
		let output = this.validator(this.node.value);

		// update flags
		let previousStatus = this.status;
		let message = null;
		if (output.success !== undefined) {
			this.status = "success";
			message = output.success;
		}
		else if (output.warning !== undefined) {
			this.status = "warning";
			message = output.warning;
		}
		else if (output.error !== undefined) {
			this.status = "error";
			message = output.error;
		}

		// if has changed mode
		if (this.status != previousStatus) {
			this.iconNode.setStatus(this.status);
			this.popover.setStyle0(this.status);
			if (this._onStatusUpdate) {
				this._onStatusUpdate(this.status);
			}
		}

		this.resultNode.setContent(message);
	}

	onMouseOver(event){
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

				this.popover = ui.popover2(this.node, "bottom-left",
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


	dispose() {

		// dispose popover if any
		if (this.popover) {
			this.popover.dispose();
		}

		// remove listeners
		this.node.removeEventListener("mouseover", this.mouseoverListener);
		this.node.removeEventListener("mouseleave", this.mouseleaveListener);
		this.node.removeEventListener("focus", this.focusListener);
		this.node.removeEventListener("blur", this.blurListener);
		this.node.removeEventListener("input", this.inputListener);
	}

	isValid() {
		return !this.hasWarning;
	}
}
