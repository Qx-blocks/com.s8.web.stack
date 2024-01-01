package com.s8.pkgs.ui.carbide.cube;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.S8WebFrontObject;

public class CubeElement extends S8WebFrontObject {

	
	public CubeElement(S8WebFront branch, String typeName) {
		super(branch, typeName);
	}

	
	public void setZIndex(int zIndex) {
		vertex.outbound().setUInt8Field("zIndex", zIndex);
	}


}
