package com.s8.web.front.asw;

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
			String faceImagePathname) {
		super(branch, "/s8-web-front/asw/AswCharacterAttitude");
		
		vertex.setFloat32("speechPitch", (float) speechPitch);
		vertex.setFloat32("speechRate", (float) speechRate);
		vertex.setFloat32("speechVolume", (float) speechVolume);
		vertex.setStringUTF8("faceImagePathname", faceImagePathname);
	}

}
