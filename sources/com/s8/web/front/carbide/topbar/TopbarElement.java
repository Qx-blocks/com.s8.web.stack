package com.s8.web.front.carbide.topbar;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.io.bohr.neon.core.NeObject;
import com.s8.io.bohr.neon.functions.none.VoidNeFunction;
import com.s8.io.bohr.neon.lambdas.none.VoidLambda;
import com.s8.web.front.carbide.popover.Popover;


/**
 * 
 * @author pierreconvert
 *
 */
public class TopbarElement extends NeObject {

	
	/**
	 * 
	 * @param branch
	 */
	public TopbarElement(NeBranch branch) {
		super(branch, "/s8-web-front/carbide/topbar/TopbarElement");
	}
	
	
	public TopbarElement(NeBranch branch, String name) {
		super(branch, "/s8-web-front/carbide/topbar/TopbarElement");
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
