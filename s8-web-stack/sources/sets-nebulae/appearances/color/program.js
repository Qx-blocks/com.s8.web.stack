
import { gl } from "../../nebulae";
import { NbEnvironment } from "../../scenes/environment/NbEnvironment";
import { NbView } from "../../scenes/view/NbView";
import { NbModel } from "../../shapes/NbModel";
import { NbAppearance } from "../NbAppearance";
import { NbProgram } from "../NbProgram";

/**
 * 
 */
export class ColorNbProgram extends NbProgram {


	/**
	 * 
	 */
	constructor() {
		super("color");

		// mesh properties
		this.meshProperties.dimension = 2;
		this.meshProperties.isVertexAttributeEnabled = true;
		this.meshProperties.isColorAttributeEnabled = true;
	}


	/**
		 * Linking of uniforms and attributes (to be overriden)
		 */
	link() {

		/* <uniforms> */
		this.loc_Uniform_matrix_MVP = gl.getUniformLocation(this.handle, "ModelViewProjection_Matrix");
		/* </uniforms> */

		/* <attributes> */
		this.vertexAttributeLocation = gl.getAttribLocation(this.handle, "vertex");
		this.colorAttributeLocation = gl.getAttribLocation(this.handle, "color");
		/* </attributes> */
	}


	/**
	 * To be overidden
	 */
	enable() {
		// bind shader program
		gl.useProgram(this.handle);

		/* <enable-attributes> */
		gl.enableVertexAttribArray(this.vertexAttributeLocation);
		gl.enableVertexAttribArray(this.colorAttributeLocation);
		/* </enable-attributes> */
	}


	/**
	 * 
	 * @param {NbEnvironment} environment 
	 */
	bindEnvironment(environment) {
		// nothing to do here...
	}


	/**
	 * 
	 * @param {NbAppearance} apperance 
	 */
	bindAppearance(apperance) {
		// nothing to do here...
	}

	/**
	 * @param {NbView} view 
	 * @param {NbModel} model 
	 */
	bindModel(view, model) {
		/* <matrices> */
		// re-compute everything...
		M4.multiply(view.matrix_ProjectionView, model.matrix, this.matrix_ProjectionViewModel);
		/* </matrices> */

		/* <bind-uniforms> */
		gl.uniformMatrix4fv(this.loc_Uniform_matrix_MVP, false, this.matrix_ProjectionViewModel);
		/* </bind-uniforms> */

		/* <bind-attributes> */
		model.bindVertexAttributes(this.vertexAttributeLocation);
		model.bindColorAttributes(this.colorAttributeLocation);
		/* </bind-attributes> */

		/* <bind-elements> */
		mesh.elements.bind();
		/* </bind-elements> */
	}


	disable() {

		/* <disable-attributes> */
		gl.disableVertexAttribArray(this.vertexAttributeLocation);
		gl.disableVertexAttribArray(this.colorAttributeLocation);
		/* </disable-attributes> */

		// unbind shader program
		gl.useProgram(null);
	}
}



