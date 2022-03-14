

import { gl } from '../nebulae';

import * as M4 from '../maths/NbMatrix4d';



/**
 * WebGL Shape constructor, methods and utilities
 */
export class NbModel {

	/** @type {number} Insertion index */
	index = -1;

	/** @type {Float32Array}  predefine matrix */ 
	matrix = M4.createIdentity();

	/** @type {WebGLBuffer}  vertex attributes : vertex buffer */ 
	vertexBuffer = null;

	/** @type {WebGLBuffer}  vertex attributes : normal buffer */ 
	normalBuffer = null;

	/** @type {WebGLBuffer}  vertex attributes : u-tangent buffer */ 
	uTangentBuffer = null;

	/** @type {WebGLBuffer}  vertex attributes : v-tangent buffer */ 
	vTangentBuffer = null;

	/** @type {WebGLBuffer}  vertex attributes : texture coordinates buffer */ 
	texCoordBuffer = null;

	/** @type {WebGLBuffer}  vertex attributes : color buffer */ 
	colorBuffer = null;

	/** 
	 * @type {WebGLBuffer}  elements buffer 
	 * UNSIGNED_INT (UInt32) REQUIRED !!!
	 */ 
	elementBuffer = null;

	/** 
	 * @type {number} nb of elements in buffer 
	 * UNSIGNED_INT (UInt32) REQUIRED !!!
	 */ 
	elementsCount = 0;


    constructor(){
    }


	/**
	 * 
	 * @param {number} location 
	 */
	bindVertexAttributes(location) {
		gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
		gl.vertexAttribPointer(location, 3, gl.FLOAT, false, 0, 0);
	}


	/**
	 * 
	 * @param {number} location 
	 */
	bindNormalAttributes(location) {
		gl.bindBuffer(gl.ARRAY_BUFFER, this.normalBuffer);
		gl.vertexAttribPointer(location, 3, gl.FLOAT, false, 0, 0);
	}


	/**
	 * 
	 * @param {number} location 
	 */
	bindUTangentAttributes(location) {
		gl.bindBuffer(gl.ARRAY_BUFFER, this.uTangentBuffer);
		gl.vertexAttribPointer(location, 3, gl.FLOAT, false, 0, 0);
	}

	
	/**
	 * 
	 * @param {number} location 
	 */
	bindVTangentAttributes(location) {
		gl.bindBuffer(gl.ARRAY_BUFFER, this.vTangentBuffer);
		gl.vertexAttribPointer(location, 3, gl.FLOAT, false, 0, 0);
	}


	/**
	 * 
	 * @param {number} location 
	 */
	bindTexCoordAttributes(location) {
		gl.bindBuffer(gl.ARRAY_BUFFER, this.texCoordBuffer);
		gl.vertexAttribPointer(location, 2, gl.FLOAT, false, 0, 0);
	}


	/**
	 * 
	 * @param {number} location 
	 */
	bindColorAttributes(location) {
		gl.bindBuffer(gl.ARRAY_BUFFER, this.colorBuffer);
		gl.vertexAttribPointer(location, 4, gl.FLOAT, false, 0, 0);
	}


    /**
     * 
     */
	dispose() {
		if (this.vertexBuffer) {
			gl.deleteBuffer(this.vertexBuffer);
		}

		if (this.normalBuffer) {
			gl.deleteBuffer(this.normalBuffer);
		}

		if (this.uTangentBuffer) {
			gl.deleteBuffer(this.uTangentBuffer);
		}

		if (this.vTangentBuffer) {
			gl.deleteBuffer(this.vTangentBuffer);
		}

		if (this.texCoordBuffer) {
			gl.deleteBuffer(this.texCoordBuffer);
		}

		if (this.colorBuffer) {
			gl.deleteBuffer(this.colorBuffer);
		}

		// delete handler buffer
		gl.deleteBuffer(this.elementsHandle);
	}

}


export class NbModel2d extends NbModel {

	draw() {

		// Bind buffer handle to current buffer
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.elementBuffer);

		// launch drawing!
		gl.drawElements(gl.LINES, this.elementsCount, gl.UNSIGNED_INT, 0);
	}
}



export class NbModel3d extends NbModel {

	draw() {

		// Bind buffer handle to current buffer
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.elementBuffer);

		// launch drawing!
		gl.drawElements(gl.TRIANGLES, this.elementsCount, gl.UNSIGNED_INT, 0);
	}
}

