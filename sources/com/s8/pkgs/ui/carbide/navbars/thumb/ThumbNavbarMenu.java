package com.s8.pkgs.ui.carbide.navbars.thumb;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.S8WebObject;
import com.s8.api.web.functions.none.VoidNeFunction;
import com.s8.api.web.lambdas.none.VoidLambda;
import com.s8.pkgs.ui.carbide.CarbideWebSources;


/**
 * 
 * @author pierreconvert
 *
 */
public class ThumbNavbarMenu extends S8WebObject {


	
	public static ThumbNavbarMenu create(S8WebFront front, String image, String name) {
		ThumbNavbarMenu menu = new ThumbNavbarMenu(front);
		menu.setIcon(image);
		menu.setName(name);
		menu.onSelected(() -> {
			System.out.println("I'm selected");
		});
		return menu;
	}
	
	
	
	/**
	 * 
	 * @param front
	 */
	public ThumbNavbarMenu(S8WebFront front) {
		super(front, CarbideWebSources.ROOT_WEBPATH + "/navbars/thumb/ThumbNavbarMenu");
	}
	
	
	
	/**
	 * 
	 * @param menus
	 */
	public void setIcon(String imageURL) {
		vertex.outbound().setStringUTF8Field("imageURL", imageURL);
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
