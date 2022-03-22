


import { NeObject } from '../../io-bohr/neon/NeObject';
import { NeObjectTypeHandler } from '../../io-bohr/neon/NeObjectTypeHandler';


import { S8, S8Orbital } from '/s8/S8';

/**
 * 
 */
S8.import_CSS('/carbide/cube/Cube.css');

export class CubeLevel extends NeObject {


    /**
     * 
     * @param {string} id 
     * @param {NeObjectTypeHandler} type 
     */
    constructor(id, type){
        super(id, type);
        this.level = -1;

        this.wrapperNode = document.createElement("div");
        this.wrapperNode.classList.add("cube-level");
        this.wrapperNode.style = `z-index: ${this.level};`;
    }

    getEnvelope(){
        return this.wrapperNode;
    }

    S8_render(){ /* continuous rendering approach... */ }


    S8_set_content(view){
        if(view != null){
            this.wrapperNode.appendChild(view.getEnvelope());
        }
    }

    S8_set_level(level){
        this.wrapperNode.style = `z-index: ${level*8};`;
    }


    S8_dispose(){ /* continuous rendering approach... */ }
}
S8.BOHR_lexicon.define("carbide.CubeLevel", CubeLevel);

