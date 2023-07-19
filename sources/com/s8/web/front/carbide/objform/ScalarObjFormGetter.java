package com.s8.web.front.carbide.objform;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.web.front.carbide.S8NumberFormat;

public class ScalarObjFormGetter extends PrimitiveObjFormGetter {
	

	/**
	 * 
	 * @param branch
	 * @param fieldName
	 * @param unit
	 * @return
	 */
	public static final ScalarObjFormGetter create(NeBranch branch, String fieldName, String unit, S8NumberFormat format) {
		ScalarObjFormGetter fieldView = new ScalarObjFormGetter(branch);
		fieldView.setFieldName(fieldName);
		fieldView.setUnit(unit);
		fieldView.setFormat(format);
		return fieldView;
	}
	
	/**
	 * 
	 * @param branch
	 * @param fieldName
	 * @param unit
	 * @param value
	 * @return
	 */
	public static final ScalarObjFormGetter create(NeBranch branch, String fieldName, String unit, S8NumberFormat format, double value) {
		ScalarObjFormGetter fieldView = new ScalarObjFormGetter(branch);
		fieldView.setFieldName(fieldName);
		fieldView.setUnit(unit);
		fieldView.setFormat(format);
		fieldView.setValue(value);
		return fieldView;
	}
	
	public static final ScalarObjFormGetter create(NeBranch branch, 
			String name, 
			String unit, 
			S8NumberFormat format,
			double value, 
			String doc) {
		ScalarObjFormGetter fieldView = new ScalarObjFormGetter(branch);
		fieldView.setFieldName(name);
		fieldView.setUnit(unit);
		fieldView.setFormat(format);
		fieldView.setValue(value);
		fieldView.setTooltipDoc(doc);
		return fieldView;
	}
	

	public ScalarObjFormGetter(NeBranch branch) {
		super(branch, "/s8-web-front/carbide/objform/ScalarObjFormGetter");
	}
	
	
	
	/**
	 * Set field name
	 * @param name
	 */
	public void setValue(double value) {
		vertex.setFloat32Field("value", (float) value);
	}
	
	
	public void setUnit(String unit) {
		vertex.setStringUTF8Field("unit", unit);
	}
	

	/**
	 * 
	 * @param unit
	 */
	public void setFormat(S8NumberFormat format) {
		vertex.setUInt8Field("format", format.code);
	}


}
