package com.s8.web.front.carbide.objform;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.io.bohr.neon.functions.primitives.StringUTF8NeFunction;
import com.s8.io.bohr.neon.lambdas.primitives.StringUTF8Lambda;


/**
 * 
 * @author pierreconvert
 *
 */
public class TextObjFormSetter extends PrimitiveObjFormSetter {

	public TextObjFormSetter(NeBranch branch) {
		super(branch, "/s8-web-front/carbide/objform/TextObjFormSetter");
	}
	
	
	public void setValue(float value) {
		vertex.setFloat32Field("value", value);
	}
	

	
	public void onSetValue(StringUTF8NeFunction func) {
		vertex.setStringUTF8Method("set-value", func);
	}
	
	public void onSetValueLambda(StringUTF8Lambda lambda) {
		vertex.setStringUTF8MethodLambda("set-value", lambda);
	}
}
