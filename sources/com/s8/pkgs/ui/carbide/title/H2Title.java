package com.s8.pkgs.ui.carbide.title;

import com.s8.api.web.S8WebFront;
import com.s8.pkgs.ui.carbide.CarbideWebSources;
import com.s8.pkgs.ui.carbide.HTML_S8WebNode;


/**
 * 
 * @author pierreconvert
 *
 */
public class H2Title extends HTML_S8WebNode {
	
	/**
	 * 
	 * @param branch
	 * @param text
	 * @return
	 */
	public static H2Title create(S8WebFront branch, String text) {
		H2Title title = new H2Title(branch);
		title.setText(text);
		return title;
	}

	
	/**
	 * 
	 * @param branch
	 */
	public H2Title(S8WebFront branch) {
		super(branch, CarbideWebSources.ROOT_WEBPATH + "/title/H2Title");
	}
	
	
	/**
	 * 
	 * @param name
	 */
	public void setText(String text) {
		vertex.outbound().setStringUTF8Field("text", text);
	}
}
