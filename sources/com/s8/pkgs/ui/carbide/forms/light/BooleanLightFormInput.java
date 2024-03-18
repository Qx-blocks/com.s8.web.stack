package com.s8.pkgs.ui.carbide.forms.light;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.functions.primitives.Bool8NeFunction;
import com.s8.api.web.lambdas.primitives.Bool8Lambda;
import com.s8.pkgs.ui.carbide.CarbideTheme;
import com.s8.pkgs.ui.carbide.icons.SVG_CarbideIcon;
import com.s8.pkgs.ui.carbide.messages.ictx.IconTextMessage;

/**
 * 
 * @author pierreconvert
 *
 */
public class BooleanLightFormInput extends PrimitiveLightFormInput {

	
	
	/**
	 * 
	 * @param branch
	 * @param name
	 * @param initialValue
	 * @param lambda
	 * @return
	 */
	public static BooleanLightFormInput create(S8WebFront branch, String name, boolean initialValue, Bool8Lambda lambda) {
		BooleanLightFormInput fieldView = new BooleanLightFormInput(branch);
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
	public static BooleanLightFormInput create(S8WebFront branch, String name, boolean initialValue, Bool8Lambda lambda, String doc) {
		BooleanLightFormInput fieldView = create(branch, name, initialValue, lambda);
		fieldView.setHelperMessages(IconTextMessage.create(branch, CarbideTheme.DEFAULT, SVG_CarbideIcon.checklist, doc));
		return fieldView;
	}
	
	
	/**
	 * 
	 * @param branch
	 */
	public BooleanLightFormInput(S8WebFront branch) {
		super(branch, LightFormWrapper.WEBPATH + "/BooleanLightFormInput");
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
