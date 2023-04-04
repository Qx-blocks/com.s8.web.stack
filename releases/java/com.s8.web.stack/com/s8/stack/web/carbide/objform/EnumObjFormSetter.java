package com.s8.stack.web.carbide.objform;

import com.s8.io.bohr.neon.core.NeBranch;


/**
 * 
 * @author pierreconvert
 *
 */
public class EnumObjFormSetter extends PrimitiveObjFormSetter {

	public EnumObjFormSetter(NeBranch branch) {
		super(branch, "/s8-stack-web/carbide/objform/EnumObjFormSetter");
	}
	
	
	public void setOptions(String[] options) {
		vertex.setStringUTF8Array("options", options);
	}

}
