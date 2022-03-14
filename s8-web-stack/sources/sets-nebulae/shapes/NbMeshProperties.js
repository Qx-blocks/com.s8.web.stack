

/**
 * 
 */
export class NbMeshProperties {

     /** @type {number} dimension of mesh */
	dimension = 0;

    /** @type {boolean} vertex attributes */
    isVertexAttributeEnabled = false;

    /** @type {boolean} normal attributes */
    isNormalAttributeEnabled = false;

    /** @type {boolean} u-tangent attributes */
    isUTangentAttributeEnabled = false;

    /** @type {boolean} v-tangent attributes */
    isVTangentAttributeEnabled = false;

    /** @type {boolean} tex-coords */
    isTexCoordAttributeEnabled = false;

    /** @type {boolean} colors */
    isColorAttributeEnabled = false;

 
     /** @type {number} nVertices : number of vertices*/
     vertexCapacity = 0;

     /** @type {number} nVertices : number of vertices*/
	elementCapacity = 0;



     /**
      * @param {number} factor
      * @returns {NbMeshProperties}
      */
     clone(factor = 1){
          
          let props = new NbMeshProperties();
          
          // properties
          props.dimension = this.dimension;
        
          props.isVertexAttributeEnabled = this.isVertexAttributeEnabled;
          props.isNormalAttributeEnabled = this.isNormalAttributeEnabled;
          props.isUTangentAttributeEnabled = this.isUTangentAttributeEnabled;
          props.isVTangentAttributeEnabled = this.isVTangentAttributeEnabled;
          props.isTexCoordAttributeEnabled = this.isTexCoordAttributeEnabled;
          props.isColorAttributeEnabled = this.isColorAttributeEnabled;

          props.vertexCapacity = this.vertexCapacity * factor;
          props.elementCapacity = this.elementCapacity * factor;

          return props;
     }

}