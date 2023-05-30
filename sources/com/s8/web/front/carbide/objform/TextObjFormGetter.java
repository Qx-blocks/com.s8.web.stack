package com.s8.web.front.carbide.objform;

import com.s8.io.bohr.neon.core.NeBranch;

public class TextObjFormGetter extends PrimitiveObjFormGetter {

	public TextObjFormGetter(NeBranch branch) {
		super(branch, "/s8-web-front/carbide/objform/TextObjFormGetter");
	}
	
	
	/**
	 * Set field name
	 * @param name
	 */
	public void setValue(String value) {
		vertex.setStringUTF8Field("value", value);
	}
	

}
