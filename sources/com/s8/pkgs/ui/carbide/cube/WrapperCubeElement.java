package com.s8.pkgs.ui.carbide.cube;

import com.s8.api.objects.web.S8WebFrontObject;
import com.s8.api.objects.web.S8WebFront;
import com.s8.pkgs.ui.carbide.Carbide;

public class WrapperCubeElement extends CubeElement {

	
	/**
	 * 
	 * @param branch
	 */
	public WrapperCubeElement(S8WebFront branch) {
		super(branch, Carbide.ROOT_WEBPATH + "/cube/WrapperCubeElement");
	}

	
	/**
	 * 
	 * @param content
	 */
	public void setContent(S8WebFrontObject content) {
		vertex.fields().setObjectField("content", content);
	}
	
}
