package com.s8.pkgs.ui.carbide.structure;

import com.s8.api.web.S8WebFront;
import com.s8.pkgs.ui.carbide.WebSources;
import com.s8.pkgs.ui.carbide.HTML_NeNode;


/**
 * 
 * @author pierreconvert
 *
 */
public class InlineSpacer extends HTML_NeNode {
	
	/**
	 * 
	 * @param branch
	 * @param width
	 * @return
	 */
	public static InlineSpacer create(S8WebFront branch, double width) {
		InlineSpacer title = new InlineSpacer(branch);
		title.setWidth(width);
		return title;
	}

	
	/**
	 * 
	 * @param branch
	 */
	public InlineSpacer(S8WebFront branch) {
		super(branch, WebSources.ROOT_WEBPATH + "/structure/InlineSpacer");
	}
	
	
	/**
	 * 
	 * @param name
	 */
	public void setWidth(double width) {
		vertex.outbound().setFloat32Field("width", (float) width);
	}
	
}
