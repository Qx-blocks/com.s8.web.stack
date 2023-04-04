package com.s8.web.front.carbide.objform;

import java.util.ArrayList;
import java.util.List;

import com.s8.io.bohr.neon.core.NeBranch;



public class ObjectObjFormElement extends ObjFormElement {
	
	
	
	private boolean hasLoaded = false;
	
	private VoidLambda onLoad = null;

	public ObjectObjFormElement(NeBranch branch) {
		super(branch, "/s8-stack-web/carbide/objform/ObjectObjFormElement");
		
		vertex.forVoid("load", () -> {
			if(!hasLoaded && onLoad != null) {
				onLoad.operate();
			}
		});
	}

	public void setMarkupColor(int code) {
		vertex.setUInt8("markupColor", code);
	}

	public void setName(String name) {
		vertex.setStringUTF8("name", name);
	}

	public void setTypeName(String name) {
		vertex.setStringUTF8("typeName", name);
	}

	public void setIconShapeByCode(int code){
		vertex.setUInt8("iconShapeByCode", code);
	}

	public void setIconShape(String name){
		vertex.setStringUTF8("iconShape", name);
	}

	public void setIconColor(int code) {
		vertex.setUInt8("iconColor", code);
	}


	public void setFields(List<ObjFormElement> elements){
		vertex.setObjList("fields", elements);
	}

	public void setFields(ObjFormElement... elements){
		List<ObjFormElement> list = new ArrayList<>();
		for(ObjFormElement element : elements) { list.add(element); }
		vertex.setObjList("fields", list);
	}

	public void setTogglingState(boolean mustBeExpanded){
		vertex.setBool8("togglingState", mustBeExpanded);
	}
	
	
	
	public void onLoad(VoidLambda lambda) {
		this.onLoad = lambda;
		this.hasLoaded = false;
	}

}
