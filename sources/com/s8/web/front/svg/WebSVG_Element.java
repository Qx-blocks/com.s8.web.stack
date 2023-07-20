package com.s8.web.front.svg;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.io.bohr.neon.core.NeObject;

public class WebSVG_Element extends NeObject {

	public WebSVG_Element(NeBranch branch, String typeName) {
		super(branch, typeName);
	}
	
	
	public void isBoundingBoxRelevant(boolean state) {
		vertex.setBool8Field("is-bounding-box-relevant", state);
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
