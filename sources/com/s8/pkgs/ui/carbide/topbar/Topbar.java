package com.s8.pkgs.ui.carbide.topbar;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.S8WebObject;
import com.s8.pkgs.ui.carbide.WebSources;

/**
 * Github-style header
 */
public class Topbar extends S8WebObject {
	
	
	/**
	 * 
	 */
	public final static String JS_TYPENAME = "/topbar/Topbar";

	
	/**
	 * 
	 * @param front
	 */
	public Topbar(S8WebFront front) {
		super(front, WebSources.ROOT_WEBPATH + JS_TYPENAME);
	}

	
	
	/**
	 * 
	 * @param menus
	 */
	public void setLeftElements(S8WebObject... elements) {
		vertex.outbound().setObjectListField("leftElements", elements);
	}
	
	/**
	 * 
	 * @param menus
	 */
	public void setRightElements(S8WebObject... elements) {
		vertex.outbound().setObjectListField("rightElements", elements);
	}
	

}
