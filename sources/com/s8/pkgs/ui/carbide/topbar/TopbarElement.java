package com.s8.pkgs.ui.carbide.topbar;

import com.s8.api.objects.web.S8WebFrontObject;
import com.s8.api.objects.web.S8WebFront;
import com.s8.api.objects.web.functions.none.VoidNeFunction;
import com.s8.api.objects.web.lambdas.none.VoidLambda;
import com.s8.pkgs.ui.carbide.Carbide;
import com.s8.pkgs.ui.carbide.popover.Popover;


/**
 * 
 * @author pierreconvert
 *
 */
public class TopbarElement extends S8WebFrontObject {

	
	/**
	 * 
	 * @param branch
	 */
	public TopbarElement(S8WebFront branch) {
		super(branch, Carbide.ROOT_WEBPATH + "/topbar/TopbarElement");
	}
	
	
	public TopbarElement(S8WebFront branch, String name) {
		super(branch, Carbide.ROOT_WEBPATH +  "/topbar/TopbarElement");
		setName(name);
		onSelected(() -> { });
		onDeselected(() -> { });
	}
	
	
	/**
	 * 
	 * @param name
	 */
	public void setName(String name) {
		vertex.fields().setStringUTF8Field("name", name);
	}
	
	
	
	/**
	 * 
	 * @param popover
	 */
	public void setPopover(Popover popover) {
		vertex.fields().setObjectField("popover", popover);
	}
	
	
	/**
	 * 
	 */
	public void clearPopover() {
		vertex.fields().setObjectField("popover", null);
	}
	
	
	
	public void onSelected(VoidLambda lambda) {
		vertex.methods().setVoidMethodLambda("on-selected", lambda);
	}
	
	public void onDeselected(VoidLambda lambda) {
		vertex.methods().setVoidMethodLambda("on-deselected", lambda);
	}
	
	
	/**
	 * 
	 * @param function
	 */
	public void onSelectedMethod(VoidNeFunction function) {
		vertex.methods().setVoidMethod("on-selected", function);
	}
	
}
