package com.s8.pkgs.ui.carbide.forms.light;

import com.s8.api.web.S8WebFront;

public class TextLightFormOutput extends PrimitiveLightFormOutput {
	/**
	 * 
	 * @param branch
	 * @param fieldName
	 * @param unit
	 * @return
	 */
	public static final TextLightFormOutput create(S8WebFront branch, String fieldName, String value) {
		TextLightFormOutput fieldView = new TextLightFormOutput(branch);
		fieldView.setFieldName(fieldName);
		fieldView.setValue(value);
		return fieldView;
	}
	
	

	public TextLightFormOutput(S8WebFront branch) {
		super(branch, LightFormWrapper.WEBPATH + "/TextLightFormOutput");
	}
	
	
	/**
	 * Set field name
	 * @param name
	 */
	public void setValue(String value) {
		vertex.outbound().setStringUTF8Field("value", value);
	}
	

}
