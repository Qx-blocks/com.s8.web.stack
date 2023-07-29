package com.s8.web.front.carbide.objform;

import java.util.function.Consumer;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.io.bohr.neon.functions.primitives.UInt8NeFunction;
import com.s8.io.bohr.neon.lambdas.primitives.UInt8Lambda;


/**
 * 
 * @author pierreconvert
 *
 */
public class EnumObjFormSetter extends PrimitiveObjFormSetter {
	
	
	public static <E extends Enum<E>> EnumObjFormSetter create(NeBranch branch, String name, Class<E> enumType, int preset, 
			Consumer<E> consumer, String doc) {
		
		E[] enumValues = enumType.getEnumConstants();
		int n = enumValues.length;
		String[] enumNames = new String[n];
		for(int i = 0; i<n; i++) { enumNames[i] = enumValues[i].name(); }
		EnumObjFormSetter formSetter = new EnumObjFormSetter(branch);
		formSetter.setName(name);
		formSetter.setEnumValues(enumNames);
		formSetter.setPresetIndex(preset);
		formSetter.onSelectedLambda(index -> consumer.accept(enumValues[index]));
		formSetter.setTooltipDoc(doc);
		return formSetter;
	}

	
	public EnumObjFormSetter(NeBranch branch) {
		super(branch, "/s8-web-front/carbide/objform/EnumObjFormSetter");
	}
	
	
	public void setEnumValues(String[] enumValues) {
		vertex.fields().setStringUTF8ArrayField("enumValues", enumValues);
	}
	
	public void setPresetIndex(int index) {
		vertex.fields().setUInt8Field("preset", index);
	}
	
	
	public void onSelectedLambda(UInt8Lambda lambda) {
		vertex.methods().setUInt8MethodLambda("on-selected", lambda);
	}
	
	public void onSelected(UInt8NeFunction function) {
		vertex.methods().setUInt8Method("on-selected", function);
	}

}
