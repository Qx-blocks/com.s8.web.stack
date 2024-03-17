package com.s8.pkgs.ui.carbide.forms.light;

import com.s8.api.web.S8WebFront;

public class IntegerLightFormOutput extends PrimitiveLightFormOutput {

	public IntegerLightFormOutput(S8WebFront branch) {
		super(branch, LightFormWrapper.WEBPATH + "/IntegerLightFormOutput");
	}
	
	
	/**
	 * Set field name
	 * @param name
	 */
	public void setValue(int value) {
		vertex.outbound().setInt32Field("value", value);
	}
	

}
