package com.s8.web.front.carbide.objform;

import com.s8.io.bohr.neon.core.NeBranch;

/**
 * 
 * @author pierreconvert
 *
 */
public class BooleanObjFormSetter extends PrimitiveObjFormSetter {

	public BooleanObjFormSetter(NeBranch branch) {
		super(branch, "/s8-stack-web/carbide/objform/BooleanObjFormGetter");
	}

}
