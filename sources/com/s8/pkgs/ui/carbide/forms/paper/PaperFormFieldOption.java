package com.s8.pkgs.ui.carbide.forms.paper;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.S8WebObject;
import com.s8.pkgs.ui.carbide.CarbideWebSources;


/**
 * 
 */
public class PaperFormFieldOption extends S8WebObject {
	

	public static PaperFormFieldOption create(S8WebFront front, String primary, String secondary) {
		PaperFormFieldOption option = new PaperFormFieldOption(front);
		option.setPrimaryText(primary);
		option.setSecondaryText(secondary);

		return option;
	}
	
	
	public PaperFormFieldOption(S8WebFront front) {
		super(front, CarbideWebSources.ROOT_WEBPATH + "/forms/paper/PaperFormFieldOption");
	}
	
	
	/**
	 * 
	 * @param text
	 */
	public void setPrimaryText(String text) {
		vertex.outbound().setStringUTF8Field("primaryText", text);
	}
	
	
	/**
	 * 
	 * @param text
	 */
	public void setSecondaryText(String text) {
		vertex.outbound().setStringUTF8Field("secondaryText", text);
	}
	
	
	
}
