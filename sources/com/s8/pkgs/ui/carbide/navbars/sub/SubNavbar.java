package com.s8.pkgs.ui.carbide.navbars.sub;

import java.util.List;

import com.s8.api.web.S8WebFront;
import com.s8.pkgs.ui.carbide.WebSources;
import com.s8.pkgs.ui.carbide.HTML_NeNode;


/**
 * 
 * @author pierreconvert
 *
 */
public class SubNavbar extends HTML_NeNode {
	
	public final static String JS_TYPENAME = "/navbars/sub/SubNavbar";

	
	/**
	 * 
	 * @param front
	 */
	public SubNavbar(S8WebFront front) {
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
	public void setMenus(List<SubNavbarMenu> menus) {
		vertex.outbound().setObjectListField("menus", menus);
	}
	
	
	
}
