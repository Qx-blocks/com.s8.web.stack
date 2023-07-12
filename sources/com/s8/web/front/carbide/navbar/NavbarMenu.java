package com.s8.web.front.carbide.navbar;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.io.bohr.neon.core.NeObject;
import com.s8.io.bohr.neon.functions.none.VoidNeFunction;
import com.s8.io.bohr.neon.lambdas.none.VoidLambda;
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
		onSelected(() -> {
			System.out.println("I'm selected");
		});
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
	
	
	
	public void onSelected(VoidLambda lambda) {
		vertex.setVoidMethodLambda("on-selected", lambda);
	}
	
	
	/**
	 * 
	 * @param function
	 */
	public void onSelectedMethod(VoidNeFunction function) {
		vertex.setVoidMethod("on-selected", function);
	}
	
}
