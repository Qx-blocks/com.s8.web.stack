package com.s8.pkgs.ui.carbide.dock;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.S8WebObject;
import com.s8.api.web.functions.none.VoidNeFunction;
import com.s8.api.web.lambdas.none.VoidLambda;
import com.s8.pkgs.ui.carbide.WebSources;

/*
 * 
 */
public class DockItem extends S8WebObject {
	
	
	public static DockItem create(S8WebFront branch, String name, String iconFilename, VoidNeFunction function) {
		DockItem dockItem = new DockItem(branch, name, iconFilename);
		dockItem.onClick(function);
		return dockItem;
	}
	
	public static DockItem createLambda(S8WebFront branch, String name, String iconFilename, VoidLambda lambda) {
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
	public DockItem(S8WebFront branch, String name, String iconFilename) {
		super(branch, WebSources.ROOT_WEBPATH + "/dock/DockItem");
		vertex.outbound().setStringUTF8Field("name", name);
		vertex.outbound().setStringUTF8Field("iconFilename", iconFilename);
		
		vertex.inbound().setBool8Method("onClickSelect", (f,v) -> { System.out.print("hello world"); });
		
	}
	
	
	/**
	 * 
	 * @param function
	 */
	public void onClick(VoidNeFunction function) {
		vertex.inbound().setVoidMethod("on-click", function);
	}
	
	
	/**
	 * 
	 * @param lambda
	 */
	public void onClickLambda(VoidLambda lambda) {
		vertex.inbound().setVoidMethodLambda("on-click", lambda);
	}
	
	
}
