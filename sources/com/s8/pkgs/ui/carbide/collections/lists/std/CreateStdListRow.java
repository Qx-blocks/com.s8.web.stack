package com.s8.pkgs.ui.carbide.collections.lists.std;

import com.s8.api.web.S8WebFront;


/**
 * 
 * 
 * 
 * @author pierreconvert
 *
 */
public class CreateStdListRow extends StdListRow {
	
	public static CreateStdListRow create(S8WebFront branch) {
		CreateStdListRow card = new CreateStdListRow(branch);
		return card;
	}

	
	
	/**
	 * 
	 * @param branch
	 */
	public CreateStdListRow(S8WebFront branch) {
		super(branch, StdList.ROOT_WEBPATH + "/CreateStdListRow");
	}
	
	
	
}
