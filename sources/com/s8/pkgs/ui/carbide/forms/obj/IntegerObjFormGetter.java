package com.s8.pkgs.ui.carbide.forms.obj;

import com.s8.api.web.S8WebFront;

public class IntegerObjFormGetter extends PrimitiveObjFormGetter {

	public IntegerObjFormGetter(S8WebFront branch) {
		super(branch, ObjFormWrapper.WEBPATH + "/IntegerObjFormGetter");
	}
	
	
	/**
	 * Set field name
	 * @param name
	 */
	public void setValue(int value) {
		vertex.outbound().setInt32Field("value", value);
	}
	

}
