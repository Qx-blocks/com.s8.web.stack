package com.s8.web.front.carbide.structure;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.web.front.HTML_NeNode;


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
	public static InlineSpacer create(NeBranch branch, double width) {
		InlineSpacer title = new InlineSpacer(branch);
		title.setWidth(width);
		return title;
	}

	
	/**
	 * 
	 * @param branch
	 */
	public InlineSpacer(NeBranch branch) {
		super(branch, "/s8-web-front/carbide/structure/InlineSpacer");
	}
	
	
	/**
	 * 
	 * @param name
	 */
	public void setWidth(double width) {
		vertex.setFloat32Field("width", (float) width);
	}
	
}
