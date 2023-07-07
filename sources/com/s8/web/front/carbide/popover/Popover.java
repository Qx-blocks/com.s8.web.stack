package com.s8.web.front.carbide.popover;

import java.util.List;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.io.bohr.neon.core.NeObject;
import com.s8.web.front.HTML_NeNode;


/**
 * 
 * @author pierreconvert
 *
 */
public class Popover extends NeObject {
	
	
	public static Popover create(NeBranch branch, Theme theme, Direction direction) {
		Popover popover = new Popover(branch);
		popover.setDirection(direction);
		popover.setTheme(theme);
		popover.setVisibility(true);
		return popover;
	}

	
	public enum Direction {
		TOP_LEFT(0x22), TOP(0x23), TOP_RIGHT(0x24),
		RIGHT_TOP(0x32), RIGHT(0x33), RIGHT_BOTTOM(0x34),
		BOTTOM_LEFT(0x42), BOTTOM(0x43), BOTTOM_RIGHT(0x44),
		LEFT_TOP(0x52), LEFT(0x53), LEFT_BOTTOM(0x54),
		
		AUTO(0x64);
		public int code;
		private Direction(int code) { this.code = code; }
	}
	
	public enum Theme {
		LIGHT(0x22), DARK(0x23);
		public int code;
		private Theme(int code) { this.code = code; }
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
	public void setDirection(Direction direction) {
		vertex.setUInt8Field("direction", direction.code);
	}
	
	
	/**
	 * 
	 * @param theme
	 */
	public void setTheme(Theme theme) {
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
