package com.s8.web.front.carbide.navbar;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.io.bohr.neon.core.NeObject;
import com.s8.web.front.carbide.icons.S8FlatIcon;


/**
 * 
 * @author pierreconvert
 *
 */
public class NavbarMenu extends NeObject {

	
	/**
	 * 
	 * @param branch
	 */
	public NavbarMenu(NeBranch branch) {
		super(branch, "/s8-web-front/carbide/navbar/NavbarMenu");
	}
	
	
	public NavbarMenu(NeBranch branch, S8FlatIcon icon, String name) {
		super(branch, "/s8-web-front/carbide/navbar/NavbarMenu");
		setIcon(icon);
		setName(name);
	}
	
	
	/**
	 * 
	 * @param menus
	 */
	public void setIcon(S8FlatIcon icon) {
		vertex.setUInt16Field("icon", icon.code);
	}
	
	
	/**
	 * 
	 * @param name
	 */
	public void setName(String name) {
		vertex.setStringUTF8Field("name", name);
	}
	
	
}
