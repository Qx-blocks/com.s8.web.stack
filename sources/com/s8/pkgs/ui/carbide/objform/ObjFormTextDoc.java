package com.s8.pkgs.ui.carbide.objform;

import com.s8.api.objects.web.S8WebFront;
import com.s8.pkgs.ui.carbide.Carbide;
import com.s8.pkgs.ui.carbide.HTML_NeNode;


/**
 * 
 * @author pierreconvert
 *
 */
public class ObjFormTextDoc extends HTML_NeNode {

	public static ObjFormTextDoc create(S8WebFront branch, String text) {
		ObjFormTextDoc doc = new ObjFormTextDoc(branch);
		doc.setText(text);
		return doc;
	}
	

	
	public ObjFormTextDoc(S8WebFront branch) {
		super(branch, Carbide.ROOT_WEBPATH + "/objform/ObjFormTextDoc");
	}
	

	
	public void setText(String text) {
		vertex.fields().setStringUTF8Field("text", text);
	}

}
