package com.s8.pkgs.ui.carbide.breadcrumbs;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.S8WebObject;
import com.s8.pkgs.ui.carbide.CarbideWebSources;
import com.s8.pkgs.ui.carbide.icons.SVG_CarbideIcon;


/**
 * 
 * @author pierreconvert
 *
 */
public class BreadcrumbsNode extends S8WebObject {
	
	
	public static BreadcrumbsNode create(S8WebFront front, SVG_CarbideIcon icon, String text) {
		BreadcrumbsNode node = new BreadcrumbsNode(front);
		node.setIcon(icon);
		node.setText(text);
		return node;
	}
	
	
	
	public final static String JS_TYPENAME = "/breadcrumbs/BreadcrumbsNode";
	
	/**
	 * 
	 * @param front
	 */
	public BreadcrumbsNode(S8WebFront front) {
		super(front, CarbideWebSources.ROOT_WEBPATH + JS_TYPENAME);
	}
	
	
	
	
	
	/**
	 * 
	 * @param items
	 */
	public void setIcon(SVG_CarbideIcon icon) {
		vertex.outbound().setUInt16Field("icon", icon.code);
	}
	
	
	/**
	 * 
	 * @param items
	 */
	public void setText(String text) {
		vertex.outbound().setStringUTF8Field("text", text);
	}
	
	
}
