package com.s8.web.front;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.io.bohr.neon.core.NeObject;

/**
 * 
 * ==> Generate a DOM node on front side, that can be retrieved by getEnvelope()
 * 
 * 
 * @author pierreconvert
 *
 */
public abstract class NeNode extends NeObject {

	public NeNode(NeBranch branch, String typeName) {
		super(branch, typeName);
	}

}
