package com.s8.web.front.carbide.objform;

import com.s8.io.bohr.neon.core.NeBranch;

public class MethodObjFormLauncher extends ObjFormElement {

	public MethodObjFormLauncher(NeBranch branch) {
		super(branch, "/s8-stack-web/carbide/objform/MethodObjFormLauncher");
	}
	
	public void setName(String name) {
		vertex.setStringUTF8("name", name);
	}

}
