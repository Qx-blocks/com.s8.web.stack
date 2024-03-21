package com.s8.pkgs.ui.carbide.collections.lists.std;

import com.s8.api.web.S8WebFront;


/**
 * 
 * 
 * 
 * @author pierreconvert
 *
 */
public class AccessStdListRow extends StdListRow {

	
	public static AccessStdListRow create(S8WebFront branch, String title, String info) {
		AccessStdListRow card = new AccessStdListRow(branch);
		card.setTitle(title);
		card.setInfo(info);
		return card;
	}
	
	/**
	 * 
	 * @param branch
	 */
	public AccessStdListRow(S8WebFront branch) {
		super(branch, StdList.ROOT_WEBPATH + "/AccessStdListRow");
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
