package com.s8.pkgs.ui.carbide.forms.obj;

import com.s8.api.web.S8WebFront;
import com.s8.pkgs.ui.carbide.WebSources;
import com.s8.pkgs.ui.carbide.HTML_S8WebNode;


/**
 * 
 * @author pierreconvert
 *
 */
public class ObjFormWrapper extends HTML_S8WebNode {

	
	public final static String WEBPATH = WebSources.ROOT_WEBPATH + "/forms/obj";
	
	
	/**
	 * 
	 */
	public ObjFormWrapper(S8WebFront branch) {
		super(branch, WEBPATH + "/ObjFormWrapper");
	}
	
	
	/**
	 * 
	 * @param element
	 */
	public void setRoot(ObjFormElement element) {
		vertex.outbound().setObjectField("root", element);
	}
	
	
	
}
