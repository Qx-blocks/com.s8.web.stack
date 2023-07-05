package com.s8.web.front.carbide.cube;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.io.bohr.neon.core.NeObject;

public class WrapperCubeElement extends CubeElement {

	
	/**
	 * 
	 * @param branch
	 */
	public WrapperCubeElement(NeBranch branch) {
		super(branch, "/s8-web-front/carbide/cube/WrapperCubeElement");
	}

	
	/**
	 * 
	 * @param content
	 */
	public void setContent(NeObject content) {
		vertex.setObjectField("content", content);
	}
	
}
