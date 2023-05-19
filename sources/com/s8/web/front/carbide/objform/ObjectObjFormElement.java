package com.s8.web.front.carbide.objform;

import java.util.ArrayList;
import java.util.List;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.io.bohr.neon.lambdas.none.VoidLambda;



public class ObjectObjFormElement extends ObjFormElement {
	
	
	
	private boolean hasLoaded = false;
	
	private VoidLambda onLoad = null;

	public ObjectObjFormElement(NeBranch branch) {
		super(branch, "/s8-web-front/carbide/objform/ObjectObjFormElement");
		
		vertex.setVoidMethodLambda("load", () -> {
			if(!hasLoaded && onLoad != null) {
				onLoad.operate();
			}
		});
	}

	public void setMarkupColor(int code) {
		vertex.setUInt8Field("markupColor", code);
	}

	public void setName(String name) {
		vertex.setStringUTF8Field("name", name);
	}

	public void setTypeName(String name) {
		vertex.setStringUTF8Field("typeName", name);
	}

	public void setIconShapeByCode(int code){
		vertex.setUInt8Field("iconShapeByCode", code);
	}

	public void setIconShape(String name){
		vertex.setStringUTF8Field("iconShape", name);
	}

	public void setIconColor(int code) {
		vertex.setUInt8Field("iconColor", code);
	}


	public void setFields(List<ObjFormElement> elements){
		vertex.setObjectListField("fields", elements);
	}

	public void setFields(ObjFormElement... elements){
		List<ObjFormElement> list = new ArrayList<>();
		for(ObjFormElement element : elements) { list.add(element); }
		vertex.setObjectListField("fields", list);
	}

	public void setTogglingState(boolean mustBeExpanded){
		vertex.setBool8Field("togglingState", mustBeExpanded);
	}
	
	
	
	public void onLoad(VoidLambda lambda) {
		this.onLoad = lambda;
		this.hasLoaded = false;
	}

}
