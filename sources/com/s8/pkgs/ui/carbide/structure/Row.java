package com.s8.pkgs.ui.carbide.structure;

import java.util.List;

import com.s8.api.web.S8WebFront;
import com.s8.pkgs.ui.carbide.WebSources;
import com.s8.pkgs.ui.carbide.HTML_S8WebNode;


/**
 * 
 * @author pierreconvert
 *
 */
public class Row extends HTML_S8WebNode {
	
	public static Row create(S8WebFront branch, HTML_S8WebNode... nodes) {
		Row title = new Row(branch);
		title.setContent(nodes);
		return title;
	}

	
	/**
	 * 
	 * @param branch
	 */
	public Row(S8WebFront branch) {
		super(branch, WebSources.ROOT_WEBPATH + "/structure/Row");
	}
	
	
	/**
	 * 
	 * @param name
	 */
	public void setContent(List<HTML_S8WebNode> nodes) {
		vertex.outbound().setObjectListField("content", nodes);
	}
	
	/**
	 * 
	 * @param nodes
	 */
	public void setContent(HTML_S8WebNode... nodes) {
		vertex.outbound().setObjectListField("content", nodes);
	}
}
