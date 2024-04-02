package com.s8.pkgs.ui.carbide.forms.light;


/**
 * 
export const getStatus = function (code) {
    switch (code) {
        case 0x00: return "disabled";
        case 0x02: return "ok";
        case 0x06: return "out-of-sync";
        case 0x13: return "warning";
        case 0x26: return "error";
        default: throw "out-of-sync";
    }
}
 */
public enum LightFormStatus {
	
	DISABLED(0x00),
	
	OK(0x02),
	
	OUT_OF_SYNC(0x06),
	
	WARNING(0x13),
	
	ERROR(0x26);
	
	public final int code;

	private LightFormStatus(int code) {
		this.code = code;
	}
	

}
