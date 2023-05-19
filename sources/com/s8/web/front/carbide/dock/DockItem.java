package com.s8.web.front.carbide.dock;

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
		super(branch, "/s8-web-front/carbide/dock/DockItem");
		vertex.setStringUTF8Field("name", name);
		vertex.setStringUTF8Field("iconFilename", iconFilename);
		
		vertex.setBool8Method("onClickSelect", (f,v) -> { System.out.print("hello world"); });
		
	}
	
	
}
