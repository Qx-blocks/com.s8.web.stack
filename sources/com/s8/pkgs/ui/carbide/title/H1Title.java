package com.s8.pkgs.ui.carbide.title;

import com.s8.api.web.S8WebFront;
import com.s8.pkgs.ui.carbide.Carbide;
import com.s8.pkgs.ui.carbide.HTML_NeNode;


/**
 * 
 * @author pierreconvert
 *
 */
public class H1Title extends HTML_NeNode {
	
	public static H1Title create(S8WebFront branch, String text) {
		H1Title title = new H1Title(branch);
		title.setText(text);
		return title;
	}

	
	/**
	 * 
	 * @param branch
	 */
	public H1Title(S8WebFront branch) {
		super(branch, Carbide.ROOT_WEBPATH + "/title/H1Title");
	}
	
	
	/**
	 * 
	 * @param name
	 */
	public void setText(String text) {
		vertex.fields().setStringUTF8Field("text", text);
	}
}
