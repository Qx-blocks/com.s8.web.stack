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
public class CreateRepoGridCard extends GridCard {

	
	
	/**
	 * 
	 * @param branch
	 */
	public CreateRepoGridCard(WebS8Session branch) {
		super(branch, Carbide.ROOT_WEBPATH + "/grid/CreateRepoGridCard");
	}
	
	
	
}
