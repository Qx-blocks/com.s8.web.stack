package com.s8.pkgs.ui.carbide.forms.obj;

import com.s8.api.web.S8WebFront;

public class TextObjFormGetter extends PrimitiveObjFormGetter {
	/**
	 * 
	 * @param branch
	 * @param fieldName
	 * @param unit
	 * @return
	 */
	public static final TextObjFormGetter create(S8WebFront branch, String fieldName, String value) {
		TextObjFormGetter fieldView = new TextObjFormGetter(branch);
		fieldView.setFieldName(fieldName);
		fieldView.setValue(value);
		return fieldView;
	}
	
	

	public TextObjFormGetter(S8WebFront branch) {
		super(branch, ObjFormWrapper.WEBPATH + "/TextObjFormGetter");
	}
	
	
	/**
	 * Set field name
	 * @param name
	 */
	public void setValue(String value) {
		vertex.outbound().setStringUTF8Field("value", value);
	}
	

}
