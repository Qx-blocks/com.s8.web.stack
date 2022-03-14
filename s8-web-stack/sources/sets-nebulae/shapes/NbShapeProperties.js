import { NbMeshProperties } from "./NbMeshProperties";


/**
 * 
 */
export class NbShapeProperties {


    /** @type { Map<string, NbMeshProperties> } */
    map;


    /**
     * 
     */
    constructor(){
        this.map = new Map();
    }


    static createSingleton(appearanceName, meshProperties){
        let properties = new NbMeshProperties();
        properties.map.set(appearanceName, meshProperties);
    }


    /**
     * 
     * @param {NbShapeProperties} props 
     */
    append(props){
        props.map.forEach((meshProperties, appearanceName) => {
            if(this.map.has(appearanceName)){
                let thisProps = this.map.get(appearanceName);
                thisProps.vertexCapacity += meshProperties.vertexCapacity;
                thisProps.elementCapacity += meshProperties.elementCapacity;
            }
            else{
                this.map.set(appearanceName, meshProperties.clone());
            }
        });
    }



    /**
     * 
     * @param {number} factor 
     * @returns {NbShapeProperties}
     */
    clone(factor){
        let props = new NbShapeProperties();
        this.map.forEach((meshProperties, appearanceName) => {
            props.map.set(appearanceName, meshProperties.clone(factor));
        });
        return props;
    }

}