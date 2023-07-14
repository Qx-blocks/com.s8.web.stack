package com.s8.web.front.carbide.objform;

import java.util.ArrayList;
import java.util.List;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.io.bohr.neon.lambdas.none.VoidLambda;
import com.s8.io.bohr.neon.lambdas.primitives.Float32Lambda;
import com.s8.io.bohr.neon.lambdas.primitives.Int32Lambda;
import com.s8.io.bohr.neon.lambdas.primitives.StringUTF8Lambda;
import com.s8.web.front.carbide.icons.S8FlatIcon;



public class SetObjFormElement extends ObjFormElement {
	
	
	
	
	public SetObjFormElement(NeBranch branch) {
		super(branch, "/s8-web-front/carbide/objform/SetObjFormElement");
		
		vertex.setVoidMethodLambda("on-expanded", () -> {});
		vertex.setVoidMethodLambda("on-collapsed", () -> {});
	}
	
	
	/**
	 * 
	 * @param lambda
	 */
	public void onExpanded(VoidLambda lambda) {
		vertex.setVoidMethodLambda("on-expanded", lambda);
	}
	
	
	/**
	 * 
	 * @param lambda
	 */
	public void onCollapsed(VoidLambda lambda) {
		vertex.setVoidMethodLambda("on-collapsed", lambda);
	}
	
	

	public void setMarkupColor(ObjFormColor color) {
		vertex.setUInt8Field("markupColor", color.code);
	}

	public void setName(String name) {
		vertex.setStringUTF8Field("name", name);
	}

	public void setTypeName(String name) {
		vertex.setStringUTF8Field("typeName", name);
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
		vertex.setUInt16Field("iconShapeByCode", icon.code);
	}

	/**
	 * 
	 * @param name
	 */
	public void setIconShapeByName(String name){
		vertex.setStringUTF8Field("iconShape", name);
	}

	
	/**
	 * 
	 * @param color
	 */
	public void setIconColor(ObjFormColor color) {
		vertex.setUInt8Field("iconColor", color.code);
	}


	public void setFields(List<ObjFormElement> elements){
		vertex.setObjectListField("fields", elements);
	}

	public void setFields(ObjFormElement... elements){
		List<ObjFormElement> list = new ArrayList<>();
		for(ObjFormElement element : elements) { list.add(element); }
		vertex.setObjectListField("fields", list);
	}

	public void setTogglingState(boolean mustBeExpanded){
		vertex.setBool8Field("togglingState", mustBeExpanded);
	}
	
	

	
	/**
	 * Helper method 
	 * @param name
	 * @param unit
	 * @param value
	 */
	public void addElement(ObjFormElement element) {
		vertex.addObjToList("fields", element);
	}
	
	
	public void addObjectField(String fieldName, SetObjFormElement objectElement) {
		objectElement.setName(fieldName);
		vertex.addObjToList("fields", objectElement);
	}
	
	
	
	/**
	 * Helper method 
	 * @param name
	 * @param unit
	 * @param value
	 */
	public void addScalarGetter(String name, String unit, String value) {
		ScalarObjFormGetter fieldView = new ScalarObjFormGetter(vertex.getBranch());
		fieldView.setName(name);
		fieldView.setUnit(unit);
		fieldView.setValue(value);
		vertex.addObjToList("fields", fieldView);
	}
	
	
	/**
	 * Helper method
	 * @param name
	 * @param value
	 */
	public void addIntegerGetter(String name, int value) {
		IntegerObjFormGetter fieldView = new IntegerObjFormGetter(vertex.getBranch());
		fieldView.setName(name);
		fieldView.setValue(value);
		vertex.addObjToList("fields", fieldView);
	}
	
	
	/**
	 * Helper method
	 * @param name
	 * @param value
	 */
	public void addTextGetter(String name, String value) {
		TextObjFormGetter fieldView = new TextObjFormGetter(vertex.getBranch());
		fieldView.setName(name);
		fieldView.setValue(value);
		vertex.addObjToList("fields", fieldView);
	}
	
	
	
	/**
	 * helper method
	 * @param name
	 * @param unit
	 * @param initialValue
	 * @param lambda
	 */
	public void addScalarSetter(String name, String unit, double initialValue, Float32Lambda lambda) {
		ScalarObjFormSetter fieldView = new ScalarObjFormSetter(vertex.getBranch());
		fieldView.setName(name);
		fieldView.setUnit(unit);
		fieldView.setValue((float) initialValue);
		fieldView.onSetValue(lambda);
		vertex.addObjToList("fields", fieldView);
	}
	
	

	/**
	 * helper method
	 * 
	 * @param name
	 * @param initialValue
	 * @param lambda
	 */
	public void addIntegerSetter(String name, int initialValue, Int32Lambda lambda) {
		IntegerObjFormSetter fieldView = new IntegerObjFormSetter(vertex.getBranch());
		fieldView.setName(name);
		fieldView.setValue(initialValue);
		fieldView.onSetValueLambda(lambda);
		vertex.addObjToList("fields", fieldView);
	}
	
	
	/**
	 * helper method 
	 * 
	 * @param name
	 * @param initialValue
	 * @param lambda
	 */
	public void addTextSetter(String name, String initialValue, StringUTF8Lambda lambda) {
		TextObjFormSetter fieldView = new TextObjFormSetter(vertex.getBranch());
		fieldView.setName(name);
		fieldView.setValue(initialValue);
		fieldView.onSetValueLambda(lambda);
		vertex.addObjToList("fields", fieldView);
	}
	

}
