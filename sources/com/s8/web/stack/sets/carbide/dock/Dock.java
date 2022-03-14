package com.s8.web.stack.sets.carbide.dock;

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
		super(branch, "/sets-carbide/dock/Dock");
		this.items = new ArrayList<DockItem>();
	}
	
	/**
	 * 
	 */
	public void initialize() {
		List<DockItem> items = new ArrayList<DockItem>();
		items.add(new DockItem(branch, "Home", "/carbide/icon/photores/compass-icon-128px.png"));
		items.add(new DockItem(branch, "Fluid Properties", "/carbide/icon/photores/atom-icon-128px.png"));
		items.add(new DockItem(branch, "Lattice", "/carbide/icon/photores/lattice-icon-128px.png"));
		items.add(new DockItem(branch, "Sharing...", "/carbide/icon/photores/network-icon-128px.png"));
		items.add(new DockItem(branch, "Projects...", "/carbide/icon/photores/project-icon-128px.png"));
		items.add(new DockItem(branch, "Settings", "/carbide/icon/photores/settings-icon-128px.png"));
		setObjArray("items", items);
	}
	
}
