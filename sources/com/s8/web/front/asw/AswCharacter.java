package com.s8.web.front.asw;

import java.util.ArrayList;
import java.util.List;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.io.bohr.neon.core.NeObject;
import com.s8.io.bohr.neon.lambdas.none.VoidLambda;
import com.s8.io.bohr.neon.lambdas.primitives.StringUTF8Lambda;


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
		vertex.fields().setFloat32Field("viewportX", (float) x);
		vertex.fields().setFloat32Field("viewportY", (float) y);
		vertex.fields().setFloat32Field("viewportWidth", (float) width);
	}

	
	
	/**
	 * 
	 * @param attitudes
	 */
	public void setAttitudes(List<AswCharacterAttitude> attitudes) {
		vertex.fields().setObjectListField("attitudes", attitudes);
	}
	
	
	
	/**
	 * 
	 * @param sentences
	 */
	public void say(AswCharacterSentence... sentences) {
		int n = sentences.length;
		List<AswCharacterSentence> list = new ArrayList<AswCharacterSentence>(n);
		for(int i =0; i<n; i++) { list.add(sentences[i]); }
		vertex.fields().setObjectListField("speechSequence", list);
	}
	
	public void say(List<AswCharacterSentence> sentences) {
		vertex.fields().setObjectListField("speechSequence", sentences);
	}

	
	public void whenTold(StringUTF8Lambda lambda) {
		vertex.methods().setStringUTF8MethodLambda("answer", lambda);
	}
	
	
	public void whenNotUnderstood(VoidLambda lambda) {
		vertex.methods().setVoidMethodLambda("notUnderstood", lambda);
	}
	
}
