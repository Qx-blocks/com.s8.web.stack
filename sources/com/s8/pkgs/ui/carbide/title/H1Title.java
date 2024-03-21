package com.s8.pkgs.ui.carbide.title;

import com.s8.api.web.S8WebFront;
import com.s8.pkgs.ui.carbide.CarbideWebSources;
import com.s8.pkgs.ui.carbide.HTML_S8WebNode;


/**
 * 
 * @author pierreconvert
 *
 */
public class H1Title extends HTML_S8WebNode {
	
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
		super(branch, CarbideWebSources.ROOT_WEBPATH + "/title/H1Title");
	}
	
	
	/**
	 * 
	 * @param name
	 */
	public void setText(String text) {
		vertex.outbound().setStringUTF8Field("text", text);
	}
}
