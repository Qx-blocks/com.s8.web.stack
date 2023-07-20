package com.s8.web.front.svg;

import com.s8.io.bohr.neon.core.NeBranch;

public class WebSVG_Polyline extends WebSVG_Element {
	
	public static WebSVG_Polyline create(NeBranch branch, float[] coordinates) {
		WebSVG_Polyline line = new WebSVG_Polyline(branch);
		line.setCoordinates(coordinates);
		return line;
	}
	
	
	public WebSVG_Polyline(NeBranch branch) {
		super(branch, "/S8-web-front/svg/WebSVG_Polyline");
	}
	

	/**
	 * following order: {x0, y0, x1, y1, ... , x[n-1], y[n-1]}
	 * @param coordinates
	 */
	public void setCoordinates(float[] coordinates) {
		vertex.setFloat32ArrayField("coordinates", coordinates);
	}

}
