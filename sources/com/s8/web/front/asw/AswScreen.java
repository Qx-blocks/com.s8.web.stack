package com.s8.web.front.asw;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.io.bohr.neon.core.NeObject;
import com.s8.web.front.carbide.cube.CubeElement;

public class AswScreen extends CubeElement {
	

	
	/**
	 * 
	 * @param branch
	 */
	public AswScreen(NeBranch branch) {
		super(branch, "/s8-web-front/asw/AswScreen");
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

	
	public void addElement(NeObject element) {
		vertex.fields().addObjToList("elements", element);
	}


	
	
	
}
