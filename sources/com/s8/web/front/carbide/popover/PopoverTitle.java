package com.s8.web.front.carbide.popover;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.web.front.NeNode;


/**
 * 
 * @author pierreconvert
 *
 */
public class PopoverTitle extends NeNode {

	
	/**
	 * 
	 * @param branch
	 * @param text
	 */
	public PopoverTitle(NeBranch branch, String text) {
		super(branch, "/s8-web-front/carbide/popover/PopoverTitle");
		vertex.setStringUTF8Field("text", text);
	}

	

}
