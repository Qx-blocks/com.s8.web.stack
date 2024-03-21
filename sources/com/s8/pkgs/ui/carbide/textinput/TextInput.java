package com.s8.pkgs.ui.carbide.textinput;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.functions.primitives.StringUTF8NeFunction;
import com.s8.api.web.lambdas.primitives.StringUTF8Lambda;
import com.s8.pkgs.ui.carbide.CarbideWebSources;
import com.s8.pkgs.ui.carbide.HTML_S8WebNode;
import com.s8.pkgs.ui.carbide.CarbideSize;
import com.s8.pkgs.ui.carbide.CarbideTheme;

/**
 * 
 * @author pierreconvert
 *
 */
public class TextInput extends HTML_S8WebNode {
	
	
	public static TextInput create(S8WebFront branch, CarbideSize size, int width, String placeholder){
		TextInput input = new TextInput(branch);
		input.setType(Type.TEXT);
		input.setTheme(CarbideTheme.LIGHT);
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
	
	

	public TextInput(S8WebFront branch) {
		super(branch, CarbideWebSources.ROOT_WEBPATH + "/textinput/TextInput");
	}
	
	

	/**
	 * 
	 * @param state
	 */
	public void setType(Type type) {
		vertex.outbound().setUInt8Field("type", type.code);
	}
	
	


	/**
	 * 
	 * @param state
	 */
	public void setPlaceholder(String placeholderText) {
		vertex.outbound().setStringUTF8Field("placeholder", placeholderText);
	}
	
	/**
	 * 
	 * @param state
	 */
	public void setWidth(int width) {
		vertex.outbound().setUInt16Field("width", width);
	}
	
	
	/**
	 * 
	 * @param state
	 */
	public void setTheme(CarbideTheme theme) {
		vertex.outbound().setUInt8Field("theme", theme.code);
	}
	
	

	/**
	 * 
	 * @param size
	 */
	public void setSize(CarbideSize size) {
		vertex.outbound().setUInt8Field("size", size.code);
	}
	
	
	/**
	 * 
	 * @param function
	 */
	public void onValueChanged(StringUTF8NeFunction function) {
		vertex.inbound().setStringUTF8Method("on-value-changed", function);
	}
	
	
	/**
	 * 
	 * @param lambda
	 */
	public void onValueChangedLambda(StringUTF8Lambda lambda) {
		vertex.inbound().setStringUTF8MethodLambda("on-value-changed", lambda);
	}



	public void setValue(String value) {
		vertex.outbound().setStringUTF8Field("value", value);
	}

}
