package com.s8.pkgs.ui.carbide.forms.obj;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.functions.primitives.Bool8NeFunction;
import com.s8.api.web.lambdas.primitives.Bool8Lambda;

/**
 * 
 * @author pierreconvert
 *
 */
public class BooleanObjFormSetter extends PrimitiveObjFormSetter {

	
	
	/**
	 * 
	 * @param branch
	 * @param name
	 * @param initialValue
	 * @param lambda
	 * @return
	 */
	public static BooleanObjFormSetter create(S8WebFront branch, String name, boolean initialValue, Bool8Lambda lambda) {
		BooleanObjFormSetter fieldView = new BooleanObjFormSetter(branch);
		fieldView.setName(name);
		fieldView.setValue(initialValue);
		fieldView.onValueChangedLambda(lambda);
		return fieldView;
	}
	
	
	
	/**
	 * 
	 * @param branch
	 * @param name
	 * @param initialValue
	 * @param lambda
	 * @param doc
	 * @return
	 */
	public static BooleanObjFormSetter create(S8WebFront branch, String name, boolean initialValue, Bool8Lambda lambda, String doc) {
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
	public BooleanObjFormSetter(S8WebFront branch) {
		super(branch, ObjFormWrapper.OBJFORM_WEBPATH + "/BooleanObjFormGetter");
	}
	

	
	/**
	 * 
	 * @param value
	 */
	public void setValue(boolean value) {
		vertex.outbound().setBool8Field("value", value);
	}
	
	
	/**
	 * 
	 * @param lambda
	 */
	public void onValueChangedLambda(Bool8Lambda lambda) {
		vertex.inbound().setBool8MethodLambda("on-value-changed", lambda);
	}

	
	/**
	 * 
	 * @param func
	 */
	public void onValueChanged(Bool8NeFunction func) {
		vertex.inbound().setBool8Method("on-value-changed", func);
	}

}
