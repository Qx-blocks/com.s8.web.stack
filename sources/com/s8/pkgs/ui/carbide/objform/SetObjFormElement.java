package com.s8.pkgs.ui.carbide.objform;

import java.util.ArrayList;
import java.util.List;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.functions.none.VoidNeFunction;
import com.s8.api.web.lambdas.none.VoidLambda;
import com.s8.pkgs.ui.carbide.S8WebDirection;
import com.s8.pkgs.ui.carbide.S8WebStatus;
import com.s8.pkgs.ui.carbide.S8WebTheme;
import com.s8.pkgs.ui.carbide.WebSources;
import com.s8.pkgs.ui.carbide.icons.S8FlatIcon;
import com.s8.pkgs.ui.carbide.popover.Popover;



public class SetObjFormElement extends ObjFormElement {




	public SetObjFormElement(S8WebFront branch) {
		super(branch, WebSources.ROOT_WEBPATH + "/objform/SetObjFormElement");

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
	public void setIcon(S8FlatIcon icon, ObjFormColor color){
		setIconShape(icon);
		setIconColor(color);
	}


	/**
	 * 
	 * @param icon
	 */
	public void setIconShape(S8FlatIcon icon){
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


	public void setFields(List<ObjFormElement> elements){
		vertex.outbound().setObjectListField("fields", elements);
	}

	public void setFields(ObjFormElement... elements){
		List<ObjFormElement> list = new ArrayList<>();
		for(ObjFormElement element : elements) { list.add(element); }
		vertex.outbound().setObjectListField("fields", list);
	}

	public void setTogglingState(boolean mustBeExpanded){
		vertex.outbound().setBool8Field("togglingState", mustBeExpanded);
	}





	public void setStatus(S8WebStatus status) {
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
	public void setStatusPopover(S8WebStatus status, String message) {
		S8WebFront branch = vertex.getSession();
		Popover popover = new Popover(branch);
		switch(status) {
		case WARNING : popover.setTheme(S8WebTheme.WARNING); break;
		case ERROR : popover.setTheme(S8WebTheme.DANGER); break;
		default : popover.setTheme(S8WebTheme.LIGHT); break;
		}
		popover.setDirection(S8WebDirection.BOTTOM);
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
