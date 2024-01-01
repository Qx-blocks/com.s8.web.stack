package com.s8.pkgs.ui.carbide.objform;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.S8WebFrontObject;
import com.s8.api.web.functions.none.VoidNeFunction;
import com.s8.api.web.lambdas.none.VoidLambda;
import com.s8.pkgs.ui.carbide.S8WebDirection;
import com.s8.pkgs.ui.carbide.S8WebTheme;
import com.s8.pkgs.ui.carbide.popover.Popover;



public class ObjFormElement extends S8WebFrontObject {

	
	/**
	 * 
	 * @param branch
	 * @param typeName
	 */
	public ObjFormElement(S8WebFront branch, String typeName) {
		super(branch, typeName);
		onOptionsRequiredLambda(() -> {});
	}
	

	
	/**
	 * 
	 * @param text
	 */
	public void setTooltipDoc(String text) {
		S8WebFront branch = vertex.getSession();
		Popover tooltip = new Popover(branch);
		tooltip.setTheme(S8WebTheme.LIGHT);
		tooltip.setDirection(S8WebDirection.BOTTOM);
		tooltip.setElements(ObjFormTextDoc.create(vertex.getSession(), text));
		vertex.outbound().setObjectField("tooltip", tooltip);
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
	public void setOptions(ObjFormOption... options) {
		vertex.outbound().setObjectListField("options", options);
	}
	
	
	
	
	

	
}
