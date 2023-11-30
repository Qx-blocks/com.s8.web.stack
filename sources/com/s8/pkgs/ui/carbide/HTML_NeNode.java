package com.s8.pkgs.ui.carbide;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.S8WebFrontObject;

/**
 * 
 * ==> Generate a DOM node on front side, that can be retrieved by getEnvelope()
 * 
 * 
 * @author pierreconvert
 *
 */
public abstract class HTML_NeNode extends S8WebFrontObject {

	public HTML_NeNode(S8WebFront session, String typeName) {
		super(session, typeName);
	}

}
