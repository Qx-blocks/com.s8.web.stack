package com.s8.pkgs.ui.carbide.objform;

import com.s8.api.objects.web.WebS8Session;
import com.s8.pkgs.ui.carbide.Carbide;

public class BooleanObjFormGetter extends PrimitiveObjFormGetter {

	public BooleanObjFormGetter(WebS8Session branch) {
		super(branch, Carbide.ROOT_WEBPATH + "/objform/BooleanObjFormGetter");
	}
	
	/**
	 * Set field value
	 * @param value
	 */
	public void setValue(boolean value) {
		vertex.fields().setBool8Field("value", value);
	}
	
}
