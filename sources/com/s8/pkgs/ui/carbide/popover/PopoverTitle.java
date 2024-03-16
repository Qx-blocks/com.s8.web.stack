package com.s8.pkgs.ui.carbide.popover;

import com.s8.api.web.S8WebFront;
import com.s8.pkgs.ui.carbide.WebSources;
import com.s8.pkgs.ui.carbide.HTML_S8WebNode;


/**
 * 
 * @author pierreconvert
 *
 */
public class PopoverTitle extends HTML_S8WebNode {

	
	/**
	 * 
	 * @param branch
	 * @param text
	 */
	public PopoverTitle(S8WebFront branch, String text) {
		super(branch, WebSources.ROOT_WEBPATH + "/popover/PopoverTitle");
		vertex.outbound().setStringUTF8Field("text", text);
	}

	

}
