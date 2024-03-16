package com.s8.pkgs.ui.carbide.navbars.light;

import java.util.ArrayList;
import java.util.List;

import com.s8.api.web.S8WebFront;
import com.s8.pkgs.ui.carbide.WebSources;
import com.s8.pkgs.ui.carbide.HTML_S8WebNode;


/**
 * 
 * @author pierreconvert
 *
 */
public class LightNavbar extends HTML_S8WebNode {

	public final static String JS_FILENAME = "/navbars/light/LightNavbar";
	
	
			
	/**
	 * 
	 * @param branch
	 */
	public LightNavbar(S8WebFront branch) {
		super(branch, WebSources.ROOT_WEBPATH + JS_FILENAME);
	}
	
	
	/**
	 * 
	 * @param menus
	 */
	public void setElements(List<LightNavbarElement> menus) {
		vertex.outbound().setObjectListField("elements", menus);
	}
	

	/**
	 * 
	 * @param menus
	 */
	public void setElements(LightNavbarElement... elements) {
		int n = elements.length;
		List<LightNavbarElement> list = new ArrayList<>(n);
		for(int i =0; i<n; i++) { list.add(elements[i]); }
		vertex.outbound().setObjectListField("elements", list);
	}
	
	
	
}
