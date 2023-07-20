package com.s8.web.front.carbide.title;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.io.bohr.neon.core.NeObject;


/**
 * 
 * @author pierreconvert
 *
 */
public class H2Title extends NeObject {
	
	/**
	 * 
	 * @param branch
	 * @param text
	 * @return
	 */
	public H2Title create(NeBranch branch, String text) {
		H2Title title = new H2Title(branch);
		title.setText(text);
		return title;
	}

	
	/**
	 * 
	 * @param branch
	 */
	public H2Title(NeBranch branch) {
		super(branch, "/s8-web-front/carbide/title/H2Title");
	}
	
	
	/**
	 * 
	 * @param name
	 */
	public void setText(String text) {
		vertex.fields().setStringUTF8Field("text", text);
	}
}
