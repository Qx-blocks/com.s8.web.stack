package com.s8.pkgs.ui.carbide.boxes.paper;

import com.s8.api.web.S8WebFront;
import com.s8.pkgs.ui.carbide.CarbideWebSources;
import com.s8.pkgs.ui.carbide.HTML_S8WebNode;


/**
 * 
 * @author pierreconvert
 *
 */
public class PaperColumnsStruct extends HTML_S8WebNode {
	
	
	public final static String ROOT_WEBPATH = CarbideWebSources.ROOT_WEBPATH + "/boxes/paper";
	
	

	
	/**
	 * 
	 * @param front
	 */
	
	public PaperColumnsStruct(S8WebFront front) {
		super(front, ROOT_WEBPATH + "/PaperColumnsStruct");
	}
	
	


	/**
	 * Columns
	 * @param size
	 */
	public void setColumns(PaperColumn... columns) {
		vertex.outbound().setObjectListField("columns", columns);
	}
	
	
}
