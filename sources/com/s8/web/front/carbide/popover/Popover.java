package com.s8.web.front.carbide.popover;

import java.util.List;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.io.bohr.neon.core.NeObject;
import com.s8.web.front.NeNode;


/**
 * 
 * @author pierreconvert
 *
 */
public class Popover extends NeObject {

	
	/**
	 * 
	 * @param branch
	 */
	public Popover(NeBranch branch) {
		super(branch, "/s8-web-front/carbide/popover/Popover");
	}
	
	
	
	/**
	 * 
	 * @param elements
	 */
	public void setElements(List<NeNode> elements) {
		vertex.setObjectListField("elements", elements);
	}
	
	
	
}
