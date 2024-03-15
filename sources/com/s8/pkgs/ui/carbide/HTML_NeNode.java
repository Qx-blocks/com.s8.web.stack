package com.s8.pkgs.ui.carbide;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.S8WebObject;

/**
 * 
 * ==> Generate a DOM node on front side, that can be retrieved by getEnvelope()
 * 
 * 
 * @author pierreconvert
 *
 */
public abstract class HTML_NeNode extends S8WebObject {

	public HTML_NeNode(S8WebFront session, String typeName) {
		super(session, typeName);
	}

}
