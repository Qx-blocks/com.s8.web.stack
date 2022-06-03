
import { S8 } from '/s8-io-bohr/atom/S8.js';
import { S8Object } from '/s8-io-bohr/atom/S8Object.js';



/**
 * 
 */
S8.import_CSS('/s8-stack-web/carbide/cube/Cube.css');

export class CubeElement extends S8Object {


    constructor(){
        super();
    }

    S8_render(){ /* continuous rendering approach... */ }

    S8_set_zIndex(level){
        this.getEnvelope().style.zIndex = level;
    }

    S8_dispose(){ /* continuous rendering approach... */ }
}