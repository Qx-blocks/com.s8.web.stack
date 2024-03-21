package com.s8.pkgs.ui.carbide.structs.columns;

import com.s8.api.web.S8WebFront;
import com.s8.pkgs.ui.carbide.HTML_S8WebNode;
import com.s8.pkgs.ui.carbide.CarbideWebSources;


/**
 * 
 * @author pierreconvert
 *
 */
public class ColumnsStruct extends HTML_S8WebNode {
	
	
	
	public final static String JS_TYPENAME = "/structs/columns/ColumnsStruct";
	
	

	
	/**
	 * 
	 * @param front
	 */
	
	public ColumnsStruct(S8WebFront front) {
		super(front, CarbideWebSources.ROOT_WEBPATH + JS_TYPENAME);
	}
	
	


	/**
	 * Columns
	 * @param size
	 */
	public void setColumns(Column... columns) {
		vertex.outbound().setObjectListField("columns", columns);
	}
	
	
}
