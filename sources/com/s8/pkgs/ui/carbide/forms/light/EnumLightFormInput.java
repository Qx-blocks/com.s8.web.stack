package com.s8.pkgs.ui.carbide.forms.light;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.functions.primitives.UInt8NeFunction;
import com.s8.api.web.lambdas.primitives.UInt8Lambda;


/**
 * 
 * @author pierreconvert
 *
 */
public class EnumLightFormInput extends PrimitiveLightFormInput {
	
	
	
	public static <E extends Enum<E>> EnumLightFormInput create(S8WebFront branch, 
			String name, 
			String[] options, 
			int preset, 
			UInt8Lambda lambda) {
		EnumLightFormInput formSetter = new EnumLightFormInput(branch);
		formSetter.setName(name);
		formSetter.setOptions(options);
		formSetter.setPresetIndex(preset);
		formSetter.onSelectedLambda(lambda);
		return formSetter;
	}

	
	public EnumLightFormInput(S8WebFront branch) {
		super(branch, LightFormWrapper.WEBPATH + "/EnumLightFormInput");
	}
	
	
	public void setOptions(String[] options) {
		vertex.outbound().setStringUTF8ArrayField("options", options);
	}
	
	public void setPresetIndex(int index) {
		vertex.outbound().setUInt8Field("preset", index);
	}
	
	
	public void onSelectedLambda(UInt8Lambda lambda) {
		vertex.inbound().setUInt8MethodLambda("on-selected", lambda);
	}
	
	public void onSelected(UInt8NeFunction function) {
		vertex.inbound().setUInt8Method("on-selected", function);
	}

}
