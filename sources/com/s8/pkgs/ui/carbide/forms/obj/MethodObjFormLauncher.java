package com.s8.pkgs.ui.carbide.forms.obj;

import com.s8.api.web.S8WebFront;

public class MethodObjFormLauncher extends ObjFormElement {

	public MethodObjFormLauncher(S8WebFront branch) {
		super(branch, ObjFormWrapper.OBJFORM_WEBPATH + "/MethodObjFormLauncher");
	}
	
	public void setName(String name) {
		vertex.outbound().setStringUTF8Field("name", name);
	}

}
