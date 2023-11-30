package com.s8.pkgs.ui.carbide.structure;

import java.util.List;

import com.s8.api.web.S8WebFront;
import com.s8.pkgs.ui.carbide.Carbide;
import com.s8.pkgs.ui.carbide.HTML_NeNode;


/**
 * 
 * @author pierreconvert
 *
 */
public class Row extends HTML_NeNode {
	
	public static Row create(S8WebFront branch, HTML_NeNode... nodes) {
		Row title = new Row(branch);
		title.setContent(nodes);
		return title;
	}

	
	/**
	 * 
	 * @param branch
	 */
	public Row(S8WebFront branch) {
		super(branch, Carbide.ROOT_WEBPATH + "/structure/Row");
	}
	
	
	/**
	 * 
	 * @param name
	 */
	public void setContent(List<HTML_NeNode> nodes) {
		vertex.fields().setObjectListField("content", nodes);
	}
	
	/**
	 * 
	 * @param nodes
	 */
	public void setContent(HTML_NeNode... nodes) {
		vertex.fields().setObjectListField("content", nodes);
	}
}
