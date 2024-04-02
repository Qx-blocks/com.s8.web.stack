package com.s8.pkgs.ui.carbide.boxes.b2;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.S8WebObject;
import com.s8.pkgs.ui.carbide.HTML_S8WebNode;


/**
 * 
 * @author pierreconvert
 *
 */
public class B2BoxHeader extends HTML_S8WebNode {
	
	
	
	public final static String JS_TYPENAME = "/B2BoxHeader";
	
	

	
	/**
	 * 
	 * @param front
	 */
	
	public B2BoxHeader(S8WebFront front) {
		super(front, B2Box.ROOT_WEBPATH + JS_TYPENAME);
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
