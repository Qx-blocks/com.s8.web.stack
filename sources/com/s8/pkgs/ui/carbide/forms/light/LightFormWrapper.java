package com.s8.pkgs.ui.carbide.forms.light;

import com.s8.api.web.S8WebFront;
import com.s8.pkgs.ui.carbide.WebSources;
import com.s8.pkgs.ui.carbide.HTML_S8WebNode;


/**
 * 
 * @author pierreconvert
 *
 */
public class LightFormWrapper extends HTML_S8WebNode {

	
	public final static String WEBPATH = WebSources.ROOT_WEBPATH + "/forms/light";
	
	
	/**
	 * 
	 */
	public LightFormWrapper(S8WebFront front) {
		super(front, WEBPATH + "/LightFormWrapper");
	}
	
	
	/**
	 * 
	 * @param element
	 */
	public void setRoot(LightFormElement element) {
		vertex.outbound().setObjectField("root", element);
	}
	
	
	
}
