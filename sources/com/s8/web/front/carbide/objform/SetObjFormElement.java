package com.s8.web.front.carbide.objform;

import java.util.ArrayList;
import java.util.List;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.io.bohr.neon.functions.none.VoidNeFunction;
import com.s8.io.bohr.neon.lambdas.none.VoidLambda;
import com.s8.io.bohr.neon.lambdas.primitives.Bool8Lambda;
import com.s8.io.bohr.neon.lambdas.primitives.Float32Lambda;
import com.s8.io.bohr.neon.lambdas.primitives.Int32Lambda;
import com.s8.io.bohr.neon.lambdas.primitives.StringUTF8Lambda;
import com.s8.web.front.carbide.S8NumberFormat;
import com.s8.web.front.carbide.icons.S8FlatIcon;



public class SetObjFormElement extends ObjFormElement {
	
	
	
	
	public SetObjFormElement(NeBranch branch) {
		super(branch, "/s8-web-front/carbide/objform/SetObjFormElement");
		
		vertex.setVoidMethodLambda("on-expanded", () -> {});
		vertex.setVoidMethodLambda("on-collapsed", () -> {});
		vertex.setVoidMethodLambda("on-sync", () -> {});
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

	public void setFieldName(String name) {
		vertex.setStringUTF8Field("fieldName", name);
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
	
	
	
	
	
	/**
	 * Helper method 
	 * @param name
	 * @param unit
	 * @param value
	 */
	public void addScalarGetter(String name, String unit, S8NumberFormat format, double value) {
		ScalarObjFormGetter fieldView = new ScalarObjFormGetter(vertex.getBranch());
		fieldView.setFieldName(name);
		fieldView.setUnit(unit);
		fieldView.setFormat(format);
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
		fieldView.setFieldName(name);
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
		fieldView.setFieldName(name);
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
	public void addBooleanSetter(String name, boolean initialValue, Bool8Lambda lambda) {
		vertex.addObjToList("fields", BooleanObjFormSetter.create(vertex.getBranch(), name, initialValue, lambda));
	}
	
	/**
	 * helper method
	 * @param name
	 * @param unit
	 * @param initialValue
	 * @param lambda
	 */
	public void addBooleanSetter(String name, boolean initialValue, Bool8Lambda lambda, String doc) {
		vertex.addObjToList("fields", BooleanObjFormSetter.create(vertex.getBranch(), name, initialValue, lambda, doc));
	}
	
	
	
	/**
	 * helper method
	 * @param name
	 * @param unit
	 * @param initialValue
	 * @param lambda
	 */
	public void addScalarSetter(String name, String unit, S8NumberFormat format, double initialValue, 
			Float32Lambda lambda) {
		vertex.addObjToList("fields", ScalarObjFormSetter.create(vertex.getBranch(), name, unit, format, initialValue, lambda));
	}
	
	
	/**
	 * helper method
	 * @param name
	 * @param unit
	 * @param initialValue
	 * @param lambda
	 */
	public void addScalarSetter(String name, String unit, S8NumberFormat format, double initialValue, 
			Float32Lambda lambda, String doc) {
		vertex.addObjToList("fields", ScalarObjFormSetter.create(vertex.getBranch(), name, unit, format, initialValue, lambda, doc));
	}
	
	

	/**
	 * helper method
	 * 
	 * @param name
	 * @param initialValue
	 * @param lambda
	 */
	public void addIntegerSetter(String name, int initialValue, Int32Lambda lambda) {
		vertex.addObjToList("fields", IntegerObjFormSetter.create(vertex.getBranch(), name, initialValue, lambda));
	}


	/**
	 * 
	 * @param name
	 * @param initialValue
	 * @param lambda
	 */
	public void addIntegerSetter(String name, int initialValue, Int32Lambda lambda, String doc) {
		vertex.addObjToList("fields", IntegerObjFormSetter.create(vertex.getBranch(), name, initialValue, lambda, doc));
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
	
	
	/**
	 * 
	 * @param state
	 */
	public void setUpToDate(boolean state) {
		vertex.setBool8Field("isUpToDate", state);
	}
	
	
	
	/**
	 * 
	 * @param lambda
	 */
	public void onSyncLambda(VoidLambda lambda) {
		vertex.setVoidMethodLambda("on-sync", lambda);
	}
	
	
	/**
	 * 
	 * @param lambda
	 */
	public void onSync(VoidNeFunction function) {
		vertex.setVoidMethod("on-sync", function);
	}

	
	

}
