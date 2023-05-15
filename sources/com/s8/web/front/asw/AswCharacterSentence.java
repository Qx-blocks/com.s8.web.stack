package com.s8.web.front.asw;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.io.bohr.neon.core.NeObject;

/**
 * 
 * @author pierreconvert
 *
 */
public class AswCharacterSentence extends NeObject {

	/**
	 * 
	 * @param branch
	 * @param text
	 * @param attitudeIndex
	 * @param pause
	 */
	public AswCharacterSentence(NeBranch branch, String text, int attitudeIndex, long pause) {
		super(branch, "/s8-web-front/asw/AswCharacterSentence");
		vertex.setStringUTF8Field("text", text);
		vertex.setUInt8Field("attitudeIndex", attitudeIndex);
		vertex.setUInt32Field("pause", pause);
	}

}
