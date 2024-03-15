package com.s8.pkgs.ui.carbide.navbars.sub;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.S8WebFrontObject;
import com.s8.api.web.functions.none.VoidNeFunction;
import com.s8.api.web.lambdas.none.VoidLambda;
import com.s8.pkgs.ui.carbide.WebSources;
import com.s8.pkgs.ui.carbide.icons.S8FlatIcon;


/**
 * 
 * @author pierreconvert
 *
 */
public class SubNavbarMenu extends S8WebFrontObject {

	
	public final static String JS_TYPENAME = "/navbars/sub/SubNavbarMenu";
	
	/**
	 * 
	 * @param branch
	 */
	public SubNavbarMenu(S8WebFront branch) {
		super(branch, WebSources.ROOT_WEBPATH + JS_TYPENAME);
	}
	
	
	public SubNavbarMenu(S8WebFront branch, S8FlatIcon icon, String name) {
		super(branch, WebSources.ROOT_WEBPATH + JS_TYPENAME);
		setIcon(icon);
		setName(name);
		onSelected(() -> {
			System.out.println("I'm selected");
		});
	}
	
	
	/**
	 * 
	 * @param menus
	 */
	public void setIcon(S8FlatIcon icon) {
		vertex.outbound().setUInt16Field("icon", icon.code);
	}
	
	
	/**
	 * 
	 * @param name
	 */
	public void setName(String name) {
		vertex.outbound().setStringUTF8Field("name", name);
	}
	
	
	
	public void onSelected(VoidLambda lambda) {
		vertex.inbound().setVoidMethodLambda("on-selected", lambda);
	}
	
	
	/**
	 * 
	 * @param function
	 */
	public void onSelectedMethod(VoidNeFunction function) {
		vertex.inbound().setVoidMethod("on-selected", function);
	}
	
}
