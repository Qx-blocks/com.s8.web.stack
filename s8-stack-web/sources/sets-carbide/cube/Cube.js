



import * as BOHR from '../../bohr/BOHR_Protocol';


/**
 * 
 */
S8.import_CSS('/carbide/cube/Cube.css');


/**
 * 
 */
export class Cube extends S8Orbital {

    static BOHR_Prototype = {
        fields: [
            { name: "layers-#189", setter: Cube.prototype.setLayers02 }
        ],
        render : Cube.prototype.S8_render,
    };

    constructor(id) {
        super(id);
        this.wrapperNode = document.createElement("div");
        this.wrapperNode.classList.add("cube");
    }

    getEnvelope() {
        return this.wrapperNode;
    }

    S8_set(code, value) {
        switch (code) {
            case 0x02: this.setLayers02(value); break; // layers
            default: throw `Unsupported code for Stack: ${code}`;
        }
    }

    S8_render() { /* continuous rendering approach... */ }


    /**
     * 
     * @param {*} layers 
     */
    setLayers02(layers) {
        layers.forEach(layer => {
            if (layer != null) {
                this.wrapperNode.appendChild(layer.getEnvelope());
            }
        });
    }


    S8_dispose() { /* no disposing to be done... */ }
}
