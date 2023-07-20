package com.s8.web.front.svg;

import com.s8.io.bohr.neon.core.NeBranch;

/**
 * 
 * @author pierreconvert
 *
 */
public class WebSVG_Circle extends WebSVG_Element {

	public static WebSVG_Line create(NeBranch branch, float x0, float y0, float x1, float y1) {
		WebSVG_Line line = new WebSVG_Line(branch);
		line.setCoordinates(x0, y0, x1, y1);
		return line;
	}


	public WebSVG_Circle(NeBranch branch) {
		super(branch, "/S8-web-front/svg/WebSVG_Circle");
	}


	public void setCenter(float x0, float y0) {
		vertex.setFloat32ArrayField("center", new float[] { x0, y0});
	}
	
	public void setCenter(float[] coordinates) {
		vertex.setFloat32ArrayField("center", coordinates);
	}
	
	public void setCenter(double x0, double y0) {
		setCenter(new float[] { (float) x0, (float) y0});
	}
	
	
	/**
	 * 
	 * @param radius
	 */
	public void setRadius(float radius) {
		vertex.setFloat32Field("radius", radius);
	}
	
	public void setRadius(double radius) {
		setRadius((float) radius);
	}




}
