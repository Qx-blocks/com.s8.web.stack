package com.s8.pkgs.ui.carbide.objform;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.functions.none.VoidNeFunction;
import com.s8.api.web.lambdas.none.VoidLambda;
import com.s8.pkgs.ui.carbide.WebSources;
import com.s8.pkgs.ui.carbide.HTML_NeNode;
import com.s8.pkgs.ui.carbide.icons.S8FlatIcon;


/**
 * 
 * @author pierreconvert
 *
 */
public class ObjFormOption extends HTML_NeNode {
	
	/**
	 * 
	 * @param branch
	 * @param name
	 * @param icon
	 * @param color
	 * @return
	 */
	public static ObjFormOption createLambda(S8WebFront branch, String name, S8FlatIcon icon, VoidLambda lambda) {
		ObjFormOption objFormOption = new ObjFormOption(branch);
		objFormOption.setName(name);
		objFormOption.setIconShape(icon);
		objFormOption.onClickLambda(lambda);
		return objFormOption;
	}
	
	
	public static ObjFormOption createLambda(S8WebFront branch, String name, S8FlatIcon icon, VoidNeFunction function) {
		ObjFormOption objFormOption = new ObjFormOption(branch);
		objFormOption.setName(name);
		objFormOption.setIconShape(icon);
		objFormOption.onClick(function);
		return objFormOption;
	}
	
	
	
	
	public ObjFormOption(S8WebFront branch) {
		super(branch, WebSources.ROOT_WEBPATH + "/objform/ObjFormOption");
	}
	
	
	/**
	 * 
	 * @param lambda
	 */
	public void onClickLambda(VoidLambda lambda) {
		vertex.methods().setVoidMethodLambda("on-click", lambda);
	}
	
	
	/**
	 * 
	 * @param lambda
	 */
	public void onClick(VoidNeFunction function) {
		vertex.methods().setVoidMethod("on-click", function);
	}
	
	


	public void setName(String name) {
		vertex.fields().setStringUTF8Field("name", name);
	}


	
	/**
	 * 
	 * @param icon
	 */
	public void setIconShape(S8FlatIcon icon){
		vertex.fields().setUInt16Field("iconShapeByCode", icon.code);
	}

	/**
	 * 
	 * @param name
	 */
	public void setIconShapeByName(String name){
		vertex.fields().setStringUTF8Field("iconShape", name);
	}

	
	/**
	 * 
	 * @param lambda
	 */
	public void onSyncLambda(VoidLambda lambda) {
		vertex.methods().setVoidMethodLambda("on-sync", lambda);
	}
	
	
	/**
	 * 
	 * @param lambda
	 */
	public void onSync(VoidNeFunction function) {
		vertex.methods().setVoidMethod("on-sync", function);
	}

	
	

}
