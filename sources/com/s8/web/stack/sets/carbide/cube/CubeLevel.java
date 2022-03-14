package com.s8.web.stack.sets.carbide.cube;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.io.bohr.neon.core.NeObject;

public class CubeLevel extends NeObject {

	
	public int zIndex;
	
	
	public CubeLevel(NeBranch branch, int zIndex) {
		super(branch, "sets-carbide/cube/CubeLevel");
		setUInt8("z-index", zIndex);
	}

	
	
	public void setZIndex(int zIndex) {
		setUInt8("z-index", zIndex);
	}
	
	public void setContent(NeObject object) {
		object.setObj("content", object);
	}


}
