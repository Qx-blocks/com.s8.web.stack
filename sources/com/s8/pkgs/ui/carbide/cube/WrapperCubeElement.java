package com.s8.pkgs.ui.carbide.cube;

import com.s8.api.objects.web.WebS8Object;
import com.s8.api.objects.web.WebS8Session;
import com.s8.pkgs.ui.carbide.Carbide;

public class WrapperCubeElement extends CubeElement {

	
	/**
	 * 
	 * @param branch
	 */
	public WrapperCubeElement(WebS8Session branch) {
		super(branch, Carbide.ROOT_WEBPATH + "/cube/WrapperCubeElement");
	}

	
	/**
	 * 
	 * @param content
	 */
	public void setContent(WebS8Object content) {
		vertex.fields().setObjectField("content", content);
	}
	
}
