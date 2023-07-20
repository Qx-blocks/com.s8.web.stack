package com.s8.web.front.svg;

import java.util.List;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.io.bohr.neon.core.NeObject;


/**
 * 
 * @author pierreconvert
 *
 */
public class WebSVG_Canvas extends NeObject {

	
	/**
	 * 
	 * @param branch
	 * @param typeName
	 */
	public WebSVG_Canvas(NeBranch branch) {
		super(branch, "/s8-web-front/svg/WebSVG_Canvas");
	}
	
	
	/**
	 * 
	 * @param elements
	 */
	public void addElements(List<WebSVG_Element> elements) {
		vertex.setObjectListField("elements", elements);
	}
	

}
