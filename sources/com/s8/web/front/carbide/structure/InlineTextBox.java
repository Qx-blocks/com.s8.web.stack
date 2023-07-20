package com.s8.web.front.carbide.structure;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.web.front.HTML_NeNode;


/**
 * 
 * @author pierreconvert
 *
 */
public class InlineTextBox extends HTML_NeNode {
	
	/**
	 * 
	 * @param branch
	 * @param width
	 * @return
	 */
	public static InlineTextBox create(NeBranch branch, String text) {
		InlineTextBox title = new InlineTextBox(branch);
		title.setText(text);
		return title;
	}

	
	/**
	 * 
	 * @param branch
	 */
	public InlineTextBox(NeBranch branch) {
		super(branch, "/s8-web-front/carbide/structure/InlineTextBox");
	}
	
	
	/**
	 * 
	 * @param name
	 */
	public void setText(String text) {
		vertex.fields().setStringUTF8Field("text", text);
	}
	
}
