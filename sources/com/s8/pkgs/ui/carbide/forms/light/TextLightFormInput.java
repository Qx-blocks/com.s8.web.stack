package com.s8.pkgs.ui.carbide.forms.light;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.functions.primitives.StringUTF8NeFunction;
import com.s8.api.web.lambdas.primitives.StringUTF8Lambda;


/**
 * 
 * @author pierreconvert
 *
 */
public class TextLightFormInput extends PrimitiveLightFormInput {


	public static TextLightFormInput create(S8WebFront front, String name, String value, StringUTF8Lambda lambda) {
		TextLightFormInput setter = new TextLightFormInput(front);
		setter.setName(name);
		setter.setValue(value);
		setter.onValueChangedLambda(lambda);
		return setter;
	}
	
	
	public TextLightFormInput(S8WebFront front) {
		super(front, LightFormWrapper.WEBPATH + "/TextLightFormInput");
	}
	
	
	public void setValue(String value) {
		vertex.outbound().setStringUTF8Field("value", value);
	}
	

	
	public void onValueChanged(StringUTF8NeFunction func) {
		vertex.inbound().setStringUTF8Method("on-value-changed", func);
	}
	
	public void onValueChangedLambda(StringUTF8Lambda lambda) {
		vertex.inbound().setStringUTF8MethodLambda("on-value-changed", lambda);
	}


}
