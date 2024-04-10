package com.s8.pkgs.ui.carbide.forms.paper;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.S8WebObject;
import com.s8.api.web.lambdas.primitives.UInt8Lambda;
import com.s8.pkgs.ui.carbide.CarbideWebSources;


/**
 * 
 */
public class PaperFormField extends S8WebObject {
	
	
	/**
	 * 
	 * @param front
	 */
	public PaperFormField(S8WebFront front) {
		super(front, CarbideWebSources.ROOT_WEBPATH + "/forms/paper/PaperFormField");
		onSelected(index -> System.out.println("[PaperFormField] selected index = " + index));
	}
	

	/**
	 * 
	 * @param text
	 */
	public void setTitle(String text) {
		vertex.outbound().setStringUTF8Field("title", text);
	}
	
	
	/**
	 * 
	 * @param text
	 */
	public void setDescription(String text) {
		vertex.outbound().setStringUTF8Field("description", text);
	}
	
	
	/**
	 * 
	 * @param options
	 */
	public void setOptions(PaperFormFieldOption[] options) {
		vertex.outbound().setObjectListField("options", options);
	}
	
	
	/**
	 * 
	 * @param text
	 */
	public void setSelectedIndex(int index) {
		vertex.outbound().setUInt8Field("selectedIndex", index);
	}
	


	/**
	 * 
	 * @param text
	 */
	public void onSelected(UInt8Lambda lambda) {
		vertex.inbound().setUInt8MethodLambda("on-selected", lambda);
	}
	
	

}
