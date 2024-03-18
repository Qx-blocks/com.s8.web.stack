package com.s8.pkgs.ui.carbide.forms.light;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.functions.primitives.Int32NeFunction;
import com.s8.api.web.lambdas.primitives.Int32Lambda;
import com.s8.pkgs.ui.carbide.CarbideTheme;
import com.s8.pkgs.ui.carbide.icons.SVG_CarbideIcon;
import com.s8.pkgs.ui.carbide.messages.ictx.IconTextMessage;


/**
 * 
 * @author pierreconvert
 *
 */
public class IntegerLightFormInput extends PrimitiveLightFormInput {
	
	
	/**
	 * 
	 * @param branch
	 * @param name
	 * @param initialValue
	 * @param lambda
	 * @return
	 */
	public static IntegerLightFormInput create(S8WebFront branch, String name, int initialValue, Int32Lambda lambda) {
		IntegerLightFormInput fieldView = new IntegerLightFormInput(branch);
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
	public static IntegerLightFormInput create(S8WebFront branch, String name, int initialValue, Int32Lambda lambda, String doc) {
		IntegerLightFormInput fieldView = create(branch, name, initialValue, lambda);
		fieldView.setHelperMessages(IconTextMessage.create(branch, CarbideTheme.DEFAULT, SVG_CarbideIcon.checklist, doc));
		return fieldView;
	}
	
	
	

	public IntegerLightFormInput(S8WebFront branch) {
		super(branch, LightFormWrapper.WEBPATH + "/IntegerLightFormInput");
	}
	
	
	public void setValue(int value) {
		vertex.outbound().setInt32Field("value", value);
	}
	

	
	public void onValueChanged(Int32NeFunction func) {
		vertex.inbound().setInt32Method("on-value-changed", func);
	}
	
	public void onValueChangedLambda(Int32Lambda lambda) {
		vertex.inbound().setInt32MethodLambda("on-value-changed", lambda);
	}
}
