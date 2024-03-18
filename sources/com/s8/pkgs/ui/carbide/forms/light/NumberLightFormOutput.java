package com.s8.pkgs.ui.carbide.forms.light;

import com.s8.api.web.S8WebFront;
import com.s8.pkgs.ui.carbide.CarbideNumberFormat;
import com.s8.pkgs.ui.carbide.CarbideTheme;
import com.s8.pkgs.ui.carbide.icons.SVG_CarbideIcon;
import com.s8.pkgs.ui.carbide.messages.ictx.IconTextMessage;

public class NumberLightFormOutput extends PrimitiveLightFormOutput {
	

	/**
	 * 
	 * @param branch
	 * @param fieldName
	 * @param unit
	 * @return
	 */
	public static final NumberLightFormOutput create(S8WebFront branch, String fieldName, String unit, CarbideNumberFormat format) {
		NumberLightFormOutput fieldView = new NumberLightFormOutput(branch);
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
	public static final NumberLightFormOutput create(S8WebFront branch, String fieldName, String unit, CarbideNumberFormat format, double value) {
		NumberLightFormOutput fieldView = new NumberLightFormOutput(branch);
		fieldView.setFieldName(fieldName);
		fieldView.setUnit(unit);
		fieldView.setFormat(format);
		fieldView.setValue(value);
		return fieldView;
	}
	
	public static final NumberLightFormOutput create(S8WebFront branch, 
			String name, 
			String unit, 
			CarbideNumberFormat format,
			double value, 
			String doc) {
		NumberLightFormOutput fieldView = new NumberLightFormOutput(branch);
		fieldView.setFieldName(name);
		fieldView.setUnit(unit);
		fieldView.setFormat(format);
		fieldView.setValue(value);
		fieldView.setHelperMessages(IconTextMessage.create(branch, CarbideTheme.DEFAULT, SVG_CarbideIcon.checklist, doc));
		return fieldView;
	}
	

	public NumberLightFormOutput(S8WebFront branch) {
		super(branch, LightFormWrapper.WEBPATH + "/NumberLightFormOutput");
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
