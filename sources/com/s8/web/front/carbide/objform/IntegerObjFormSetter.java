package com.s8.web.front.carbide.objform;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.io.bohr.neon.functions.primitives.Int32NeFunction;
import com.s8.io.bohr.neon.lambdas.primitives.Int32Lambda;


/**
 * 
 * @author pierreconvert
 *
 */
public class IntegerObjFormSetter extends PrimitiveObjFormSetter {

	public IntegerObjFormSetter(NeBranch branch) {
		super(branch, "/s8-web-front/carbide/objform/IntegerObjFormSetter");
	}
	
	
	public void setValue(int value) {
		vertex.setInt32Field("value", value);
	}
	

	
	public void onSetValue(Int32NeFunction func) {
		vertex.setInt32Method("set-value", func);
	}
	
	public void onSetValueLambda(Int32Lambda lambda) {
		vertex.setInt32MethodLambda("set-value", lambda);
	}
}
