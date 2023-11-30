package com.s8.pkgs.ui.carbide.navbar;

import java.util.List;

import com.s8.api.web.S8WebFront;
import com.s8.pkgs.ui.carbide.Carbide;
import com.s8.pkgs.ui.carbide.HTML_NeNode;


/**
 * 
 * @author pierreconvert
 *
 */
public class Navbar extends HTML_NeNode {

	
	/**
	 * 
	 * @param branch
	 */
	public Navbar(S8WebFront branch) {
		super(branch, Carbide.ROOT_WEBPATH + "/navbar/Navbar");
	}
	

	
	/**
	 * 
	 * @param menus
	 */
	public void setSelectedIndex(int index) {
		vertex.fields().setUInt8Field("selectedIndex", index);
	}
	
	
	/**
	 * 
	 * @param menus
	 */
	public void setMenus(List<NavbarMenu> menus) {
		vertex.fields().setObjectListField("menus", menus);
	}
	
	
	
}
