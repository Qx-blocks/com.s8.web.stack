package com.s8.pkgs.ui.carbide.popover;

import java.util.List;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.S8WebFrontObject;
import com.s8.pkgs.ui.carbide.Carbide;
import com.s8.pkgs.ui.carbide.HTML_NeNode;
import com.s8.pkgs.ui.carbide.S8WebDirection;
import com.s8.pkgs.ui.carbide.S8WebTheme;


/**
 * 
 * @author pierreconvert
 *
 */
public class Popover extends S8WebFrontObject {
	
	
	public static Popover create(S8WebFront branch, S8WebTheme theme, S8WebDirection direction) {
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
	public Popover(S8WebFront session) {
		super(session, Carbide.ROOT_WEBPATH + "/popover/Popover");
	}
	
	

	/**
	 * 
	 * @param direction
	 */
	public void setVisibility(boolean isVisible) {
		vertex.fields().setBool8Field("visibility", isVisible);
	}
	
	
	/**
	 * 
	 * @param direction
	 */
	public void setDirection(S8WebDirection direction) {
		vertex.fields().setUInt8Field("direction", direction.code);
	}
	
	
	/**
	 * 
	 * @param theme
	 */
	public void setTheme(S8WebTheme theme) {
		vertex.fields().setUInt8Field("theme", theme.code);
	}
	
	
	/**
	 * 
	 * @param elements
	 */
	public void setElements(List<HTML_NeNode> elements) {
		vertex.fields().setObjectListField("content", elements);
	}
	
	/**
	 * 
	 * @param elements
	 */
	public void setElements(HTML_NeNode... elements) {
		vertex.fields().setObjectListField("content", elements);
	}
	
	

	/**
	 * 
	 * @param elements
	 */
	public void setPopover(Popover popover) {
		vertex.fields().setObjectField("popover", popover);
	}
	
	
	/**
	 * 
	 */
	public void removePopover() {
		vertex.fields().setObjectField("popover", null);
	}
	
	
	
}
