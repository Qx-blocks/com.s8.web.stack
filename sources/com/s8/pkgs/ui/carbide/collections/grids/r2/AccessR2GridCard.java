package com.s8.pkgs.ui.carbide.collections.grids.r2;

import com.s8.api.web.S8WebFront;


/**
 * 
 * 
 * 
 * @author pierreconvert
 *
 */
public class AccessR2GridCard extends R2GridCard {

	
	public static AccessR2GridCard create(S8WebFront branch, String title, String info) {
		AccessR2GridCard card = new AccessR2GridCard(branch);
		card.setTitle(title);
		card.setInfo(info);
		return card;
	}
	
	/**
	 * 
	 * @param branch
	 */
	public AccessR2GridCard(S8WebFront branch) {
		super(branch, R2Grid.ROOT_WEBPATH + "/AccessR2GridCard");
	}
	
	
	/**
	 * 
	 * @param value
	 */
	public void setTitle(String value) {
		vertex.outbound().setStringUTF8Field("title", value);
	}
	
	/**
	 * 
	 * @param value
	 */
	public void setInfo(String value) {
		vertex.outbound().setStringUTF8Field("info", value);
	}
	
	
}
