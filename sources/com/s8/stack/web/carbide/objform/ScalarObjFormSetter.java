package com.s8.stack.web.carbide.objform;

import com.s8.io.bohr.neon.core.NeBranch;


/**
 * 
 * @author pierreconvert
 *
 */
public class ScalarObjFormSetter extends PrimitiveObjFormSetter {

	public ScalarObjFormSetter(NeBranch branch) {
		super(branch, "/s8-stack-web/carbide/objform/ScalarObjFormGetter");
	}
	
	
	public void setUnit(String unit) {
		vertex.setStringUTF8("unit", unit);
	}

}
