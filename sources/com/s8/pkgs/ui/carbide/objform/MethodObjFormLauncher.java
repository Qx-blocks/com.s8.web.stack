package com.s8.pkgs.ui.carbide.objform;

import com.s8.api.objects.web.WebS8Session;
import com.s8.pkgs.ui.carbide.Carbide;

public class MethodObjFormLauncher extends ObjFormElement {

	public MethodObjFormLauncher(WebS8Session branch) {
		super(branch, Carbide.ROOT_WEBPATH + "/objform/MethodObjFormLauncher");
	}
	
	public void setName(String name) {
		vertex.fields().setStringUTF8Field("name", name);
	}

}
