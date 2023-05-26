package com.s8.web.front.carbide.objform.utilities;

import java.util.ArrayList;
import java.util.List;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.io.bohr.neon.lambdas.primitives.Float32Lambda;
import com.s8.io.bohr.neon.lambdas.primitives.Int32Lambda;
import com.s8.io.bohr.neon.lambdas.primitives.StringUTF8Lambda;
import com.s8.web.front.carbide.objform.IntegerObjFormSetter;
import com.s8.web.front.carbide.objform.ObjFormElement;
import com.s8.web.front.carbide.objform.ObjectObjFormElement;
import com.s8.web.front.carbide.objform.ScalarObjFormSetter;
import com.s8.web.front.carbide.objform.TextObjFormSetter;

public class ObjectObjFormBuilder {
	
	
	private final NeBranch branch;

	private final ObjectObjFormElement objectView;
	
	private final List<ObjFormElement> fieldViews;
	
	private boolean isBuilt = false;
	
	public ObjectObjFormBuilder(NeBranch branch, String name) {
		super();
		this.branch = branch;
		this.objectView = new ObjectObjFormElement(branch);
		objectView.setName(name);
		fieldViews = new ArrayList<>();
	}
	
	
	public void addDoubleField(String name, double initialValue, Float32Lambda lambda) {
		ScalarObjFormSetter fieldView = new ScalarObjFormSetter(branch);
		fieldView.setName(name);
		fieldView.setValueLambda((float) initialValue);
		fieldView.onSetValue(lambda);
		fieldViews.add(fieldView);
	}
	
	
	public void addIntField(String name, int initialValue, Int32Lambda lambda) {
		IntegerObjFormSetter fieldView = new IntegerObjFormSetter(branch);
		fieldView.setName(name);
		fieldView.setValue(initialValue);
		fieldView.onSetValueLambda(lambda);
		fieldViews.add(fieldView);
	}
	
	
	public void addTextField(String name, int initialValue, StringUTF8Lambda lambda) {
		TextObjFormSetter fieldView = new TextObjFormSetter(branch);
		fieldView.setName(name);
		fieldView.setValue(initialValue);
		fieldView.onSetValueLambda(lambda);
		fieldViews.add(fieldView);
	}
	
	
	/**
	 * 
	 * @return
	 */
	public ObjectObjFormElement build() {
		if(!isBuilt) {
			objectView.setFields(fieldViews);	
			isBuilt = true;
		}
		return objectView;
	}
}
