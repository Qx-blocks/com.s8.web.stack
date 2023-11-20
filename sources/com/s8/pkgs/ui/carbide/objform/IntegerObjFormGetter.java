package com.s8.pkgs.ui.carbide.objform;

import com.s8.api.objects.web.S8WebFront;
import com.s8.pkgs.ui.carbide.Carbide;

public class IntegerObjFormGetter extends PrimitiveObjFormGetter {

	public IntegerObjFormGetter(S8WebFront branch) {
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
