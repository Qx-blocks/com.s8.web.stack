package com.s8.web.front.carbide.dock;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.io.bohr.neon.core.NeObject;
import com.s8.io.bohr.neon.functions.none.VoidNeFunction;
import com.s8.io.bohr.neon.lambdas.none.VoidLambda;

/*
 * 
 */
public class DockItem extends NeObject {
	
	
	public static DockItem create(NeBranch branch, String name, String iconFilename, VoidNeFunction function) {
		DockItem dockItem = new DockItem(branch, name, iconFilename);
		dockItem.onClick(function);
		return dockItem;
	}
	
	public static DockItem createLambda(NeBranch branch, String name, String iconFilename, VoidLambda lambda) {
		DockItem dockItem = new DockItem(branch, name, iconFilename);
		dockItem.onClickLambda(lambda);
		return dockItem;
	}
	
	
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
		vertex.fields().setStringUTF8Field("name", name);
		vertex.fields().setStringUTF8Field("iconFilename", iconFilename);
		
		vertex.methods().setBool8Method("onClickSelect", (f,v) -> { System.out.print("hello world"); });
		
	}
	
	
	/**
	 * 
	 * @param function
	 */
	public void onClick(VoidNeFunction function) {
		vertex.methods().setVoidMethod("on-click", function);
	}
	
	
	/**
	 * 
	 * @param lambda
	 */
	public void onClickLambda(VoidLambda lambda) {
		vertex.methods().setVoidMethodLambda("on-click", lambda);
	}
	
	
}
