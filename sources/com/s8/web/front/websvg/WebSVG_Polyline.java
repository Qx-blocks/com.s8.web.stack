package com.s8.web.front.websvg;

import com.s8.io.bohr.neon.core.NeBranch;


/**
 * 
 * @author pierreconvert
 *
 */
public class WebSVG_Polyline extends WebSVG_Element {
	

	/**
	 * 
	 * @param branch
	 * @param color
	 * @param solidity
	 * @param thickness
	 * @param xc
	 * @param yc
	 * @param r
	 * @return
	 */
	public static WebSVG_Polyline create(NeBranch branch, 
			double thickness,
			WebSVG_StrokeSolidity solidity,
			WebSVG_StrokeColor color,
			float[] coordinates,
			boolean isBoundingBoxUpdating) {
		WebSVG_Polyline polyline = new WebSVG_Polyline(branch);
		polyline.setStrokeColor(color);
		polyline.setStrokeSolidity(solidity);
		polyline.setStrokeThickness((float) thickness);
		polyline.setCoordinates(coordinates);
		polyline.isBoundingBoxRelevant(isBoundingBoxUpdating);
		return polyline;
	}
	
	
	/**
	 * 
	 * @param branch
	 * @param coordinates
	 * @return
	 */
	public static WebSVG_Polyline create(NeBranch branch, float[] coordinates) {
		WebSVG_Polyline line = new WebSVG_Polyline(branch);
		line.setCoordinates(coordinates);
		return line;
	}
	
	
	/**
	 * 
	 * @param branch
	 */
	public WebSVG_Polyline(NeBranch branch) {
		super(branch, "/s8-web-front/websvg/WebSVG_Polyline");
	}
	

	/**
	 * following order: {x0, y0, x1, y1, ... , x[n-1], y[n-1]}
	 * @param coordinates
	 */
	public void setCoordinates(float[] coordinates) {
		vertex.fields().setFloat32ArrayField("coordinates", coordinates);
	}

}
