package com.s8.pkgs.ui.carbide.collections.grids.r2;

import com.s8.api.web.S8WebFront;


/**
 * 
 * 
 * 
 * @author pierreconvert
 *
 */
public class CreateR2GridCard extends R2GridCard {
	
	public static CreateR2GridCard create(S8WebFront branch) {
		CreateR2GridCard card = new CreateR2GridCard(branch);
		return card;
	}

	
	
	/**
	 * 
	 * @param branch
	 */
	public CreateR2GridCard(S8WebFront branch) {
		super(branch, R2Grid.ROOT_WEBPATH + "/CreateR2GridCard");
	}
	
	
	
}
