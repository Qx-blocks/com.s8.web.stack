package com.s8.pkgs.ui.carbide.objform;

import com.s8.api.web.S8WebFront;

public class PrimitiveObjFormSetter extends ObjFormElement {

	public PrimitiveObjFormSetter(S8WebFront branch, String typeName) {
		super(branch, typeName);
	}
	
	
	/**
	 * Set field name
	 * @param name
	 */
	public void setName(String name) {
		vertex.fields().setStringUTF8Field("fieldName", name);
	}

}
