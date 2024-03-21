package com.s8.pkgs.ui.carbide.collections.grids.std;

import com.s8.api.web.S8WebFront;


/**
 * 
 * 
 * 
 * @author pierreconvert
 *
 */
public class CreateStdGridCard extends StdGridCard {
	
	public static CreateStdGridCard create(S8WebFront branch) {
		CreateStdGridCard card = new CreateStdGridCard(branch);
		return card;
	}

	
	
	/**
	 * 
	 * @param branch
	 */
	public CreateStdGridCard(S8WebFront branch) {
		super(branch, StdGrid.ROOT_WEBPATH + "/CreateStdGridCard");
	}
	
	
	
}
