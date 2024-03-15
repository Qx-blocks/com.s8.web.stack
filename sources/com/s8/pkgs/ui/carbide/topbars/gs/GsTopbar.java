package com.s8.pkgs.ui.carbide.topbars.gs;

import java.util.List;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.S8WebObject;
import com.s8.pkgs.ui.carbide.WebSources;

/**
 * Github-style header
 */
public class GsTopbar extends S8WebObject {
	
	
	/**
	 * 
	 */
	public final static String JS_TYPENAME = "/headers/gs/GsHeader";

	
	/**
	 * 
	 * @param front
	 */
	public GsTopbar(S8WebFront front) {
		super(front, WebSources.ROOT_WEBPATH + JS_TYPENAME);
	}

	
	
	/**
	 * 
	 * @param menus
	 */
	public void setTopbar(List<S8WebObject> elements) {
		vertex.outbound().setObjectListField("elements", elements);
	}
	

}
