package com.s8.pkgs.ui.carbide.forms.paper;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.S8WebObject;
import com.s8.pkgs.ui.carbide.CarbideWebSources;


/**
 * 
 */
public class PaperForm extends S8WebObject {
	
	
	public PaperForm(S8WebFront front) {
		super(front, CarbideWebSources.ROOT_WEBPATH + "/forms/paper/PaperForm");
	}
	

	
	/**
	 * 
	 * @param options
	 */
	public void setFields(PaperFormField[] fields) {
		vertex.outbound().setObjectListField("fields", fields);
	}
	
	

	
}
