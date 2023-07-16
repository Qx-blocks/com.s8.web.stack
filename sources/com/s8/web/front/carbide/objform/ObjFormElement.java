package com.s8.web.front.carbide.objform;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.io.bohr.neon.core.NeObject;
import com.s8.web.front.S8WebDirection;
import com.s8.web.front.S8WebTheme;
import com.s8.web.front.carbide.popover.Popover;



public class ObjFormElement extends NeObject {

	public ObjFormElement(NeBranch branch, String typeName) {
		super(branch, typeName);
	}

	
	/**
	 * 
	 * @param text
	 */
	public void setTooltipDoc(String text) {
		NeBranch branch = vertex.getBranch();
		Popover tooltip = new Popover(branch);
		tooltip.setTheme(S8WebTheme.LIGHT);
		tooltip.setDirection(S8WebDirection.BOTTOM);
		tooltip.setElements(ObjFormTextDoc.create(vertex.getBranch(), text));
		vertex.setObjectField("tooltip", tooltip);
	}
	
}
