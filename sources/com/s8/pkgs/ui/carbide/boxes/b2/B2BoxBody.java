package com.s8.pkgs.ui.carbide.boxes.b2;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.S8WebObject;
import com.s8.pkgs.ui.carbide.HTML_S8WebNode;


/**
 * 
 * @author pierreconvert
 *
 */
public class B2BoxBody extends HTML_S8WebNode {
	
	
	public final static String JS_TYPENAME = "/B2BoxBody";
	
	

	
	/**
	 * 
	 * @param front
	 */
	
	public B2BoxBody(S8WebFront front) {
		super(front, B2Box.ROOT_WEBPATH + JS_TYPENAME);
	}
	
	
	
	/**
	 * 
	 * @param items
	 */
	public void setElements(S8WebObject... elements) {
		vertex.outbound().setObjectListField("elements", elements);
	}
	
	
	
}
