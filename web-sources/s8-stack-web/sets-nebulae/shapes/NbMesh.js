

import { S8Orbital } from '/s8/S8';

import { gl } from '../nebulae';
import * as M4 from '../maths/NbMatrix4d';
import * as V2 from '../maths/NbVector2d';
import * as V4 from '../maths/NbVector4d';
import { NbModel, NbModel2d, NbModel3d } from './NbModel';
import { NbMeshProperties } from './NbMeshProperties';



/**
 * WebGL Shape constructor, methods and utilities
 */
export class NbMesh extends S8Orbital {


	/** @type {boolean} vertex attributes */
	isVertexAttributeEnabled = false;

	/** @type {boolean} vertex attributes */
	vertexAttributes = null;

	/** @type {boolean} normal attributes */
	isNormalAttributeEnabled = false;

	/** @type {boolean} normal attributes */
	normalAttributes = null;

	/** @type {boolean} u-tangent attributes */
	isUTangentAttributeEnabled = false;

	/** @type {boolean} u-tangent attributes */
	uTangentAttributes = null;

	/** @type {boolean} v-tangent attributes */
	isVTangentAttributeEnabled = false;

	/** @type {Float32Array} v-tangent attributes */
	vTangentAttributes = null;

	/** @type {boolean} tex-coords */
	isTexCoordAttributeEnabled = false;

	/** @type {Float32Array} tex-coords */
	texCoordAttributes = null;

	/** @type {boolean} colors */
	isColorAttributeEnabled = false;

	/** @type {Float32Array} colors */
	colorAttributes = null;

	/**	@type {number} dimension */
	dimension = 3;

	/** @type {Uint32Array} elements */
	indices = null;

	/** draw option */
	drawOption = gl.STATIC_DRAW;

	/** @type {number} nVertices : number of vertices*/
	vertexCapacity = 0;

	/** @type {number} nElements : number of vertices*/
	elementCapacity = 0;

	/** @type {number} position within the vertex attributes buffer */
	vertexOffset = 0;

	/**
	 * 
	 */
	constructor(id) {
		super(id);
	}


	/**
	 * 
	 * @param {NbMeshProperties} properties 
	 * @returns {NbMesh}
	 */
	static create(properties) {

		let mesh = new NbMesh("(INTERNAL)");

		/** number of vertices */
		
		mesh.dimension = properties.dimension;
		mesh.vertexCapacity = properties.vertexCapacity;
		mesh.elementCapacity = properties.elementCapacity;
		
		/** vertex attributes */
		if (mesh.isVertexAttributeEnabled = properties.isVertexAttributeEnabled) {
			mesh.vertexAttributes = new Float32Array(3 * mesh.vertexCapacity);
		}

		/** normal attributes */
		if (mesh.isNormalAttributeEnabled = properties.isNormalAttributeEnabled) {
			mesh.normalAttributes = new Float32Array(3 * mesh.vertexCapacity);
		}

		/** u-tangent attributes */
		if (mesh.isUTangentAttributeEnabled = properties.isUTangentAttributeEnabled) {
			mesh.uTangentAttributes = new Float32Array(3 * mesh.vertexCapacity);
		}

		/** v-tangent attributes */
		if (mesh.isVTangentAttributeEnabled = properties.isVTangentAttributeEnabled) {
			mesh.vTangentAttributes = new Float32Array(3 * mesh.vertexCapacity);
		}

		/** tex-coords */
		if (mesh.isTexCoordAttributeEnabled = properties.isTexCoordAttributeEnabled) {
			mesh.texCoordAttributes = new Float32Array(2 * mesh.vertexCapacity);
		}

		/** colors */
		if (mesh.isColorAttributeEnabled = properties.isColorAttributeEnabled) {
			mesh.colorAttributes = new Float32Array(4 * mesh.vertexCapacity);
		}

		// indices
		mesh.indices = new Uint32Array(mesh.dimension * mesh.elementCapacity);

		return mesh;
	}



	S8_set(code, value) {
		switch (code) {

			/* <props> */
			case 0x10: this.dimension = value; break;
			case 0x11: this.vertexCapacity = value; break;
			case 0x12: this.elementCapacity = value; break;
			case 0x13: this.setDrawOption(value); break;

			case 0x16: this.matrix = value; break;
			/* </props> */

			/* <attributes> */
			case 0x20: this.setVertices(value); break;
			case 0x21: this.setNormals(value); break;
			case 0x22: this.setUTangents(value); break;
			case 0x23: this.setVTangents(value); break;
			case 0x24: this.setTexCoords(value); break;
			case 0x25: this.setColors(colors); break;
			/* </attributes> */

			/* <elements> */
			case 0x40: this.setIndices(value); break;
			/* </elements> */

			default: throw "Unsupported code: " + code;
		}
	}


	setDrawOption(flag) {
		if (flag == 0) {
			this.drawOption = gl.STATIC_DRAW;
		}
		else if (flag == 1) {
			this.drawOption = gl.DYNAMIC_DRAW;
		}
		else {
			throw "Unsupported code for refreshingStyle";
		}
	}


	/** @param {Float32Array} vertices */
	setVertices(vertices) {
		this.isVertexAttributeEnabled = true;
		this.vertexAttributes = vertices;
		let n = vertices.length;
		if (n % 3 != 0) { throw "vertices length must be a multiple of 3"; }
		this.vertexCapacity = vertices.length / 3;
		this.isCompiled = false;
	}

	/** @param {Float32Array} normals */
	setNormals(normals) {
		this.isNormalAttributeEnabled = true;
		this.normalAttributes = normals;
		this.isCompiled = false;
	}

	/** @param {Float32Array} uTangents */
	setUTangents(uTangents) {
		this.isUTangentAttributeEnabled = true;
		this.uTangentAttributes = uTangents;
		this.isCompiled = false;
	}

	/** @param {Float32Array} vTangents */
	setVTangents(vTangents) {
		this.isVTangentAttributeEnabled = true;
		this.vTangentAttributes = vTangents;
		this.isCompiled = false;
	}

	/** @param {Float32Array} texCoords */
	setTexCoords(texCoords) {
		this.isTexCoordAttributeEnabled = true;
		this.texCoordAttributes = texCoords;
		this.isCompiled = false;
	}

	/** @param {Float32Array} colors */
	setColors(colors) {
		this.isColorAttributeEnabled = true;
		this.colorAttributes = colors;
		this.isCompiled = false;
	}


	/**
	 * 
	 * @param {Uint32Array} indices 
	 */
	setIndices(indices) {
		this.indices = indices;
		this.elementCapacity = this.indices.length/this.dimension;
	}


	/**
	 * 
	 */
	S8_render() {
	}


	/**
	 * @param { NbMesh } mesh 
	 * @param { Float32Array } matrix 
	 */
	append(mesh, matrix = M4.createIdentity()) {

		let nMeshVertices = mesh.vertexCapacity;

		/* <attributes> */

		// vertices
		if (this.isVertexAttributeEnabled) {
			let v = mesh.vertexAttributes, w = this.vertexAttributes;
			let vOffset = 0, wOffset = 3 * this.vertexOffset;
			w.length += 3 * nMeshVertices;
			for (let i = 0; i < nMeshVertices; i++) {
				M4.transformPoint3d(matrix, v, w, vOffset, wOffset); vOffset += 3; wOffset += 3;
			}
		}

		// normals
		if (this.isNormalAttributeEnabled) {
			let v = mesh.normalAttributes, w = this.normalAttributes;
			let vOffset = 0, wOffset = 3 * this.vertexOffset;
			w.length += 3 * nMeshVertices;
			let tim = M4.create();
			M4.transposeInverse(matrix, tim);
			for (let i = 0; i < nMeshVertices; i++) {
				M4.transformVector3d(tim, v, w, vOffset, wOffset); vOffset += 3; wOffset += 3;
			}
		}

		// u-tangents
		if (this.isUTangentAttributeEnabled) {
			let v = mesh.uTangentAttributes, w = this.uTangentAttributes;
			let vOffset = 0, wOffset = 3 * this.vertexOffset;
			w.length += 3 * nMeshVertices;
			for (let i = 0; i < nMeshVertices; i++) {
				M4.transformVector3d(matrix, v, w, vOffset, wOffset); vOffset += 3; wOffset += 3;
			}
		}

		// v-tangents
		if (this.isVTangentAttributeEnabled) {
			let v = mesh.vTangentAttributes, w = this.vTangentAttributes;
			let vOffset = 0, wOffset = 3 * this.vertexOffset;
			w.length += 3 * nMeshVertices;
			for (let i = 0; i < nMeshVertices; i++) {
				M4.transformVector3d(matrix, v, w, vOffset, wOffset); vOffset += 3; wOffset += 3;
			}
		}

		// tex coords
		if (this.isTexCoordAttributeEnabled) {
			let v = mesh.texCoordAttributes, w = this.texCoordAttributes;
			let vOffset = 0, wOffset = 2 * this.vertexOffset;
			w.length += 2 * nMeshVertices;
			for (let i = 0; i < nMeshVertices; i++) {
				V2.copy(v, w, vOffset, wOffset); vOffset += 2; wOffset += 2;
			}
		}

		// colors
		if (this.isColorAttributeEnabled) {
			let v = mesh.colorAttributes, w = this.colorAttributes;
			let vOffset = 0, wOffset = 4 * this.vertexOffset;
			w.length += 4 * nMeshVertices;
			for (let i = 0; i < nMeshVertices; i++) {
				V4.copy(v, w, vOffset, wOffset); vOffset += 4; wOffset += 4;
			}
		}
		/* </attributes> */

		/* <elements> */
		let v = mesh.indices, w = this.indices, n = v.length;
		let wOffset = this.vertexOffset;
		let iOffset = this.vertexCapacity;
		for (let i = 0; i < n; i++) {
			w[wOffset + i] = iOffset + v[i];
		}
		/* </elements> */

		this.vertexOffset += nMeshVertices;
	}


	/**
	 * 
	 * @param {WebGLBuffer} array 
	 * @returns 
	 */
	compileAttributes(array) {

		// Create buffer handle
		let bufferHandle = gl.createBuffer();

		// Bind buffer handle to current buffer
		gl.bindBuffer(gl.ARRAY_BUFFER, bufferHandle);

		// store data in GPU
		gl.bufferData(gl.ARRAY_BUFFER, array, this.drawOption);

		return bufferHandle;
	}


	/**
	 * 
	 * @returns {WebGLBuffer}
	 */
	compileElements() {
		// create and populate array
		this.indicesLength = this.indices.length;

		// Create buffer handle
		let elementsHandle = gl.createBuffer();

		// Bind buffer handle to current buffer
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elementsHandle);

		// bind buffer data
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, array, drawOption);

		return elementsHandle;
	}



	/**
	 * 
	 * @returns {NbModel}
	 */
	buildModel() {

		/* <dimension> */
		/** @type {NbModel} */
		let model = null;

		if (this.dimension == 2) {
			model = new NbModel2d();
		}
		else if (this.dimension == 3) {
			model = new NbModel3d();
		}
		else {
			throw "Dimension is not defined!"
		}
		/* </dimension> */


		/* <attributes> */
		if (this.isVertexAttributeEnabled) {
			model.vertexBuffer = this.compileBuffer(this.vertexAttributes);
		}

		if (this.isNormalAttributeEnabled) {
			model.normalBuffer = this.compileBuffer(this.normalAttributes);
		}

		if (this.isUTangentAttributeEnabled) {
			model.uTangentBuffer = this.compileBuffer(this.uTangentAttributes);
		}

		if (this.isVTangentAttributeEnabled) {
			model.vTangentBuffer = this.compileBuffer(this.vTangentAttributes);
		}

		if (this.isTexCoordAttributeEnabled) {
			model.texCoordBuffer = this.compileBuffer(this.texCoordAttributes);
		}

		if (this.isColorAttributeEnabled) {
			model.colorBuffer = this.compileBuffer(this.colorAttributes);
		}
		/* <attributes> */

		model.elementBuffer = this.compileElements();
		model.elementsCount = this.indices.length;

		return model;
	}


	/**
	 * 
	 * @returns {NbMeshProperties}
	 */
	getProperties() {
		let properties = new NbMeshProperties();
		properties.dimension = this.dimension;
		properties.isVertexAttributeEnabled = this.isVertexAttributeEnabled;
		properties.isNormalAttributeEnabled = this.isNormalAttributeEnabled;
		properties.isUTangentAttributeEnabled = this.isUTangentAttributeEnabled;
		properties.isVTangentAttributeEnabled = this.isVTangentAttributeEnabled;
		properties.isTexCoordAttributeEnabled = this.isTexCoordAttributeEnabled;
		properties.isColorAttributeEnabled = this.isColorAttributeEnabled;
		properties.vertexCapacity = this.vertexCapacity;
		properties.elementCapacity = this.elementCapacity;
		return properties;
	}
};