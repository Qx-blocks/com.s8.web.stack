import { NeObject } from "/s8-io-bohr-neon/NeObject.js";




/**
 * 
 */
export class WebSVG_Canvas extends NeObject {


    isRedrawn


    constructor(){
        super();
    }


    S8_render() {
        this.canvas.redraw();
    }


}