package com.s8.pkgs.ui.carbide.boxes.b2;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.S8WebObject;


/**
 * 
 * @author pierreconvert
 *
 */
public class B2Column extends S8WebObject {

	
	/**  */
	public final static String JS_TYPENAME = "/B2Column";
	
	
	/**
	 * 
	 * @param branch
	 */
	public B2Column(S8WebFront branch) {
		super(branch, B2Box.WEBPATH + JS_TYPENAME);
	}
	
	
	
	/**
	 * 
	 * @param name
	 */
	public void setElements(S8WebObject... elements) {
		vertex.outbound().setObjectListField("elements", elements);
	}
	
	
	public void setWidth(double width) {
		vertex.outbound().setFloat32Field("width", (float) width);
	}
	
}
