package com.s8.pkgs.ui.carbide.objform;

import com.s8.api.objects.web.WebS8Session;
import com.s8.pkgs.ui.carbide.Carbide;

public class TextObjFormGetter extends PrimitiveObjFormGetter {
	/**
	 * 
	 * @param branch
	 * @param fieldName
	 * @param unit
	 * @return
	 */
	public static final TextObjFormGetter create(WebS8Session branch, String fieldName, String value) {
		TextObjFormGetter fieldView = new TextObjFormGetter(branch);
		fieldView.setFieldName(fieldName);
		fieldView.setValue(value);
		return fieldView;
	}
	
	

	public TextObjFormGetter(WebS8Session branch) {
		super(branch, Carbide.ROOT_WEBPATH + "/objform/TextObjFormGetter");
	}
	
	
	/**
	 * Set field name
	 * @param name
	 */
	public void setValue(String value) {
		vertex.fields().setStringUTF8Field("value", value);
	}
	

}
