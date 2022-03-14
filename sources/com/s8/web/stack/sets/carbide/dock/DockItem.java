package com.s8.web.stack.sets.carbide.dock;

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
		super(branch, "/sets-carbide/dock/DockItem");
		setStringUTF8("name", name);
		setStringUTF8("icon-filename", iconFilename);
		
		onBool8("onClickSelect", v -> System.out.print("hello world"));
	}
	
	
}
