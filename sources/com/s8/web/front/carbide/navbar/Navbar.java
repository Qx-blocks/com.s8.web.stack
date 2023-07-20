package com.s8.web.front.carbide.navbar;

import java.util.List;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.web.front.HTML_NeNode;


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
	public Navbar(NeBranch branch) {
		super(branch, "/s8-web-front/carbide/navbar/Navbar");
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
