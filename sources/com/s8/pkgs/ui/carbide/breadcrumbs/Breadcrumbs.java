package com.s8.pkgs.ui.carbide.breadcrumbs;

import com.s8.api.web.S8WebFront;
import com.s8.pkgs.ui.carbide.CarbideSize;
import com.s8.pkgs.ui.carbide.HTML_S8WebNode;
import com.s8.pkgs.ui.carbide.CarbideWebSources;


/**
 * 
 * @author pierreconvert
 *
 */
public class Breadcrumbs extends HTML_S8WebNode {
	
	
	
	public final static String JS_TYPENAME = "/breadcrumbs/Breadcrumbs";
	
	

	
	/**
	 * 
	 * @param front
	 */
	
	public Breadcrumbs(S8WebFront front) {
		super(front, CarbideWebSources.ROOT_WEBPATH + JS_TYPENAME);
	}
	
	


	/**
	 * 
	 * @param size
	 */
	public void setSize(CarbideSize size) {
		vertex.outbound().setUInt8Field("size", size.code);
	}
	
	
	/**
	 * 
	 * @param items
	 */
	public void setItems(BreadcrumbsNode[] items) {
		vertex.outbound().setObjectListField("items", items);
	}
	
	
	
}
