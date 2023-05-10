package com.s8.web.front.carbide.objform;

import com.s8.io.bohr.neon.core.NeBranch;


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
		vertex.setStringUTF8("unit", unit);
	}
	
	public void setValue(float value) {
		vertex.setFloat32("value", value);
	}
	
	
	/**
	 * 
	 * @param lambda
	 */
	public void onSetValue(Float32Lambda lambda) {
		vertex.forFloat32("set-value", lambda);
	}

}
