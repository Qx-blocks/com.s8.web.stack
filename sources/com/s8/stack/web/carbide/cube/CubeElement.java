package com.s8.stack.web.carbide.cube;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.io.bohr.neon.core.NeObject;

public class CubeElement extends NeObject {

	
	public CubeElement(NeBranch branch, String typeName) {
		super(branch, typeName);
	}

	
	public void setZIndex(int zIndex) {
		vertex.setUInt8("zIndex", zIndex);
	}


}
