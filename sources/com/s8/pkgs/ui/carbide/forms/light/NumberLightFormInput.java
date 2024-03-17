package com.s8.pkgs.ui.carbide.forms.light;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.functions.primitives.Float32NeFunction;
import com.s8.api.web.lambdas.primitives.Float32Lambda;
import com.s8.pkgs.ui.carbide.CarbideNumberFormat;


/**
 * 
 * @author pierreconvert
 *
 */
public class NumberLightFormInput extends PrimitiveLightFormInput {


	public static NumberLightFormInput create(S8WebFront branch, 
			String name, 
			String unit,
			CarbideNumberFormat format,
			double initialValue, 
			Float32Lambda lambda) {
		NumberLightFormInput fieldView = new NumberLightFormInput(branch);
		fieldView.setName(name);
		fieldView.setUnit(unit);
		fieldView.setValue((float) initialValue);
		fieldView.onValueChanged(lambda);
		return fieldView;
	}


	public static NumberLightFormInput create(S8WebFront branch, 
			String name, 
			String unit,
			CarbideNumberFormat format,
			double initialValue, 
			Float32Lambda lambda, 
			String doc) {
		NumberLightFormInput fieldView = new NumberLightFormInput(branch);
		fieldView.setName(name);
		fieldView.setUnit(unit);
		fieldView.setValue((float) initialValue);
		fieldView.onValueChanged(lambda);	
		fieldView.setHelperInfo(doc);
		return fieldView;
	}



	/**
	 * 
	 * @param branch
	 */
	public NumberLightFormInput(S8WebFront branch) {
		super(branch, LightFormWrapper.WEBPATH + "/NumberLightFormInput");
	}


	/**
	 * 
	 * @param unit
	 */
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


	/**
	 * 
	 * @param value
	 */
	public void setValue(float value) {
		vertex.outbound().setFloat32Field("value", value);
	}


	/**
	 * 
	 * @param lambda
	 */
	public void onValueChanged(Float32Lambda lambda) {
		vertex.inbound().setFloat32MethodLambda("on-value-changed", lambda);
	}


	/**
	 * 
	 * @param func
	 */
	public void onValueChanged(Float32NeFunction func) {
		vertex.inbound().setFloat32Method("on-value-changed", func);
	}
}
