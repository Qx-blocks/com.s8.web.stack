package com.s8.pkgs.ui.carbide.paragraphs.std;

import com.s8.api.web.S8WebFront;
import com.s8.pkgs.ui.carbide.CarbideWebSources;
import com.s8.pkgs.ui.carbide.HTML_S8WebNode;


/**
 * 
 * @author pierreconvert
 *
 */
public class StdParagraph extends HTML_S8WebNode {
	
	/**
	 * 
	 * @param front
	 * @param text
	 * @return
	 */
	public static StdParagraph create(S8WebFront front, String text) {
		StdParagraph paragraph = new StdParagraph(front);
		paragraph.setText(text);
		return paragraph;
	}
	
	
	/**
	 * 
	 */
	public final static String JS_TYPENAME = "/paragraph/std/StdParagraph";
	
	

	
	/**
	 * 
	 * @param front
	 */
	
	public StdParagraph(S8WebFront front) {
		super(front, CarbideWebSources.ROOT_WEBPATH + JS_TYPENAME);
	}
	
	
	
	public void setText(String text) {
		vertex.outbound().setStringUTF8Field("text", text);
	}
	
	
}
