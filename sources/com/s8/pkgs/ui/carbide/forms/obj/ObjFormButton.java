package com.s8.pkgs.ui.carbide.forms.obj;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.functions.none.VoidNeFunction;
import com.s8.api.web.lambdas.none.VoidLambda;
import com.s8.pkgs.ui.carbide.icons.SVG_CarbonIcon;


/**
 * 
 * @author pierreconvert
 *
 */
public class ObjFormButton extends ObjFormElement {
	
	/**
	 * 
	 * @param branch
	 * @param label
	 * @param icon
	 * @param color
	 * @return
	 */
	public static ObjFormButton create(S8WebFront branch, String label) {
		ObjFormButton objFormButton = new ObjFormButton(branch);
		objFormButton.setLabel(label);
		return objFormButton;
	}
	
	
	
	
	public ObjFormButton(S8WebFront branch) {
		super(branch, ObjFormWrapper.OBJFORM_WEBPATH + "/ObjFormButton");
	}
	
	
	/**
	 * 
	 * @param lambda
	 */
	public void onClickLambda(VoidLambda lambda) {
		vertex.inbound().setVoidMethodLambda("on-click", lambda);
	}
	
	
	/**
	 * 
	 * @param lambda
	 */
	public void onClick(VoidNeFunction function) {
		vertex.inbound().setVoidMethod("on-click", function);
	}
	
	


	public void setLabel(String name) {
		vertex.outbound().setStringUTF8Field("label", name);
	}


	
	/**
	 * 
	 * @param icon
	 */
	public void setIconShape(SVG_CarbonIcon icon){
		vertex.outbound().setUInt16Field("iconShapeByCode", icon.code);
	}

	/**
	 * 
	 * @param name
	 */
	public void setIconShapeByName(String name){
		vertex.outbound().setStringUTF8Field("iconShape", name);
	}

	
	/**
	 * 
	 * @param lambda
	 */
	public void onSyncLambda(VoidLambda lambda) {
		vertex.inbound().setVoidMethodLambda("on-sync", lambda);
	}
	
	
	/**
	 * 
	 * @param lambda
	 */
	public void onSync(VoidNeFunction function) {
		vertex.inbound().setVoidMethod("on-sync", function);
	}

	
	

}
