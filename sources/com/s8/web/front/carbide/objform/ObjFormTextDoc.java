package com.s8.web.front.carbide.objform;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.web.front.HTML_NeNode;


/**
 * 
 * @author pierreconvert
 *
 */
public class ObjFormTextDoc extends HTML_NeNode {

	public static ObjFormTextDoc create(NeBranch branch, String text) {
		ObjFormTextDoc doc = new ObjFormTextDoc(branch);
		doc.setText(text);
		return doc;
	}
	

	
	public ObjFormTextDoc(NeBranch branch) {
		super(branch, "/s8-web-front/carbide/objform/ObjFormTextDoc");
	}
	

	
	public void setText(String text) {
		vertex.setStringUTF8Field("text", text);
	}

}
