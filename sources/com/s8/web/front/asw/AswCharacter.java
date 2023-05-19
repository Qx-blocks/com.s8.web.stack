package com.s8.web.front.asw;

import java.util.ArrayList;
import java.util.List;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.io.bohr.neon.core.NeObject;
import com.s8.io.bohr.neon.functions.none.VoidNeFunction;
import com.s8.io.bohr.neon.functions.primitives.StringUTF8NeFunction;


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
		vertex.setFloat32Field("viewportX", (float) x);
		vertex.setFloat32Field("viewportY", (float) y);
		vertex.setFloat32Field("viewportWidth", (float) width);
	}

	
	
	/**
	 * 
	 * @param attitudes
	 */
	public void setAttitudes(List<AswCharacterAttitude> attitudes) {
		vertex.setObjectListField("attitudes", attitudes);
	}
	
	
	
	/**
	 * 
	 * @param sentences
	 */
	public void say(AswCharacterSentence... sentences) {
		int n = sentences.length;
		List<AswCharacterSentence> list = new ArrayList<AswCharacterSentence>(n);
		for(int i =0; i<n; i++) { list.add(sentences[i]); }
		vertex.setObjectListField("speechSequence", list);
	}
	
	public void say(List<AswCharacterSentence> sentences) {
		vertex.setObjectListField("speechSequence", sentences);
	}

	
	public void whenTold(StringUTF8NeFunction lambda) {
		vertex.setStringUTF8Method("answer", lambda);
	}
	
	
	public void whenNotUnderstood(VoidNeFunction lambda) {
		vertex.setVoidMethod("notUnderstood", lambda);
	}
	
}
