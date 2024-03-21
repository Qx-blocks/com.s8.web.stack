package com.s8.pkgs.ui.carbide.structs.gs;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.S8WebObject;
import com.s8.pkgs.ui.carbide.CarbideWebSources;

/**
 * Github-style header
 */
public class GsBody extends S8WebObject {
	
	
	/**
	 * header
	 */
	public final static String JS_TYPENAME = "/structs/gs/GsBody";

	
	/**
	 * 
	 * @param front
	 */
	public GsBody(S8WebFront front) {
		super(front, CarbideWebSources.ROOT_WEBPATH + JS_TYPENAME);
	}

	
	
	/**
	 * 
	 * @param menus
	 */
	public void setElements(S8WebObject... elements) {
		vertex.outbound().setObjectListField("elements", elements);
	}
	

}
