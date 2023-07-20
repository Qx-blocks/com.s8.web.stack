package com.s8.web.front.svg;

public enum WebSVG_StrokeThickness {

	
	FINE(0x02, "fine"),

	NORMAL(0x03, "normal"),

	THICK(0x04, "thick"),
	
	HIGHLIGTHED(0x05, "highlighted");



	public final int code;

	public final String name;


	private WebSVG_StrokeThickness(int code, String name) {
		this.code = code;
		this.name = name;
	}
}
