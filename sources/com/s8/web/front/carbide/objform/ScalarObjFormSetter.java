package com.s8.web.front.carbide.objform;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.io.bohr.neon.functions.primitives.Float32NeFunction;
import com.s8.io.bohr.neon.lambdas.primitives.Float32Lambda;
import com.s8.web.front.carbide.S8NumberFormat;


/**
 * 
 * @author pierreconvert
 *
 */
public class ScalarObjFormSetter extends PrimitiveObjFormSetter {


	public static ScalarObjFormSetter create(NeBranch branch, 
			String name, 
			String unit,
			S8NumberFormat format,
			double initialValue, 
			Float32Lambda lambda) {
		ScalarObjFormSetter fieldView = new ScalarObjFormSetter(branch);
		fieldView.setName(name);
		fieldView.setUnit(unit);
		fieldView.setValue((float) initialValue);
		fieldView.onSetValue(lambda);
		return fieldView;
	}


	public static ScalarObjFormSetter create(NeBranch branch, 
			String name, 
			String unit,
			S8NumberFormat format,
			double initialValue, 
			Float32Lambda lambda, 
			String doc) {
		ScalarObjFormSetter fieldView = new ScalarObjFormSetter(branch);
		fieldView.setName(name);
		fieldView.setUnit(unit);
		fieldView.setValue((float) initialValue);
		fieldView.onSetValue(lambda);	
		fieldView.setTooltipDoc(doc);
		return fieldView;
	}



	/**
	 * 
	 * @param branch
	 */
	public ScalarObjFormSetter(NeBranch branch) {
		super(branch, "/s8-web-front/carbide/objform/ScalarObjFormSetter");
	}


	/**
	 * 
	 * @param unit
	 */
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


	/**
	 * 
	 * @param value
	 */
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


	/**
	 * 
	 * @param func
	 */
	public void onSetValue(Float32NeFunction func) {
		vertex.setFloat32Method("set-value", func);
	}
}
