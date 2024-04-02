package com.s8.pkgs.ui.carbide.icons;

public class JS_CarbonIconDBGenerator {

	
	/**
	 * 
	 */
	public final static String JS_MAP_NAME = "S8_FlatIcons_Map";
	

	public static void compile() {
		StringBuilder builder = new StringBuilder();
		
		

		builder.append("/** @type{ Number[] } */\n");
		builder.append("export const S8_FlatIcons_Map = new Map();\n\n");
		
		
		for(SVG_CarbideIcon icon : SVG_CarbideIcon.values()) {
			builder.append("/** "+icon.name()+" */\n");	
			builder.append(JS_MAP_NAME+".set("+String.format("0x%04x", icon.code)+", \""+icon.pathname+"\");\n");	
			builder.append("\n");	
		}
		String codeSection = builder.toString();
		System.out.println(codeSection);
	}
	
	
	public static void main(String[] args) {
		compile();
	}
	

}
