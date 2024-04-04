package com.s8.pkgs.ui.carbide.navbars.thumb;

import java.util.List;

import com.s8.api.web.S8WebFront;
import com.s8.pkgs.ui.carbide.CarbideWebSources;
import com.s8.pkgs.ui.carbide.CarbideSize;
import com.s8.pkgs.ui.carbide.HTML_S8WebNode;


/**
 * 
 * @author pierreconvert
 *
 */
public class ThumbNavbar extends HTML_S8WebNode {
	
	

	public static ThumbNavbar create(S8WebFront front, CarbideSize size){
		ThumbNavbar navbar = new ThumbNavbar(front);
		navbar.setSize(size);
		return navbar;
	}
	
	
	
	/**
	 * 
	 * @param front
	 */
	
	public ThumbNavbar(S8WebFront front) {
		super(front, CarbideWebSources.ROOT_WEBPATH + "/navbars/thumb/ThumbNavbar");
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
	 * @param menus
	 */
	public void setSelectedIndex(int index) {
		vertex.outbound().setUInt8Field("selectedIndex", index);
	}
	
	
	/**
	 * 
	 * @param menus
	 */
	public void setMenus(List<ThumbNavbarMenu> menus) {
		vertex.outbound().setObjectListField("menus", menus);
	}
	
	/**
	 * 
	 * @param menus
	 */
	public void setMenus(ThumbNavbarMenu... menus) {
		vertex.outbound().setObjectListField("menus", menus);
	}
	
	
	
}
