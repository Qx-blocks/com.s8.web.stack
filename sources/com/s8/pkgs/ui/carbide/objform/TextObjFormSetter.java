package com.s8.pkgs.ui.carbide.objform;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.functions.primitives.StringUTF8NeFunction;
import com.s8.api.web.lambdas.primitives.StringUTF8Lambda;
import com.s8.pkgs.ui.carbide.WebSources;


/**
 * 
 * @author pierreconvert
 *
 */
public class TextObjFormSetter extends PrimitiveObjFormSetter {

	public TextObjFormSetter(S8WebFront branch) {
		super(branch, WebSources.ROOT_WEBPATH + "/objform/TextObjFormSetter");
	}
	
	
	public void setValue(String value) {
		vertex.fields().setStringUTF8Field("value", value);
	}
	

	
	public void onValueChanged(StringUTF8NeFunction func) {
		vertex.methods().setStringUTF8Method("on-value-changed", func);
	}
	
	public void onValueChangedLambda(StringUTF8Lambda lambda) {
		vertex.methods().setStringUTF8MethodLambda("on-value-changed", lambda);
	}
}
