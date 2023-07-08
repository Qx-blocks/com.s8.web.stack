package com.s8.web.front.carbide.grid;

import java.util.ArrayList;
import java.util.List;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.io.bohr.neon.core.NeObject;
import com.s8.web.front.HTML_NeNode;
import com.s8.web.front.S8WebDirection;
import com.s8.web.front.S8WebSize;
import com.s8.web.front.S8WebTheme;
import com.s8.web.front.carbide.button.Button;
import com.s8.web.front.carbide.icons.S8FlatIcon;
import com.s8.web.front.carbide.navbar.Navbar;
import com.s8.web.front.carbide.navbar.NavbarMenu;
import com.s8.web.front.carbide.popover.Popover;
import com.s8.web.front.carbide.structure.InlineSpacer;
import com.s8.web.front.carbide.structure.InlineTextBox;
import com.s8.web.front.carbide.structure.Row;
import com.s8.web.front.carbide.textinput.TextInput;
import com.s8.web.front.carbide.title.H1Title;


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
			List<HTML_NeNode> elements =  new ArrayList<>();
			elements.add(H1Title.create(branch, "Repositroy"));
			
			Navbar navbar = new Navbar(branch);
			List<NavbarMenu> navbarMenus = new ArrayList<>();
			navbarMenus.add(new NavbarMenu(branch, S8FlatIcon.alert, "Actions"));
			navbarMenus.add(new NavbarMenu(branch, S8FlatIcon.lab, "Collaborators"));
			navbarMenus.add(new NavbarMenu(branch, S8FlatIcon.fork, "Branches"));
			navbarMenus.add(new NavbarMenu(branch, S8FlatIcon.forward, "Actions"));
			navbar.setMenus(navbarMenus);
			elements.add(navbar);
			
			
			elements.add(Row.create(branch, 
					InlineTextBox.create(branch, "Actions: "),
					InlineSpacer.create(branch, 10),
					Button.create(branch, "Launch", S8WebSize.INLINED, S8WebTheme.PRIMARY),
					InlineSpacer.create(branch, 20),
					Button.create(branch, "Cancel", S8WebSize.INLINED, S8WebTheme.DEFAULT)));
			elements.add(Row.create(branch, Button.create(branch, "Fork", S8WebSize.SMALL, S8WebTheme.DEFAULT)));
			
			Popover popover = Popover.create(branch, S8WebTheme.LIGHT, S8WebDirection.LEFT);
			popover.setElements(elements);
			
			vertex.setObjectField("popover", popover);
			
			
			List<HTML_NeNode> elements2 =  new ArrayList<>();
			elements2.add(H1Title.create(branch, "Repositroy"));
			
			Navbar navbar2 = new Navbar(branch);
			List<NavbarMenu> navbarMenus2 = new ArrayList<>();
			navbarMenus2.add(new NavbarMenu(branch, S8FlatIcon.alert, "Actions"));
			navbarMenus2.add(new NavbarMenu(branch, S8FlatIcon.lab, "Collaborators"));
			navbarMenus2.add(new NavbarMenu(branch, S8FlatIcon.fork, "Branches"));
			navbarMenus2.add(new NavbarMenu(branch, S8FlatIcon.forward, "Actions"));
			navbar2.setMenus(navbarMenus2);
			elements2.add(navbar2);
			
			
			elements2.add(Row.create(branch, 
					InlineTextBox.create(branch, "Actions: "),
					InlineSpacer.create(branch, 10),
					Button.create(branch, "Launch", S8WebSize.INLINED, S8WebTheme.PRIMARY),
					InlineSpacer.create(branch, 20),
					Button.create(branch, "Cancel", S8WebSize.INLINED, S8WebTheme.DEFAULT)));
			elements2.add(Row.create(branch, Button.create(branch, "Fork", S8WebSize.SMALL, S8WebTheme.DEFAULT)));
			
			elements2.add(Row.create(branch, 
					InlineTextBox.create(branch, "Actions: "),
					InlineSpacer.create(branch, 10),
					TextInput.create(branch, S8WebSize.INLINED, 12, "Add text here..."),
					InlineSpacer.create(branch, 10),
					Button.create(branch, "Cancel", S8WebSize.INLINED, S8WebTheme.DEFAULT)));
			
			
			
			Popover popover2 = Popover.create(branch, S8WebTheme.LIGHT, S8WebDirection.TOP);
			popover2.setElements(elements2);
			
			popover.setPopover(popover2);
			
			
			
			List<HTML_NeNode> elements3 =  new ArrayList<>();
			elements3.add(H1Title.create(branch, "Fork Repository"));
			
			
			
			
			elements2.add(Row.create(branch, Button.create(branch, "Fork", S8WebSize.SMALL, S8WebTheme.DEFAULT)));
			
			elements3.add(Row.create(branch, 
					InlineTextBox.create(branch, "New Branch name: "),
					InlineSpacer.create(branch, 10),
					TextInput.create(branch, S8WebSize.INLINED, 12, "Branch name..."),
					InlineSpacer.create(branch, 10),
					Button.create(branch, "Validate", S8WebSize.INLINED, S8WebTheme.DEFAULT)));
			
			elements3.add(Row.create(branch, 
					InlineSpacer.create(branch, 10),
					Button.create(branch, "Fork", S8WebSize.NORMAL, S8WebTheme.PRIMARY),
					InlineSpacer.create(branch, 20),
					Button.create(branch, "Cancel", S8WebSize.NORMAL, S8WebTheme.DEFAULT)));
			
			
			
			Popover popover3 = Popover.create(branch, S8WebTheme.LIGHT, S8WebDirection.TOP);
			popover3.setElements(elements3);
			
			popover2.setPopover(popover3);
			
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
	
	/**
	 * 
	 * @param name
	 */
	public void setPopover(Popover popover) {
		vertex.setObjectField("popover", popover);
	}
	
	
	
}
