package com.s8.stack.web.asw;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.io.bohr.neon.core.NeObject;

/**
 * 
 * @author pierreconvert
 *
 */
public class AswCharacterSentence extends NeObject {

	public AswCharacterSentence(NeBranch branch, String text, int attitudeIndex) {
		super(branch, "/s8-stack-web/asw/AswCharacterSentence");
		vertex.setStringUTF8("text", text);
		vertex.setUInt8("attitudeIndex", attitudeIndex);
	}

}
