package com.s8.web.front.carbide.structure;

import java.util.List;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.web.front.HTML_NeNode;


/**
 * 
 * @author pierreconvert
 *
 */
public class Row extends HTML_NeNode {
	
	public static Row create(NeBranch branch, HTML_NeNode... nodes) {
		Row title = new Row(branch);
		title.setContent(nodes);
		return title;
	}

	
	/**
	 * 
	 * @param branch
	 */
	public Row(NeBranch branch) {
		super(branch, "/s8-web-front/carbide/structure/Row");
	}
	
	
	/**
	 * 
	 * @param name
	 */
	public void setContent(List<HTML_NeNode> nodes) {
		vertex.setObjectListField("content", nodes);
	}
	
	/**
	 * 
	 * @param nodes
	 */
	public void setContent(HTML_NeNode... nodes) {
		vertex.setObjectListField("content", nodes);
	}
}
