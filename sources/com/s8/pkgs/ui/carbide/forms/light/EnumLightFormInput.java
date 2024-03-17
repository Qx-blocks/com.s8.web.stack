package com.s8.pkgs.ui.carbide.forms.light;

import java.util.function.Consumer;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.functions.primitives.UInt8NeFunction;
import com.s8.api.web.lambdas.primitives.UInt8Lambda;


/**
 * 
 * @author pierreconvert
 *
 */
public class EnumLightFormInput extends PrimitiveLightFormInput {
	
	
	public static <E extends Enum<E>> EnumLightFormInput create(S8WebFront branch, String name, Class<E> enumType, int preset, 
			Consumer<E> consumer, String doc) {
		
		E[] enumValues = enumType.getEnumConstants();
		int n = enumValues.length;
		String[] enumNames = new String[n];
		for(int i = 0; i<n; i++) { enumNames[i] = enumValues[i].name(); }
		EnumLightFormInput formSetter = new EnumLightFormInput(branch);
		formSetter.setName(name);
		formSetter.setEnumValues(enumNames);
		formSetter.setPresetIndex(preset);
		formSetter.onSelectedLambda(index -> consumer.accept(enumValues[index]));
		formSetter.setHelperInfo(doc);
		return formSetter;
	}

	
	public EnumLightFormInput(S8WebFront branch) {
		super(branch, LightFormWrapper.WEBPATH + "/EnumLightFormInput");
	}
	
	
	public void setEnumValues(String[] enumValues) {
		vertex.outbound().setStringUTF8ArrayField("enumValues", enumValues);
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
