package com.s8.pkgs.ui.carbide.collections.grids.std;

import com.s8.api.web.S8WebFront;


/**
 * 
 * 
 * 
 * @author pierreconvert
 *
 */
public class AccessStdGridCard extends StdGridCard {

	
	public static AccessStdGridCard create(S8WebFront branch, String title, String info) {
		AccessStdGridCard card = new AccessStdGridCard(branch);
		card.setTitle(title);
		card.setInfo(info);
		return card;
	}
	
	/**
	 * 
	 * @param branch
	 */
	public AccessStdGridCard(S8WebFront branch) {
		super(branch, StdGrid.ROOT_WEBPATH + "/AccessStdGridCard");
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
