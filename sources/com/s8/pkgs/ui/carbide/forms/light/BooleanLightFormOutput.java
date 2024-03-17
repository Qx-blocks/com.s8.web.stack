package com.s8.pkgs.ui.carbide.forms.light;

import com.s8.api.web.S8WebFront;


/**
 * 
 */
public class BooleanLightFormOutput extends PrimitiveLightFormOutput {

	
	/**
	 * 
	 * @param branch
	 */
	public BooleanLightFormOutput(S8WebFront branch) {
		super(branch, LightFormWrapper.WEBPATH + "/BooleanLightFormOutput");
	}
	
	/**
	 * Set field value
	 * @param value
	 */
	public void setValue(boolean value) {
		vertex.outbound().setBool8Field("value", value);
	}
	
}
