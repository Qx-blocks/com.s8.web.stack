package com.s8.pkgs.ui.carbide.forms.light;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.S8WebObject;
import com.s8.api.web.functions.none.VoidNeFunction;
import com.s8.api.web.lambdas.none.VoidLambda;
import com.s8.pkgs.ui.carbide.CarbideDirection;
import com.s8.pkgs.ui.carbide.messages.ictx.IconTextMessage;



public class LightFormElement extends S8WebObject {

	
	/**
	 * 
	 * @param branch
	 * @param typeName
	 */
	public LightFormElement(S8WebFront branch, String typeName) {
		super(branch, typeName);
		onOptionsRequiredLambda(() -> {});
	}
	
	
	
	public void setStatus(LightFormStatus status) {
		vertex.outbound().setUInt8Field("status", status.code);
	}

	

	
	
	public void setOptionsAvailability(boolean isAvailable) {
		vertex.outbound().setBool8Field("hasOptions", isAvailable);
	}
	
	
	/**
	 * 
	 * @param lambda
	 */
	public void onOptionsRequiredLambda(VoidLambda lambda) {
		vertex.inbound().setVoidMethodLambda("on-options-required", lambda);
	}
	
	
	/**
	 * 
	 * @param lambda
	 */
	public void onOptionsRequired(VoidNeFunction function) {
		vertex.inbound().setVoidMethod("on-options-required", function);
	}
	
	
	/**
	 * 
	 * @param options
	 */
	public void setOptions(LightFormOption... options) {
		vertex.outbound().setObjectListField("options", options);
	}
	
	

	public void setHelperMessages(IconTextMessage... messages) {
		vertex.outbound().setObjectListField("helperMessages", messages);
	}
	
	

	/**
	 * 
	 * @param direction
	 */
	public void setHelperPopoverDirection(CarbideDirection direction) {
		vertex.outbound().setUInt8Field("helperPopoverDirection", direction.code);
	}
	
	

	
}
