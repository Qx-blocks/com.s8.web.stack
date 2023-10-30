package com.s8.pkgs.ui.carbide.objform;

import com.s8.api.objects.web.WebS8Session;
import com.s8.pkgs.ui.carbide.Carbide;

public class IntegerObjFormGetter extends PrimitiveObjFormGetter {

	public IntegerObjFormGetter(WebS8Session branch) {
		super(branch, Carbide.ROOT_WEBPATH + "/objform/IntegerObjFormGetter");
	}
	
	
	/**
	 * Set field name
	 * @param name
	 */
	public void setValue(int value) {
		vertex.fields().setInt32Field("value", value);
	}
	

}
