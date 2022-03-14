


import { S8, S8Orbital } from '/s8/S8';

/**
 * 
 */
S8.import_CSS('/carbide/cube/Cube.css');

export class CubeLevel extends S8Orbital {

    static S8Prototype = {
        content : ObjectS8FieldValueHandler
    };

    constructor(id){
        super(id);
        this.level = -1;

        this.wrapperNode = document.createElement("div");
        this.wrapperNode.classList.add("cube-level");
        this.wrapperNode.style = `z-index: ${this.level};`;
    }

    getEnvelope(){
        return this.wrapperNode;
    }

    S8_set(code, value){
        switch(code){
            case 0x02 : this.setContent(value); break; // layers
            case 0x04 : this.setLevel(value); break; // layers
            default : throw `Unsupported code for Stack: ${code}`;
        }
    }


    S8_render(){ /* continuous rendering approach... */ }


    setContent(view){
        if(view != null){
            this.wrapperNode.appendChild(view.getEnvelope());
        }
    }

    setLevel(level){
        this.wrapperNode.style = `z-index: ${level*8};`;
    }


    S8_dispose(){ /* continuous rendering approach... */ }
}
S8.BOHR_lexicon.define("carbide.CubeLevel", CubeLevel);

