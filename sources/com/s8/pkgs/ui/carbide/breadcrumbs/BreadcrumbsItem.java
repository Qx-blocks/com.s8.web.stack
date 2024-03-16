package com.s8.pkgs.ui.carbide.breadcrumbs;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.S8WebObject;
import com.s8.pkgs.ui.carbide.WebSources;


/**
 * 
 * @author pierreconvert
 *
 */
public class BreadcrumbsItem extends S8WebObject {

	
	public final static String JS_TYPENAME = "/breadcrumbs/BreadcrumbsItem";
	
	/**
	 * 
	 * @param branch
	 */
	public BreadcrumbsItem(S8WebFront branch) {
		super(branch, WebSources.ROOT_WEBPATH + JS_TYPENAME);
	}
	
	
	public BreadcrumbsItem(S8WebFront branch, String content) {
		super(branch, WebSources.ROOT_WEBPATH + JS_TYPENAME);
		setContent(content);
	}
	
	
	
	/**
	 * 
	 * @param name
	 */
	public void setContent(String content) {
		vertex.outbound().setStringUTF8Field("content", content);
	}
	
	
}
