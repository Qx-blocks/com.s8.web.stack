
import { NeObject } from '/S8-core-bohr-neon/NeObject.js';


import { S8WebFront } from '/S8-pkgs-ui-carbide/S8WebFront.js';


/**
 * 
 */
S8WebFront.CSS_import('/S8-pkgs-ui-carbide/cube/Cube.css');

export class CubeElement extends NeObject {


    constructor(){
        super();
    }

    S8_render(){ /* continuous rendering approach... */ }

    S8_set_zIndex(level){
        this.getEnvelope().style.zIndex = level;
    }

    S8_dispose(){ /* continuous rendering approach... */ }
}