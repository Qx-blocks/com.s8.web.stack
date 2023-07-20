package com.s8.web.front.carbide.structure;

import java.util.List;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.web.front.HTML_NeNode;

public class Div extends HTML_NeNode {
	
	/**
	 * 
	 * @param branch
	 * @param width
	 * @return
	 */
	public static Div create(NeBranch branch) {
		return new Div(branch);
	}

	
	/**
	 * 
	 * @param branch
	 */
	public Div(NeBranch branch) {
		super(branch, "/s8-web-front/carbide/structure/Div");
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
