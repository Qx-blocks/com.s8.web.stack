package com.s8.stack.web.carbide.dock;

import java.util.ArrayList;
import java.util.List;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.io.bohr.neon.core.NeObject;


/**
 * 
 * @author pierreconvert
 *
 */
public class Dock extends NeObject {

	
	/**
	 * 
	 */
	public List<DockItem> items;
	
	/**
	 * 
	 */
	public Dock(NeBranch branch) {
		super(branch, "/s8-stack-web/carbide/dock/Dock");
		this.items = new ArrayList<DockItem>();
	}
	
	/**
	 * 
	 */
	public void initialize() {
		List<DockItem> items = new ArrayList<DockItem>();
		String root = "/s8-stack-web/carbide/icon/photores";
		items.add(new DockItem(branch, "Home", root+"/compass-icon-128px.png"));
		items.add(new DockItem(branch, "Fluid Properties", root+"/atom-icon-128px.png"));
		items.add(new DockItem(branch, "Lattice", root+"/lattice-icon-128px.png"));
		items.add(new DockItem(branch, "Sharing...", root+"/network-icon-128px.png"));
		items.add(new DockItem(branch, "Projects...", root+"/project-icon-128px.png"));
		items.add(new DockItem(branch, "Settings", root+"/settings-icon-128px.png"));
		setObjList("items", items);
	}
	
}
