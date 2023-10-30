package com.s8.pkgs.ui.carbide.grid;

import com.s8.api.objects.web.WebS8Session;
import com.s8.pkgs.ui.carbide.Carbide;


/**
 * 
 * 
 * 
 * @author pierreconvert
 *
 */
public class AccessRepoGridCard extends GridCard {

	
	
	/**
	 * 
	 * @param branch
	 */
	public AccessRepoGridCard(WebS8Session branch) {
		super(branch, Carbide.ROOT_WEBPATH + "/grid/AccessRepoGridCard");
	}
	
	
	/**
	 * 
	 * @param name
	 */
	public void setTitle(String name) {
		vertex.fields().setStringUTF8Field("title", name);
	}
	
	/**
	 * 
	 * @param name
	 */
	public void setInfo(String name) {
		vertex.fields().setStringUTF8Field("info", name);
	}
	
	
}
