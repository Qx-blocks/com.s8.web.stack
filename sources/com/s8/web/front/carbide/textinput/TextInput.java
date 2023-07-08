package com.s8.web.front.carbide.textinput;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.web.front.HTML_NeNode;
import com.s8.web.front.S8WebSize;
import com.s8.web.front.S8WebTheme;

/**
 * 
 * @author pierreconvert
 *
 */
public class TextInput extends HTML_NeNode {
	
	
	public static TextInput create(NeBranch branch, S8WebSize size, int width, String placeholder){
		TextInput input = new TextInput(branch);
		input.setType(Type.TEXT);
		input.setTheme(S8WebTheme.LIGHT);
		input.setSize(size);
		input.setWidth(width);
		input.setPlaceholder(placeholder);
		return input;
	}
	
	public enum Type {
		TEXT(0x22), PASSWORD(0x23);
		public int code;
		private Type(int code) { this.code = code; }
	}
	
	

	public TextInput(NeBranch branch) {
		super(branch,  "/s8-web-front/carbide/textinput/TextInput");
	}
	
	

	/**
	 * 
	 * @param state
	 */
	public void setType(Type type) {
		vertex.setUInt8Field("type", type.code);
	}
	
	


	/**
	 * 
	 * @param state
	 */
	public void setPlaceholder(String placeholderText) {
		vertex.setStringUTF8Field("placeholder", placeholderText);
	}
	
	/**
	 * 
	 * @param state
	 */
	public void setWidth(int width) {
		vertex.setUInt16Field("width", width);
	}
	
	
	/**
	 * 
	 * @param state
	 */
	public void setTheme(S8WebTheme theme) {
		vertex.setUInt8Field("theme", theme.code);
	}
	
	

	/**
	 * 
	 * @param size
	 */
	public void setSize(S8WebSize size) {
		vertex.setUInt8Field("size", size.code);
	}

}
