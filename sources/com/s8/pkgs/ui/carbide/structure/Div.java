package com.s8.pkgs.ui.carbide.structure;

import java.util.List;

import com.s8.api.objects.web.WebS8Session;
import com.s8.pkgs.ui.carbide.Carbide;
import com.s8.pkgs.ui.carbide.HTML_NeNode;

public class Div extends HTML_NeNode {
	
	/**
	 * 
	 * @param branch
	 * @param width
	 * @return
	 */
	public static Div create(WebS8Session branch) {
		return new Div(branch);
	}

	
	/**
	 * 
	 * @param branch
	 */
	public Div(WebS8Session branch) {
		super(branch, Carbide.ROOT_WEBPATH + "/structure/Div");
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
