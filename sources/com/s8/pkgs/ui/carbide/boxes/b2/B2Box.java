package com.s8.pkgs.ui.carbide.boxes.b2;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.S8WebObject;
import com.s8.pkgs.ui.carbide.HTML_S8WebNode;
import com.s8.pkgs.ui.carbide.WebSources;


/**
 * 
 * @author pierreconvert
 *
 */
public class B2Box extends HTML_S8WebNode {
	
	
	
	public final static String JS_TYPENAME = "/boxes/b2/B2Box";
	
	

	
	/**
	 * 
	 * @param front
	 */
	
	public B2Box(S8WebFront front) {
		super(front, WebSources.ROOT_WEBPATH + JS_TYPENAME);
	}
	
	


	/**
	 * 
	 * @param size
	 */
	public void setTitle(String title) {
		vertex.outbound().setStringUTF8Field("title", title);
	}
	
	
	/**
	 * 
	 * @param items
	 */
	public void setElements(S8WebObject... elements) {
		vertex.outbound().setObjectListField("elements", elements);
	}
	
	
	
}
