package com.s8.stack.web.carbide.objform;

import com.s8.io.bohr.neon.core.NeBranch;

public class BooleanObjFormGetter extends PrimitiveObjFormGetter {

	public BooleanObjFormGetter(NeBranch branch) {
		super(branch, "/s8-stack-web/carbide/objform/BooleanObjFormGetter");
	}
	
	/**
	 * Set field value
	 * @param value
	 */
	public void setValue(boolean value) {
		vertex.setBool8("value", value);
	}
	
}
