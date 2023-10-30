package com.s8.pkgs.ui.carbide.asw;

import com.s8.api.objects.web.WebS8Object;
import com.s8.api.objects.web.WebS8Session;
import com.s8.pkgs.ui.carbide.Carbide;
import com.s8.pkgs.ui.carbide.cube.CubeElement;

public class AswScreen extends CubeElement {
	

	
	/**
	 * 
	 * @param branch
	 */
	public AswScreen(WebS8Session branch) {
		super(branch, Carbide.ROOT_WEBPATH + "/asw/AswScreen");
	}


	
	/**
	 * 
	 * @param i
	 * @return
	 */
	public CubeElement getLayer(int i) {
		return (CubeElement) vertex.fields().getObjectListField("elements").get(i);
	}
	
	
	
	public void setBackgroundColor(String color) {
		vertex.fields().setStringUTF8Field("backgroundColor", color);
	}

	
	public void addElement(WebS8Object element) {
		vertex.fields().addObjToList("elements", element);
	}


	
	
	
}
