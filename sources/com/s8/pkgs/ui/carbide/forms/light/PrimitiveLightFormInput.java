package com.s8.pkgs.ui.carbide.forms.light;

import com.s8.api.web.S8WebFront;

public class PrimitiveLightFormInput extends LightFormElement {

	public PrimitiveLightFormInput(S8WebFront branch, String typeName) {
		super(branch, typeName);
	}
	
	
	/**
	 * Set field name
	 * @param name
	 */
	public void setName(String name) {
		vertex.outbound().setStringUTF8Field("fieldName", name);
	}
	

	
	

}
