package com.s8.pkgs.ui.carbide;

/**
 * 
 * @author pierreconvert
 *
 */
public enum CarbideSize {


	INLINED(0x02, "inlined"), 
	
	
	SMALL(0x04, "small"), 
	
	
	NORMAL(0x06, "normal"), 
	
	
	LARGE(0x08, "large");
	
	
	/**
	 * 
	 */
	public final int code;
	
	
	/**
	 * 
	 */
	public final String name;
	
	
	
	
	private CarbideSize(int code, String name) { 
		this.code = code; 
		this.name = name;
	}


}
