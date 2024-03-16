package com.s8.pkgs.ui.carbide.icons;

public class JS_CarbonIconDBGenerator {

	
	/**
	 * 
	 */
	public final static String JS_MAP_NAME = "S8_FlatIcons_Map";
	

	public static void compile() {
		StringBuilder builder = new StringBuilder();
		for(SVG_CarbonIcon icon : SVG_CarbonIcon.values()) {
			builder.append("/** "+icon.name()+" */\n");	
			builder.append(JS_MAP_NAME+"["+String.format("0x%04x", icon.code)+"] = \""+icon.pathname+"\";\n");	
			builder.append("\n");	
		}
		String codeSection = builder.toString();
		System.out.println(codeSection);
	}
	
	
	public static void main(String[] args) {
		compile();
	}
	

}
