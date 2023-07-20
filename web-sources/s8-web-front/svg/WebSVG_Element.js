import { WebSVG_Canvas } from "svg/WebSVG_Canvas.js";
import { NeObject } from "/s8-io-bohr-neon/NeObject.js";




/**
 * 
 */
export class WebSVG_Element extends NeObject {

    /**
     * @type{WebSVG_Canvas}
     */
    canvas;


    /**
     * @type{boolean}
     */
    isBoundingBoxRelevant;


    /**
     * @type{SVGElement}
     */
    SVG_node;

    
    constructor(){
        super();
    }

    /**
     * 
     * @param {WebSVG_Canvas} canvas 
     */
    link(canvas){
        this.canvas = canvas;
    }



	S8_set_isBoundingBoxRelevant(state) {
		this.isBoundingBoxRelevant = state;
	}
	
	
	/**
	 * 
	 * @param solidity
	 */
	public void setStrokeSolidity(WebSVG_StrokeSolidity solidity) {
		vertex.setUInt8Field("stroke-solidity", solidity.code);
	}
	
	
	/**
	 * 
	 * @param color
	 */
	public void setStrokeColor(WebSVG_StrokeColor color) {
		vertex.setUInt8Field("stroke-color", color.code);
	}
	
	
	/**
	 * Style: 
	 * @param thickness
	 */
	public void setStrokeThickness(WebSVG_StrokeThickness thickness) {
		vertex.setUInt8Field("stroke-thickness", thickness.code);
	}

    




}