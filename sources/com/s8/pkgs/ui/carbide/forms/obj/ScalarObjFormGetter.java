package com.s8.pkgs.ui.carbide.forms.obj;

import com.s8.api.web.S8WebFront;
import com.s8.pkgs.ui.carbide.CarbideNumberFormat;

public class ScalarObjFormGetter extends PrimitiveObjFormGetter {
	

	/**
	 * 
	 * @param branch
	 * @param fieldName
	 * @param unit
	 * @return
	 */
	public static final ScalarObjFormGetter create(S8WebFront branch, String fieldName, String unit, CarbideNumberFormat format) {
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
	public static final ScalarObjFormGetter create(S8WebFront branch, String fieldName, String unit, CarbideNumberFormat format, double value) {
		ScalarObjFormGetter fieldView = new ScalarObjFormGetter(branch);
		fieldView.setFieldName(fieldName);
		fieldView.setUnit(unit);
		fieldView.setFormat(format);
		fieldView.setValue(value);
		return fieldView;
	}
	
	public static final ScalarObjFormGetter create(S8WebFront branch, 
			String name, 
			String unit, 
			CarbideNumberFormat format,
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
	

	public ScalarObjFormGetter(S8WebFront branch) {
		super(branch, ObjFormWrapper.OBJFORM_WEBPATH + "/ScalarObjFormGetter");
	}
	
	
	
	/**
	 * Set field name
	 * @param name
	 */
	public void setValue(double value) {
		vertex.outbound().setFloat32Field("value", (float) value);
	}
	
	
	public void setUnit(String unit) {
		vertex.outbound().setStringUTF8Field("unit", unit);
	}
	

	/**
	 * 
	 * @param unit
	 */
	public void setFormat(CarbideNumberFormat format) {
		vertex.outbound().setUInt8Field("format", format.code);
	}


}
