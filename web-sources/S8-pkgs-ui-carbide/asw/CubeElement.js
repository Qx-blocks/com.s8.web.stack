
import { S8 } from '/S8-core-bohr-atom/S8.js';
import { NeObject } from '/S8-core-bohr-neon/NeObject.js';



/**
 * 
 */
S8.import_CSS('/S8-pkgs-ui-carbide/cube/Cube.css');

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