package com.s8.pkgs.ui.carbide.forms.obj;

import com.s8.api.web.S8WebFront;


/**
 * 
 */
public class BooleanObjFormGetter extends PrimitiveObjFormGetter {

	
	/**
	 * 
	 * @param branch
	 */
	public BooleanObjFormGetter(S8WebFront branch) {
		super(branch, ObjFormWrapper.WEBPATH + "/BooleanObjFormGetter");
	}
	
	/**
	 * Set field value
	 * @param value
	 */
	public void setValue(boolean value) {
		vertex.outbound().setBool8Field("value", value);
	}
	
}
