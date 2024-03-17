package com.s8.pkgs.ui.carbide.forms.light;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.functions.none.VoidNeFunction;
import com.s8.api.web.lambdas.none.VoidLambda;
import com.s8.pkgs.ui.carbide.HTML_S8WebNode;
import com.s8.pkgs.ui.carbide.icons.SVG_CarbideIcon;


/**
 * 
 * @author pierreconvert
 *
 */
public class LightFormOption extends HTML_S8WebNode {
	
	/**
	 * 
	 * @param branch
	 * @param name
	 * @param icon
	 * @param color
	 * @return
	 */
	public static LightFormOption createLambda(S8WebFront branch, String name, SVG_CarbideIcon icon, VoidLambda lambda) {
		LightFormOption objFormOption = new LightFormOption(branch);
		objFormOption.setName(name);
		objFormOption.setIconShape(icon);
		objFormOption.onClickLambda(lambda);
		return objFormOption;
	}
	
	
	public static LightFormOption createLambda(S8WebFront branch, String name, SVG_CarbideIcon icon, VoidNeFunction function) {
		LightFormOption objFormOption = new LightFormOption(branch);
		objFormOption.setName(name);
		objFormOption.setIconShape(icon);
		objFormOption.onClick(function);
		return objFormOption;
	}
	
	
	
	
	public LightFormOption(S8WebFront branch) {
		super(branch, LightFormWrapper.WEBPATH + "/ObjFormOption");
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
	
	


	public void setName(String name) {
		vertex.outbound().setStringUTF8Field("name", name);
	}


	
	/**
	 * 
	 * @param icon
	 */
	public void setIconShape(SVG_CarbideIcon icon){
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
