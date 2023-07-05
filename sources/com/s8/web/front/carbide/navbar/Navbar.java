package com.s8.web.front.carbide.navbar;

import java.util.List;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.web.front.NeNode;


/**
 * 
 * @author pierreconvert
 *
 */
public class Navbar extends NeNode {

	
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
	public void setMenus(List<NavbarMenu> menus) {
		vertex.setObjectListField("menus", menus);
	}
	
	
	
}
