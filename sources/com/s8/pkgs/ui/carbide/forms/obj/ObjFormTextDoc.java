package com.s8.pkgs.ui.carbide.forms.obj;

import com.s8.api.web.S8WebFront;
import com.s8.pkgs.ui.carbide.HTML_S8WebNode;


/**
 * 
 * @author pierreconvert
 *
 */
public class ObjFormTextDoc extends HTML_S8WebNode {

	public static ObjFormTextDoc create(S8WebFront branch, String text) {
		ObjFormTextDoc doc = new ObjFormTextDoc(branch);
		doc.setText(text);
		return doc;
	}
	

	
	public ObjFormTextDoc(S8WebFront branch) {
		super(branch, ObjFormWrapper.OBJFORM_WEBPATH + "/ObjFormTextDoc");
	}
	

	
	public void setText(String text) {
		vertex.outbound().setStringUTF8Field("text", text);
	}

}
