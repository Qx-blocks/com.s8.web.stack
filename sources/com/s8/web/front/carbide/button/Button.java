package com.s8.web.front.carbide.button;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.io.bohr.neon.functions.none.VoidNeFunction;
import com.s8.web.front.HTML_NeNode;


/**
 * 
 * @author pierreconvert
 *
 */
public class Button extends HTML_NeNode {
	
	/**
	 * 
	 * @param branch
	 * @param label
	 * @param size
	 * @param style
	 * @return
	 */
	public static Button create(NeBranch branch, String label, Size size, Style style) {
		Button button = new Button(branch);
		
		button.setLabel(label);
		button.setSize(size);
		button.setStyle(style);
		
		return button;
	}
	
	public enum Style{
		DEFAULT(0x02), PRIMARY(0x03), OUTLINE(0x04), DANGER(0x05);
		public int code;
		private Style(int code) { this.code = code; }
	}
	
	public enum Size {
		INLINED(0x02), SMALL(0x04), BIG(0x06), HUGE(0x08);
		public int code;
		private Size(int code) { this.code = code; }
	}

	
	/**
	 * 
	 * @param branch
	 */
	public Button(NeBranch branch) {
		super(branch, "/s8-web-front/carbide/button/Button");
		
		/* to be overridden */
		vertex.setVoidMethodLambda("on-click", () -> System.out.println("I'm clicked!"));
	}
	
	
	/**
	 * 
	 * @param text
	 */
	public void setLabel(String text) {
		vertex.setStringUTF8Field("label", text);
	}
	
	
	

	/**
	 * 
	 * @param menus
	 */
	public void setSize(Size size) {
		vertex.setUInt8Field("size", size.code);
	}
	
	
	/**
	 * 
	 * @param menus
	 */
	public void setStyle(Style style) {
		vertex.setUInt8Field("style", style.code);
	}
	
	
	public void setEnabled(boolean state) {
		vertex.setBool8Field("isEnabled", state);
	}
	
	
	
	public void onClick(VoidNeFunction lambda) {
		vertex.setVoidMethod("on-click", lambda);
	}
	
}

