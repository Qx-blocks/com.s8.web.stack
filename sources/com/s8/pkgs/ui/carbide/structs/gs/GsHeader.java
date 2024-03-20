package com.s8.pkgs.ui.carbide.structs.gs;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.S8WebObject;
import com.s8.pkgs.ui.carbide.WebSources;

/**
 * Github-style header
 */
public class GsHeader extends S8WebObject {
	
	
	/**
	 * header
	 */
	public final static String JS_TYPENAME = "/structs/gs/GsHeader";

	
	/**
	 * 
	 * @param front
	 */
	public GsHeader(S8WebFront front) {
		super(front, WebSources.ROOT_WEBPATH + JS_TYPENAME);
	}

	
	
	/**
	 * 
	 * @param menus
	 */
	public void setTopbar(S8WebObject element) {
		vertex.outbound().setObjectField("topbar", element);
	}
	
	/**
	 * 
	 * @param menus
	 */
	public void setNavbar(S8WebObject element) {
		vertex.outbound().setObjectField("navbar", element);
	}
	

}
