package com.s8.pkgs.ui.carbide.pages.simple;

import java.util.List;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.S8WebObject;
import com.s8.pkgs.ui.carbide.WebSources;


/**
 * 
 */
public class SimplePage extends S8WebObject {
	
	
	/**
	 * 
	 */
	public final static String JS_TYPENAME = "/pages/simple/SimplePage";

	
	/**
	 * 
	 * @param front
	 */
	public SimplePage(S8WebFront front) {
		super(front, WebSources.ROOT_WEBPATH + JS_TYPENAME);
	}

	
	
	/**
	 * 
	 * @param menus
	 */
	public void setElements(List<S8WebObject> elements) {
		vertex.outbound().setObjectListField("elements", elements);
	}
	

	public void publish() {
		vertex.expose(0);
	}
}
