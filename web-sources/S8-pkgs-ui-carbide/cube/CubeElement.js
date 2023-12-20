
import { NeObject } from '/s8-core-io-bohr-neon/NeObject.js';


import { S8WebFront } from '/s8-pkgs-ui-carbide/S8WebFront.js';


/**
 * 
 */
S8WebFront.CSS_import('/s8-pkgs-ui-carbide/cube/Cube.css');

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