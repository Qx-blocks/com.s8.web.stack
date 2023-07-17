package com.s8.web.front.carbide.objform;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.io.bohr.neon.functions.none.VoidNeFunction;
import com.s8.io.bohr.neon.lambdas.none.VoidLambda;
import com.s8.web.front.carbide.icons.S8FlatIcon;


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
	public static ObjFormButton create(NeBranch branch, String label) {
		ObjFormButton objFormButton = new ObjFormButton(branch);
		objFormButton.setLabel(label);
		return objFormButton;
	}
	
	
	
	
	public ObjFormButton(NeBranch branch) {
		super(branch, "/s8-web-front/carbide/objform/ObjFormButton");
	}
	
	
	/**
	 * 
	 * @param lambda
	 */
	public void onClickLambda(VoidLambda lambda) {
		vertex.setVoidMethodLambda("on-click", lambda);
	}
	
	
	/**
	 * 
	 * @param lambda
	 */
	public void onClick(VoidNeFunction function) {
		vertex.setVoidMethod("on-click", function);
	}
	
	


	public void setLabel(String name) {
		vertex.setStringUTF8Field("label", name);
	}


	
	/**
	 * 
	 * @param icon
	 */
	public void setIconShape(S8FlatIcon icon){
		vertex.setUInt16Field("iconShapeByCode", icon.code);
	}

	/**
	 * 
	 * @param name
	 */
	public void setIconShapeByName(String name){
		vertex.setStringUTF8Field("iconShape", name);
	}

	
	/**
	 * 
	 * @param lambda
	 */
	public void onSyncLambda(VoidLambda lambda) {
		vertex.setVoidMethodLambda("on-sync", lambda);
	}
	
	
	/**
	 * 
	 * @param lambda
	 */
	public void onSync(VoidNeFunction function) {
		vertex.setVoidMethod("on-sync", function);
	}

	
	

}
