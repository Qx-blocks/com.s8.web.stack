package com.s8.web.front.carbide.objform;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.io.bohr.neon.functions.primitives.Bool8NeFunction;
import com.s8.io.bohr.neon.lambdas.primitives.Bool8Lambda;

/**
 * 
 * @author pierreconvert
 *
 */
public class BooleanObjFormSetter extends PrimitiveObjFormSetter {

	
	public static BooleanObjFormSetter create(NeBranch branch, String name, boolean initialValue, Bool8Lambda lambda) {
		BooleanObjFormSetter fieldView = new BooleanObjFormSetter(branch);
		fieldView.setName(name);
		fieldView.setValue(initialValue);
		fieldView.onValueChangedLambda(lambda);
		return fieldView;
	}
	
	
	public static BooleanObjFormSetter create(NeBranch branch, String name, boolean initialValue, Bool8Lambda lambda, String doc) {
		BooleanObjFormSetter fieldView = new BooleanObjFormSetter(branch);
		fieldView.setName(name);
		fieldView.setValue(initialValue);
		fieldView.onValueChangedLambda(lambda);
		fieldView.setTooltipDoc(doc);
		return fieldView;
	}
	
	
	/**
	 * 
	 * @param branch
	 */
	public BooleanObjFormSetter(NeBranch branch) {
		super(branch, "/s8-web-front/carbide/objform/BooleanObjFormGetter");
	}
	

	
	/**
	 * 
	 * @param value
	 */
	public void setValue(boolean value) {
		vertex.fields().setBool8Field("value", value);
	}
	
	
	/**
	 * 
	 * @param lambda
	 */
	public void onValueChangedLambda(Bool8Lambda lambda) {
		vertex.methods().setBool8MethodLambda("on-value-changed", lambda);
	}

	
	/**
	 * 
	 * @param func
	 */
	public void onValueChanged(Bool8NeFunction func) {
		vertex.methods().setBool8Method("on-value-changed", func);
	}

}
