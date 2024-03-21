package com.s8.pkgs.ui.carbide.messages.ictx;

import com.s8.api.web.S8WebFront;
import com.s8.pkgs.ui.carbide.CarbideTheme;
import com.s8.pkgs.ui.carbide.HTML_S8WebNode;
import com.s8.pkgs.ui.carbide.CarbideWebSources;
import com.s8.pkgs.ui.carbide.icons.SVG_CarbideIcon;

/**
 * 
 * @author pierreconvert
 *
 */
public class IconTextMessage extends HTML_S8WebNode {
	
	
	/**
	 * 
	 * @param front
	 * @param theme
	 * @param icon
	 * @param text
	 * @return
	 */
	public static IconTextMessage create(S8WebFront front, CarbideTheme theme, SVG_CarbideIcon icon, String text) {
		IconTextMessage message = new IconTextMessage(front);
		message.setTheme(theme);
		message.setIcon(icon);
		message.setText(text);
		return message;
	}
	
	
	
	public final static String JS_TYPENAME = "/messages/ictx/IconTextMessage";
	
	

	
	/**
	 * 
	 * @param front
	 */
	
	public IconTextMessage(S8WebFront front) {
		super(front, CarbideWebSources.ROOT_WEBPATH + JS_TYPENAME);
	}
	
	


	/**
	 * 
	 * @param size
	 */
	public void setText(String text) {
		vertex.outbound().setStringUTF8Field("text", text);
	}
	
	/**
	 * 
	 * @param size
	 */
	public void setTheme(CarbideTheme theme) {
		vertex.outbound().setUInt8Field("theme", theme.code);
	}
	
	
	/**
	 * 
	 * @param items
	 */
	public void setIcon(SVG_CarbideIcon icon) {
		vertex.outbound().setUInt16Field("icon", icon.code);
	}
	
	
	
}
