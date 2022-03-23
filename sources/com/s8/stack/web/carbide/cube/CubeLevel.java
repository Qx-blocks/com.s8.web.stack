package com.s8.stack.web.carbide.cube;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.io.bohr.neon.core.NeObject;

public class CubeLevel extends NeObject {

	
	public int zIndex;
	
	
	public CubeLevel(NeBranch branch, int zIndex) {
		super(branch, "/s8-stack-web/carbide/cube/CubeLevel");
		setZIndex(zIndex);
	}

	
	
	public void setZIndex(int zIndex) {
		setUInt8("zIndex", zIndex);
	}
	
	public void setContent(NeObject object) {
		object.setObj("content", object);
	}


}
