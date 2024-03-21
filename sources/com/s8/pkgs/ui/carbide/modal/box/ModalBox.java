package com.s8.pkgs.ui.carbide.modal.box;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.S8WebObject;
import com.s8.pkgs.ui.carbide.HTML_S8WebNode;
import com.s8.pkgs.ui.carbide.icons.SVG_CarbideIcon;
import com.s8.pkgs.ui.carbide.CarbideWebSources;


/**
 * 
 * @author pierreconvert
 *
 */
public class ModalBox extends HTML_S8WebNode {
	
	
	
	public final static String JS_TYPENAME = "/modal/box/ModalBox";
	
	

	
	/**
	 * 
	 * @param front
	 */
	
	public ModalBox(S8WebFront front) {
		super(front, CarbideWebSources.ROOT_WEBPATH + JS_TYPENAME);
	}
	
	
	public void setIcon(SVG_CarbideIcon icon) {
		vertex.outbound().setUInt8Field("icon", icon.code);
	}
	
	public void setMessage(String text) {
		vertex.outbound().setStringUTF8Field("message", text);
	}
	
	public void setBlocks(S8WebObject... blocks) {
		vertex.outbound().setObjectListField("blocks", blocks);
	}
	
	public void setValidationItems(S8WebObject... items) {
		vertex.outbound().setObjectListField("validationItems", items);
	}
	
	
}
