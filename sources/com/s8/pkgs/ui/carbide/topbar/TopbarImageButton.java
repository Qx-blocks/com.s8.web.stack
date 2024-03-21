package com.s8.pkgs.ui.carbide.topbar;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.S8WebObject;
import com.s8.pkgs.ui.carbide.CarbideWebSources;

/**
 * 
 */
public class TopbarImageButton extends S8WebObject {

	
	/**
	 * 
	 */
	public final static String JS_TYPENAME = "/topbar/TopbarImageButton";

	
	/**
	 * 
	 * @param front
	 */
	public TopbarImageButton(S8WebFront front) {
		super(front, CarbideWebSources.ROOT_WEBPATH + JS_TYPENAME);
	}
	
	public void setImageURL(String url) {
		vertex.outbound().setStringUTF8Field("imageURL", url);
	}
	
}
