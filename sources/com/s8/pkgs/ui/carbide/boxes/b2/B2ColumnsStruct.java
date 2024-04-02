package com.s8.pkgs.ui.carbide.boxes.b2;

import com.s8.api.web.S8WebFront;
import com.s8.pkgs.ui.carbide.HTML_S8WebNode;


/**
 * 
 * @author pierreconvert
 *
 */
public class B2ColumnsStruct extends HTML_S8WebNode {
	
	
	
	public final static String JS_TYPENAME = "/B2ColumnsStruct";
	
	

	
	/**
	 * 
	 * @param front
	 */
	
	public B2ColumnsStruct(S8WebFront front) {
		super(front, B2Box.ROOT_WEBPATH + JS_TYPENAME);
	}
	
	


	/**
	 * Columns
	 * @param size
	 */
	public void setColumns(B2Column... columns) {
		vertex.outbound().setObjectListField("columns", columns);
	}
	
	
}
