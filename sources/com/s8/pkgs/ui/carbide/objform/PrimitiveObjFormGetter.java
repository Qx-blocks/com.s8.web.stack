package com.s8.pkgs.ui.carbide.objform;

import com.s8.api.objects.web.S8WebFront;

public class PrimitiveObjFormGetter extends ObjFormElement {

	public PrimitiveObjFormGetter(S8WebFront branch, String typeName) {
		super(branch, typeName);
	}
	
	
	/**
	 * Set field name
	 * @param name
	 */
	public void setFieldName(String name) {
		vertex.fields().setStringUTF8Field("fieldName", name);
	}

}
