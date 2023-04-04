package com.s8.web.front.carbide.objform;

import java.text.DecimalFormat;

import com.s8.io.bohr.neon.core.NeBranch;

public class ScalarObjFormGetter extends PrimitiveObjFormGetter {

	public ScalarObjFormGetter(NeBranch branch) {
		super(branch, "/s8-stack-web/carbide/objform/ScalarObjFormGetter");
	}
	
	
	/**
	 * Set field name
	 * @param name
	 */
	public void setValue(String value) {
		vertex.setStringUTF8("value", value);
	}
	
	/**
	 * Set field name
	 * @param name
	 */
	public void setValue(double value, DecimalFormat format) {
		vertex.setStringUTF8("value", format.format(value));
	}
	
	
	public void setUnit(String unit) {
		vertex.setStringUTF8("unit", unit);
	}

}
