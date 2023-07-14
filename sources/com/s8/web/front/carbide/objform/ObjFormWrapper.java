package com.s8.web.front.carbide.objform;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.web.front.HTML_NeNode;


/**
 * 
 * @author pierreconvert
 *
 */
public class ObjFormWrapper extends HTML_NeNode {

	
	
	/**
	 * 
	 */
	public ObjFormWrapper(NeBranch branch) {
		super(branch, "/s8-web-front/carbide/objform/ObjFormWrapper");
	}
	
	
	/**
	 * 
	 * @param element
	 */
	public void setRoot(ObjFormElement element) {
		vertex.setObjectField("root", element);
	}
	
	
	
}
