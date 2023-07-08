package com.s8.web.front.carbide.popover;

import java.util.List;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.io.bohr.neon.core.NeObject;
import com.s8.web.front.HTML_NeNode;
import com.s8.web.front.S8WebDirection;
import com.s8.web.front.S8WebTheme;


/**
 * 
 * @author pierreconvert
 *
 */
public class Popover extends NeObject {
	
	
	public static Popover create(NeBranch branch, S8WebTheme theme, S8WebDirection direction) {
		Popover popover = new Popover(branch);
		popover.setDirection(direction);
		popover.setTheme(theme);
		popover.setVisibility(true);
		return popover;
	}

	
	
	
	
	/**
	 * 
	 * @param branch
	 */
	public Popover(NeBranch branch) {
		super(branch, "/s8-web-front/carbide/popover/Popover");
	}
	
	

	/**
	 * 
	 * @param direction
	 */
	public void setVisibility(boolean isVisible) {
		vertex.setBool8Field("visibility", isVisible);
	}
	
	
	/**
	 * 
	 * @param direction
	 */
	public void setDirection(S8WebDirection direction) {
		vertex.setUInt8Field("direction", direction.code);
	}
	
	
	/**
	 * 
	 * @param theme
	 */
	public void setTheme(S8WebTheme theme) {
		vertex.setUInt8Field("theme", theme.code);
	}
	
	
	/**
	 * 
	 * @param elements
	 */
	public void setElements(List<HTML_NeNode> elements) {
		vertex.setObjectListField("content", elements);
	}
	
	

	/**
	 * 
	 * @param elements
	 */
	public void setPopover(Popover popover) {
		vertex.setObjectField("popover", popover);
	}
	
	
	/**
	 * 
	 */
	public void removePopover() {
		vertex.setObjectField("popover", null);
	}
	
	
	
}
