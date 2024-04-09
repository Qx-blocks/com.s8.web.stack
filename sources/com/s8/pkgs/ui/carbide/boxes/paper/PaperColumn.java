package com.s8.pkgs.ui.carbide.boxes.paper;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.S8WebObject;


/**
 * 
 * @author pierreconvert
 *
 */
public class PaperColumn extends S8WebObject {

	
	/**
	 * 
	 * @param branch
	 */
	public PaperColumn(S8WebFront branch) {
		super(branch, PaperColumnsStruct.ROOT_WEBPATH + "/PaperColumn");
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
