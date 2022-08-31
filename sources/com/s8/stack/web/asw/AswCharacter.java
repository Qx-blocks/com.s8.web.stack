package com.s8.stack.web.asw;

import java.util.ArrayList;
import java.util.List;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.io.bohr.neon.core.NeObject;


/**
 * 
 * @author pierreconvert
 *
 */
public class AswCharacter extends NeObject {

	
	/**
	 * 
	 * @param branch
	 */
	public AswCharacter(NeBranch branch) {
		super(branch, "/s8-stack-web/asw/AswCharacter");
	}


	/**
	 * 
	 * @param x
	 * @param y
	 * @param width
	 * @param height
	 */
	public void setViewPort(double x, double y, double width) {
		vertex.setFloat32("viewportX", (float) x);
		vertex.setFloat32("viewportY", (float) y);
		vertex.setFloat32("viewportWidth", (float) width);
	}

	
	
	/**
	 * 
	 * @param attitudes
	 */
	public void setAttitudes(List<AswCharacterAttitude> attitudes) {
		vertex.setObjList("attitudes", attitudes);
	}
	
	
	
	/**
	 * 
	 * @param sentences
	 */
	public void pushSentences(AswCharacterSentence... sentences) {
		int n = sentences.length;
		List<AswCharacterSentence> sequence = new ArrayList<AswCharacterSentence>(n);
		for(int i =0; i<n; i++) { sequence.add(sentences[i]); }
		vertex.setObjList("speechSequence", sequence);
	}

	
	public void forAnswer(NeObject.StringUTF8Lambda lambda) {
		vertex.forStringUTF8("answer", lambda);
	}
	
	
	public void whenNotUnderstood(NeObject.VoidLambda lambda) {
		vertex.forVoid("notUnderstood", lambda);
	}
	
}
