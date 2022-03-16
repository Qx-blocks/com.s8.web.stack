

import { NbScene } from "../scenes/NbScene";
import { NbMesh } from "./NbMesh";
import { NbMeshProperties } from "./NbMeshProperties";
import { NbModel } from "./NbModel";
import { NbShapeProperties } from "./NbShapeProperties";


import * as M4 from "../maths/NbMatrix4d";


/**
 * 
 */
export class NbShape {

    /** @type {Map<string, NbMesh} meshes */
    meshes = new Map();


    /**
     * 
     * @param {NbShapeProperties} props 
     */
    constructor(props){
        props.forEach((meshProperties, appearanceName) => {
            // create the mesh
            this.meshes.set(appearanceName, NbMesh.create(meshProperties));
        });
    }


    /**
     * Get mesh.
     * 
     * @param {string} name (appearance name)
     * @returns {NbMesh} the corresponding mesh
     */
    getMesh(name){
        return this.meshes.get(name);
    }


    /**
     * 
     * @param {NbShape} shape
     * @param {Float32Array} matrix
     */
    append(shape, matrix = M4.createIdentity()) {
        shape.meshes.forEach((mesh, appearanceName) => {
            this.getMesh(appearanceName).append(mesh, matrix);
        });
    }

   
    /**
     * 
     * @returns {Map<string, NbModel>}
     */
    buildModels(){

        /** @type {Map<string, NbModel>} */
        let models = new Map();

        this.meshes.forEach((mesh, appearanceName) => {
            models.set(appearanceName, mesh.buildModel());
            this.getMesh(appearanceName).append(matrix, mesh);
        });
        return models;
    }


    /**
     * 
     * @returns { NbShapeProperties } the properties of the whole shape, mesh by mesh
     */
    getProperties(){
        let properties = new NbShapeProperties();
        this.meshes.forEach((mesh, appearanceName) => { 
            properties.map.set(appearanceName, mesh.getProperties()); 
        });
        return props;
    }
}