package com.s8.web.front.svg;

import com.s8.io.bohr.neon.core.NeBranch;

/**
 * 
 * @author pierreconvert
 *
 */
public class WebSVG_Line extends WebSVG_Element {

	public static WebSVG_Line create(NeBranch branch, float x0, float y0, float x1, float y1) {
		WebSVG_Line line = new WebSVG_Line(branch);
		line.setCoordinates(x0, y0, x1, y1);
		return line;
	}
	
	
	public WebSVG_Line(NeBranch branch) {
		super(branch, "/S8-web-front/svg/WebSVG_Line");
	}
	
	
	
	/**
	 * 
	 * @param x0
	 * @param y0
	 * @param x1
	 * @param y1
	 */
	public void setCoordinates(float x0, float y0, float x1, float y1) {
		setCoordinates(new float[] { x0, y0, x1, y1});
	}
	
	

	/**
	 * following order: {x0, y0, x1, y1}
	 * @param coordinates
	 */
	public void setCoordinates(float[] coordinates) {
		vertex.setFloat32ArrayField("coordinates", coordinates);
	}

	
}
