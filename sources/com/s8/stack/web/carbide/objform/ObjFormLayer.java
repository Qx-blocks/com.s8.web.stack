package com.s8.stack.web.carbide.objform;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.stack.web.carbide.cube.CubeElement;


/**
 * 
 * @author pierreconvert
 *
 */
public class ObjFormLayer extends CubeElement {

	
	
	/**
	 * 
	 */
	public ObjFormLayer(NeBranch branch) {
		super(branch, "/s8-stack-web/carbide/objform/ObjFormLayer");
	}
	
	
	
	public void setRoot(ObjFormElement element) {
		vertex.setObj("root", element);
	}

	
}
