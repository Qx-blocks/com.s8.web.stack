package com.s8.pkgs.ui.carbide.title;

import com.s8.api.objects.web.WebS8Session;
import com.s8.pkgs.ui.carbide.Carbide;
import com.s8.pkgs.ui.carbide.HTML_NeNode;


/**
 * 
 * @author pierreconvert
 *
 */
public class H2Title extends HTML_NeNode {
	
	/**
	 * 
	 * @param branch
	 * @param text
	 * @return
	 */
	public static H2Title create(WebS8Session branch, String text) {
		H2Title title = new H2Title(branch);
		title.setText(text);
		return title;
	}

	
	/**
	 * 
	 * @param branch
	 */
	public H2Title(WebS8Session branch) {
		super(branch, Carbide.ROOT_WEBPATH + "/title/H2Title");
	}
	
	
	/**
	 * 
	 * @param name
	 */
	public void setText(String text) {
		vertex.fields().setStringUTF8Field("text", text);
	}
}
