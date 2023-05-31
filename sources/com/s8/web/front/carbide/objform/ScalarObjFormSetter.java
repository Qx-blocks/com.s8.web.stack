package com.s8.web.front.carbide.objform;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.io.bohr.neon.functions.primitives.Float32NeFunction;
import com.s8.io.bohr.neon.lambdas.primitives.Float32Lambda;


/**
 * 
 * @author pierreconvert
 *
 */
public class ScalarObjFormSetter extends PrimitiveObjFormSetter {

	public ScalarObjFormSetter(NeBranch branch) {
		super(branch, "/s8-web-front/carbide/objform/ScalarObjFormSetter");
	}
	
	
	public void setUnit(String unit) {
		vertex.setStringUTF8Field("unit", unit);
	}
	
	public void setValue(float value) {
		vertex.setFloat32Field("value", value);
	}
	
	
	/**
	 * 
	 * @param lambda
	 */
	public void onSetValue(Float32Lambda lambda) {
		vertex.setFloat32MethodLambda("set-value", lambda);
	}

	
	public void onSetValue(Float32NeFunction func) {
		vertex.setFloat32Method("set-value", func);
	}
}
