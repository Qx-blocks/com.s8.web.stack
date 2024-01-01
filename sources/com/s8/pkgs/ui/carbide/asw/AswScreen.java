package com.s8.pkgs.ui.carbide.asw;

import java.util.ArrayList;
import java.util.List;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.S8WebFrontObject;
import com.s8.pkgs.ui.carbide.WebSources;
import com.s8.pkgs.ui.carbide.cube.CubeElement;

public class AswScreen extends CubeElement {
	

	private List<S8WebFrontObject> elements = new ArrayList<>();
	
	/**
	 * 
	 * @param branch
	 */
	public AswScreen(S8WebFront branch) {
		super(branch, WebSources.ROOT_WEBPATH + "/asw/AswScreen");
	}


	
	
	public void setBackgroundColor(String color) {
		vertex.outbound().setStringUTF8Field("backgroundColor", color);
	}

	
	public void addElement(S8WebFrontObject element) {
		elements.add(element);
		vertex.outbound().setObjectListField("elements", elements);
	}


	
	
	
}
