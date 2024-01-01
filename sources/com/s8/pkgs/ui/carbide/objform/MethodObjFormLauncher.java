package com.s8.pkgs.ui.carbide.objform;

import com.s8.api.web.S8WebFront;
import com.s8.pkgs.ui.carbide.WebSources;

public class MethodObjFormLauncher extends ObjFormElement {

	public MethodObjFormLauncher(S8WebFront branch) {
		super(branch, WebSources.ROOT_WEBPATH + "/objform/MethodObjFormLauncher");
	}
	
	public void setName(String name) {
		vertex.outbound().setStringUTF8Field("name", name);
	}

}
