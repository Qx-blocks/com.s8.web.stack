package com.s8.pkgs.ui.carbide.dock;

import java.util.ArrayList;
import java.util.List;

import com.s8.api.web.S8WebFront;
import com.s8.pkgs.ui.carbide.WebSources;
import com.s8.pkgs.ui.carbide.cube.CubeElement;


/**
 * 
 * @author pierreconvert
 *
 */
public class Dock extends CubeElement {

	
	/**
	 * 
	 */
	public List<DockItem> items;
	
	/**
	 * 
	 */
	public Dock(S8WebFront branch) {
		super(branch, WebSources.ROOT_WEBPATH + "/dock/Dock");
		this.items = new ArrayList<DockItem>();
	}
	
	
	
	public void setItems(List<DockItem> items) {
		vertex.fields().setObjectListField("items", items);
	}
	
	/**
	 * 
	 */
	public static Dock createPreset00(S8WebFront branch) {
		
		Dock dock = new Dock(branch);
		List<DockItem> items = new ArrayList<DockItem>();
		String root = "/s8-pkgs-ui-carbide/icons/photores";
		
		items.add(new DockItem(branch, "Home", root+"/compass-icon-128px.png"));
		items.add(new DockItem(branch, "Fluid Properties", root+"/atom-icon-128px.png"));
		items.add(new DockItem(branch, "Lattice", root+"/lattice-icon-128px.png"));
		items.add(new DockItem(branch, "Sharing...", root+"/network-icon-128px.png"));
		items.add(new DockItem(branch, "Projects...", root+"/project-icon-128px.png"));
		items.add(new DockItem(branch, "Settings", root+"/settings-icon-128px.png"));
		dock.setItems(items);
		
		return dock;
	}
	
}
