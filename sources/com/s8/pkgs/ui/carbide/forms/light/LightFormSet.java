package com.s8.pkgs.ui.carbide.forms.light;

import java.util.ArrayList;
import java.util.List;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.functions.none.VoidNeFunction;
import com.s8.api.web.lambdas.none.VoidLambda;
import com.s8.pkgs.ui.carbide.CarbideDirection;
import com.s8.pkgs.ui.carbide.CarbideStatus;
import com.s8.pkgs.ui.carbide.CarbideTheme;
import com.s8.pkgs.ui.carbide.popover.Popover;



public class LightFormSet extends LightFormElement {




	public LightFormSet(S8WebFront front) {
		super(front, LightFormWrapper.WEBPATH + "/LightFormSet");
	}





	public void setFields(List<LightFormElement> elements){
		vertex.outbound().setObjectListField("fields", elements);
	}

	public void setFields(LightFormElement... elements){
		List<LightFormElement> list = new ArrayList<>();
		for(LightFormElement element : elements) { list.add(element); }
		vertex.outbound().setObjectListField("fields", list);
	}
	
	
	/**
	 * 
	 * @param status
	 * @param message
	 */
	public void setStatusPopover(CarbideStatus status, String message) {
		S8WebFront branch = vertex.getSession();
		Popover popover = new Popover(branch);
		switch(status) {
		case WARNING : popover.setTheme(CarbideTheme.WARNING); break;
		case ERROR : popover.setTheme(CarbideTheme.DANGER); break;
		default : popover.setTheme(CarbideTheme.LIGHT); break;
		}
		popover.setDirection(CarbideDirection.BOTTOM);
		popover.setElements(ObjFormTextDoc.create(vertex.getSession(), message));
	}


	/**
	 * 
	 * @param lambda
	 */
	public void onStatusMessageRequired(VoidLambda lambda) {
		vertex.inbound().setVoidMethodLambda("get-status-info", lambda);
	}


	/**
	 * 
	 * @param state
	 */
	public void setUpToDate(boolean state) {
		vertex.outbound().setBool8Field("isUpToDate", state);
	}



	/**
	 * 
	 * @param lambda
	 */
	public void onSyncLambda(VoidLambda lambda) {
		vertex.inbound().setVoidMethodLambda("on-sync", lambda);
	}


	/**
	 * 
	 * @param lambda
	 */
	public void onSync(VoidNeFunction function) {
		vertex.inbound().setVoidMethod("on-sync", function);
	}




}
