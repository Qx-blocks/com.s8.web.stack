package com.s8.web.front.carbide.grid;

import java.util.ArrayList;
import java.util.List;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.io.bohr.neon.core.NeObject;
import com.s8.web.front.NeNode;
import com.s8.web.front.carbide.icons.S8FlatIcon;
import com.s8.web.front.carbide.navbar.Navbar;
import com.s8.web.front.carbide.navbar.NavbarMenu;
import com.s8.web.front.carbide.popover.PopoverTitle;


/**
 * 
 * 
 * 
 * @author pierreconvert
 *
 */
public class GridCard extends NeObject {

	
	/**
	 * 
	 * @param branch
	 */
	public GridCard(NeBranch branch) {
		super(branch, "/s8-web-front/carbide/grid/GridCard");
		
		vertex.setVoidMethodLambda("on-click", () -> {
			List<NeNode> elements =  new ArrayList<>();
			elements.add(new PopoverTitle(branch, "Repositroy"));
			
			Navbar navbar = new Navbar(branch);
			List<NavbarMenu> navbarMenus = new ArrayList<>();
			navbarMenus.add(new NavbarMenu(branch, S8FlatIcon.alert, "Actions"));
			navbarMenus.add(new NavbarMenu(branch, S8FlatIcon.lab, "Collaborators"));
			navbarMenus.add(new NavbarMenu(branch, S8FlatIcon.fork, "Branches"));
			navbarMenus.add(new NavbarMenu(branch, S8FlatIcon.forward, "Actions"));
			navbar.setMenus(navbarMenus);
			elements.add(navbar);
			
			elements.add(new PopoverTitle(branch, "Repositroy"));
			
			
			vertex.setObjectListField("popoverContent", elements);
		});
	}
	
	
	/**
	 * 
	 * @param name
	 */
	public void setTitle(String name) {
		vertex.setStringUTF8Field("title", name);
	}
	
	/**
	 * 
	 * @param name
	 */
	public void setInfo(String name) {
		vertex.setStringUTF8Field("info", name);
	}
	
	
	
}
