package com.s8.pkgs.ui.carbide.asw;

import com.s8.api.objects.web.S8WebFrontObject;
import com.s8.api.objects.web.S8WebFront;
import com.s8.pkgs.ui.carbide.Carbide;


/**
 * 
 * @author pierreconvert
 *
 */
public class AswCharacterAttitude extends S8WebFrontObject {

	public AswCharacterAttitude(S8WebFront branch, 
			double speechPitch, 
			double speechRate, 
			double speechVolume, 
			String faceImagePathname) {
		super(branch, Carbide.ROOT_WEBPATH + "/asw/AswCharacterAttitude");
		
		vertex.fields().setFloat32Field("speechPitch", (float) speechPitch);
		vertex.fields().setFloat32Field("speechRate", (float) speechRate);
		vertex.fields().setFloat32Field("speechVolume", (float) speechVolume);
		vertex.fields().setStringUTF8Field("faceImagePathname", faceImagePathname);
	}

}
