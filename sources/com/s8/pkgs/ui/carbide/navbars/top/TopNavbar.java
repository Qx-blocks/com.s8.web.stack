package com.s8.pkgs.ui.carbide.navbars.top;

import java.util.List;

import com.s8.api.web.S8WebFront;
import com.s8.pkgs.ui.carbide.WebSources;
import com.s8.pkgs.ui.carbide.HTML_NeNode;


/**
 * 
 * @author pierreconvert
 *
 */
public class TopNavbar extends HTML_NeNode {
	
	/**
	 * 
	 */
	public final static String JS_TYPENAME = "/navbars/top/TopNavbar";

	
	/**
	 * 
	 * @param front
	 */
	public TopNavbar(S8WebFront front) {
		super(front, WebSources.ROOT_WEBPATH + JS_TYPENAME);
	}
	

	
	/**
	 * 
	 * @param menus
	 */
	public void setSelectedIndex(int index) {
		vertex.outbound().setUInt8Field("selectedIndex", index);
	}
	
	
	/**
	 * 
	 * @param menus
	 */
	public void setMenus(List<TopNavbarMenu> menus) {
		vertex.outbound().setObjectListField("menus", menus);
	}
	
	
	
}
