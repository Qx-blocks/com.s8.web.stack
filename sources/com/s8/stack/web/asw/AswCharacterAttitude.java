package com.s8.stack.web.asw;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.io.bohr.neon.core.NeObject;


/**
 * 
 * @author pierreconvert
 *
 */
public class AswCharacterAttitude extends NeObject {

	public AswCharacterAttitude(NeBranch branch, 
			double speechPitch, 
			double speechRate, 
			double speechVolume, 
			double speechPause, 
			String faceImagePathname) {
		super(branch, "/s8-stack-web/asw/AswCharacterAttitude");
		
		vertex.setFloat32("speechPitch", (float) speechPitch);
		vertex.setFloat32("speechRate", (float) speechRate);
		vertex.setFloat32("speechVolume", (float) speechVolume);
		vertex.setFloat32("speechPause", (float) speechPause);
		
		vertex.setStringUTF8("faceImagePathname", faceImagePathname);
	}

}
