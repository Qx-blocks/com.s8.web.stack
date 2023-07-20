package com.s8.web.front.carbide.objform;

import com.s8.io.bohr.neon.core.NeBranch;

public class BooleanObjFormGetter extends PrimitiveObjFormGetter {

	public BooleanObjFormGetter(NeBranch branch) {
		super(branch, "/s8-web-front/carbide/objform/BooleanObjFormGetter");
	}
	
	/**
	 * Set field value
	 * @param value
	 */
	public void setValue(boolean value) {
		vertex.fields().setBool8Field("value", value);
	}
	
}
