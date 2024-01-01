package com.s8.pkgs.ui.carbide.objform;

import com.s8.api.web.S8WebFront;
import com.s8.pkgs.ui.carbide.WebSources;

public class BooleanObjFormGetter extends PrimitiveObjFormGetter {

	public BooleanObjFormGetter(S8WebFront branch) {
		super(branch, WebSources.ROOT_WEBPATH + "/objform/BooleanObjFormGetter");
	}
	
	/**
	 * Set field value
	 * @param value
	 */
	public void setValue(boolean value) {
		vertex.outbound().setBool8Field("value", value);
	}
	
}
