package com.s8.pkgs.ui.carbide.cube;

import com.s8.api.objects.web.S8WebFrontObject;
import com.s8.api.objects.web.S8WebFront;

public class CubeElement extends S8WebFrontObject {

	
	public CubeElement(S8WebFront branch, String typeName) {
		super(branch, typeName);
	}

	
	public void setZIndex(int zIndex) {
		vertex.fields().setUInt8Field("zIndex", zIndex);
	}


}
