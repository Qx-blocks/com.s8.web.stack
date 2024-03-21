package com.s8.pkgs.ui.carbide.structs.columns;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.S8WebObject;
import com.s8.pkgs.ui.carbide.CarbideWebSources;


/**
 * 
 * @author pierreconvert
 *
 */
public class Column extends S8WebObject {

	
	/**  */
	public final static String JS_TYPENAME = "/structs/columns/Column";
	
	
	/**
	 * 
	 * @param branch
	 */
	public Column(S8WebFront branch) {
		super(branch, CarbideWebSources.ROOT_WEBPATH + JS_TYPENAME);
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
