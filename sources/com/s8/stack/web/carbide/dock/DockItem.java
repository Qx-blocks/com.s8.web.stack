package com.s8.stack.web.carbide.dock;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.io.bohr.neon.core.NeObject;

/*
 * 
 */
public class DockItem extends NeObject {
	
	
	public String name;
	
	public String iconFilename;
	
	/**
	 * 
	 * @param branch
	 * @param name
	 * @param iconFilename
	 */
	public DockItem(NeBranch branch, String name, String iconFilename) {
		super(branch, "/s8-stack-web/carbide/dock/DockItem");
		vertex.setStringUTF8("name", name);
		vertex.setStringUTF8("iconFilename", iconFilename);
		
		vertex.forBool8("onClickSelect", v -> System.out.print("hello world"));
	}
	
	
}
