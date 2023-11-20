package com.s8.pkgs.ui.carbide.grid;

import com.s8.api.objects.web.S8WebFrontObject;
import com.s8.api.objects.web.S8WebFront;
import com.s8.api.objects.web.functions.none.VoidNeFunction;
import com.s8.api.objects.web.lambdas.none.VoidLambda;
import com.s8.pkgs.ui.carbide.popover.Popover;


/**
 * 
 * @author pierreconvert
 *
 */
public class GridCard extends S8WebFrontObject {

	
	/**
	 * 
	 * @param branch
	 * @param typeName
	 */
	public GridCard(S8WebFront branch, String typeName) {
		super(branch, typeName);
	}

	

	/**
	 * 
	 * @param name
	 */
	public void setSelected(boolean isSelected) {
		vertex.fields().setBool8Field("isSelected", isSelected);
	}
	
	
	public void clearPopover() {
		vertex.fields().setObjectField("popover", null);
	}
	
	/**
	 * 
	 * @param name
	 */
	public void setPopover(Popover popover) {
		vertex.fields().setObjectField("popover", popover);
	}
	

	
	
	/**
	 * 
	 * @param func
	 */
	public void onClick(VoidNeFunction func) {
		vertex.methods().setVoidMethod("on-click", func);
	}
	
	

	/**
	 * 
	 * @param func
	 */
	public void onClickLambda(VoidLambda lambda) {
		vertex.methods().setVoidMethodLambda("on-click", lambda);
	}
	
	
}
