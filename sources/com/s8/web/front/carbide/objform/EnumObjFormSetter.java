package com.s8.web.front.carbide.objform;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.io.bohr.neon.functions.primitives.UInt8NeFunction;
import com.s8.io.bohr.neon.lambdas.primitives.UInt8Lambda;


/**
 * 
 * @author pierreconvert
 *
 */
public class EnumObjFormSetter extends PrimitiveObjFormSetter {
	

	
	public EnumObjFormSetter(NeBranch branch) {
		super(branch, "/s8-web-front/carbide/objform/EnumObjFormSetter");
	}
	
	
	public void setEnumValues(String[] enumValues) {
		vertex.setStringUTF8ArrayField("enumValues", enumValues);
	}
	
	public void setPresetIndex(int index) {
		vertex.setUInt8Field("preset", index);
	}
	
	
	public void onSelectedLambda(UInt8Lambda lambda) {
		vertex.setUInt8MethodLambda("on-selected", lambda);
	}
	
	public void onSelected(UInt8NeFunction function) {
		vertex.setUInt8Method("on-selected", function);
	}

}
