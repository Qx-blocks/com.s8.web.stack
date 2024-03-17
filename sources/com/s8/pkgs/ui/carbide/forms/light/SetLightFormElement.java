package com.s8.pkgs.ui.carbide.forms.light;

import java.util.ArrayList;
import java.util.List;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.functions.none.VoidNeFunction;
import com.s8.api.web.lambdas.none.VoidLambda;
import com.s8.pkgs.ui.carbide.CarbideDirection;
import com.s8.pkgs.ui.carbide.CarbideStatus;
import com.s8.pkgs.ui.carbide.CarbideTheme;
import com.s8.pkgs.ui.carbide.icons.SVG_CarbideIcon;
import com.s8.pkgs.ui.carbide.popover.Popover;



public class SetLightFormElement extends LightFormElement {




	public SetLightFormElement(S8WebFront front) {
		super(front, LightFormWrapper.WEBPATH + "/SetLightFormElement");
		vertex.inbound().setVoidMethodLambda("on-expanded", () -> {});
		vertex.inbound().setVoidMethodLambda("on-collapsed", () -> {});
		vertex.inbound().setVoidMethodLambda("on-sync", () -> {});
	}


	/**
	 * 
	 * @param lambda
	 */
	public void onExpanded(VoidLambda lambda) {
		vertex.inbound().setVoidMethodLambda("on-expanded", lambda);
	}


	/**
	 * 
	 * @param lambda
	 */
	public void onCollapsed(VoidLambda lambda) {
		vertex.inbound().setVoidMethodLambda("on-collapsed", lambda);
	}



	public void setMarkupColor(ObjFormColor color) {
		vertex.outbound().setUInt8Field("markupColor", color.code);
	}

	public void setFieldName(String name) {
		vertex.outbound().setStringUTF8Field("fieldName", name);
	}

	public void setTypeName(String name) {
		vertex.outbound().setStringUTF8Field("typeName", name);
	}



	/**
	 * 
	 * @param icon
	 */
	public void setIcon(SVG_CarbideIcon icon, ObjFormColor color){
		setIconShape(icon);
		setIconColor(color);
	}


	/**
	 * 
	 * @param icon
	 */
	public void setIconShape(SVG_CarbideIcon icon){
		vertex.outbound().setUInt16Field("iconShapeByCode", icon.code);
	}

	/**
	 * 
	 * @param name
	 */
	public void setIconShapeByName(String name){
		vertex.outbound().setStringUTF8Field("iconShape", name);
	}


	/**
	 * 
	 * @param color
	 */
	public void setIconColor(ObjFormColor color) {
		vertex.outbound().setUInt8Field("iconColor", color.code);
	}


	public void setFields(List<LightFormElement> elements){
		vertex.outbound().setObjectListField("fields", elements);
	}

	public void setFields(LightFormElement... elements){
		List<LightFormElement> list = new ArrayList<>();
		for(LightFormElement element : elements) { list.add(element); }
		vertex.outbound().setObjectListField("fields", list);
	}

	public void setTogglingState(boolean mustBeExpanded){
		vertex.outbound().setBool8Field("togglingState", mustBeExpanded);
	}





	public void setStatus(CarbideStatus status) {
		vertex.outbound().setUInt8Field("status", status.code);
	}


	public void setStatusPopover(Popover popover) {
		vertex.outbound().setObjectField("statusPopover", popover);
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
		setStatusPopover(popover);
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
