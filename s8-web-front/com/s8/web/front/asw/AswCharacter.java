package com.s8.web.front.asw;

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
		super(branch, "/s8-web-front/asw/AswCharacter");
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
	public void say(AswCharacterSentence... sentences) {
		int n = sentences.length;
		List<AswCharacterSentence> list = new ArrayList<AswCharacterSentence>(n);
		for(int i =0; i<n; i++) { list.add(sentences[i]); }
		vertex.setObjList("speechSequence", list);
	}
	
	public void say(List<AswCharacterSentence> sentences) {
		vertex.setObjList("speechSequence", sentences);
	}

	
	public void whenTold(NeObject.StringUTF8Lambda lambda) {
		vertex.forStringUTF8("answer", lambda);
	}
	
	
	public void whenNotUnderstood(NeObject.VoidLambda lambda) {
		vertex.forVoid("notUnderstood", lambda);
	}
	
}
