package com.s8.pkgs.ui.carbide.grid;

import com.s8.api.web.S8WebFront;
import com.s8.pkgs.ui.carbide.WebSources;


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
	public AccessRepoGridCard(S8WebFront branch) {
		super(branch, WebSources.ROOT_WEBPATH + "/grid/AccessRepoGridCard");
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
