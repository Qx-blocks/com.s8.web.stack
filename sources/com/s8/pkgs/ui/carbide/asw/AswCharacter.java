package com.s8.pkgs.ui.carbide.asw;

import java.util.ArrayList;
import java.util.List;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.S8WebFrontObject;
import com.s8.api.web.lambdas.none.VoidLambda;
import com.s8.api.web.lambdas.primitives.StringUTF8Lambda;
import com.s8.pkgs.ui.carbide.WebSources;


/**
 * 
 * @author pierreconvert
 *
 */
public class AswCharacter extends S8WebFrontObject {

	
	/**
	 * 
	 * @param branch
	 */
	public AswCharacter(S8WebFront branch) {
		super(branch, WebSources.ROOT_WEBPATH + "/asw/AswCharacter");
	}


	/**
	 * 
	 * @param x
	 * @param y
	 * @param width
	 * @param height
	 */
	public void setViewPort(double x, double y, double width) {
		vertex.outbound().setFloat32Field("viewportX", (float) x);
		vertex.outbound().setFloat32Field("viewportY", (float) y);
		vertex.outbound().setFloat32Field("viewportWidth", (float) width);
	}

	
	
	/**
	 * 
	 * @param attitudes
	 */
	public void setAttitudes(List<AswCharacterAttitude> attitudes) {
		vertex.outbound().setObjectListField("attitudes", attitudes);
	}
	
	
	
	/**
	 * 
	 * @param sentences
	 */
	public void say(AswCharacterSentence... sentences) {
		int n = sentences.length;
		List<AswCharacterSentence> list = new ArrayList<AswCharacterSentence>(n);
		for(int i =0; i<n; i++) { list.add(sentences[i]); }
		vertex.outbound().setObjectListField("speechSequence", list);
	}
	
	public void say(List<AswCharacterSentence> sentences) {
		vertex.outbound().setObjectListField("speechSequence", sentences);
	}

	
	public void whenTold(StringUTF8Lambda lambda) {
		vertex.inbound().setStringUTF8MethodLambda("answer", lambda);
	}
	
	
	public void whenNotUnderstood(VoidLambda lambda) {
		vertex.inbound().setVoidMethodLambda("notUnderstood", lambda);
	}
	
}
