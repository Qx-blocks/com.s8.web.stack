package com.s8.pkgs.ui.carbide.structure;

import java.util.List;

import com.s8.api.web.S8WebFront;
import com.s8.pkgs.ui.carbide.CarbideWebSources;
import com.s8.pkgs.ui.carbide.HTML_S8WebNode;

public class Div extends HTML_S8WebNode {
	
	/**
	 * 
	 * @param branch
	 * @param width
	 * @return
	 */
	public static Div create(S8WebFront branch) {
		return new Div(branch);
	}

	
	/**
	 * 
	 * @param branch
	 */
	public Div(S8WebFront branch) {
		super(branch, CarbideWebSources.ROOT_WEBPATH + "/structure/Div");
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
