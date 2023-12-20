package com.s8.pkgs.ui.carbide.objform;

import com.s8.api.web.S8WebFront;
import com.s8.pkgs.ui.carbide.WebSources;

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
		super(branch, WebSources.ROOT_WEBPATH + "/objform/TextObjFormGetter");
	}
	
	
	/**
	 * Set field name
	 * @param name
	 */
	public void setValue(String value) {
		vertex.fields().setStringUTF8Field("value", value);
	}
	

}
