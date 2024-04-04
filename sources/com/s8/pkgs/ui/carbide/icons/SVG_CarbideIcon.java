package com.s8.pkgs.ui.carbide.icons;

/**
 * 
 * @author pierreconvert
 *
 */
public enum SVG_CarbideIcon {
	
	

	/* <octicons: 0x08xx> */
	alert(0x0802, "octicons/alert.svg"),
	archive(0x0803, "octicons/archive.svg"),
	broadcast(0x0804, "octicons/broadcast.svg"),
	browser(0x0805, "octicons/browser.svg"),
	
	checklist(0x0810, "octicons/checklist.svg"),
	compare(0x08011, "octicons/git-compare.svg"),
	
	lab(0x0812, "octicons/beaker.svg"),
	file(0x0813, "octicons/file.svg"),
	gear(0x0815, "octicons/gear.svg"),
	
	pencil(0x0821, "octicons/pencil.svg"),
	person(0x0822, "octicons/person.svg"),
	play(0x0823, "octicons/play.svg"),
	pulse(0x0824, "octicons/pulse.svg"),
	
	sync(0x0831, "octicons/sync.svg"),
	/* </octicons: 0x08xx> */
	
	

	/* <set2: 0x02xx> */
	arrow_double_curved(0x0202, "set2/arrow-curve-left-right-winding-icon.svg"),
	change(0x0203, "set2/change-arrow-icon.svg"),	
	draw_curve(0x0204, "set2/draw-curve-icon.svg"),
	forward(0x0205, "set2/forward.svg"),
	geo_point(0x0206, "set2/geopoint.svg"),
	select(0x0207, "set2/object-select-icon.svg"),
	robot(0x0208, "set2/robot-icon.svg"),
	screenshot(0x0209, "set2/screenshot-icon.svg"),
	structure(0x020a, "set2/sitemap-icon.svg"),
	techno(0x020b, "set2/tech-icon.svg"),
	thermodynamic(0x020c, "set2/thermometer-icon.svg"),
	/* </set2: 0x02xx> */
	

	/* <set3: 0x03xx> */
	save(0x0302, "set3/save.svg"),
	commit(0x0304, "set3/commit.svg"),
	fork(0x0305, "set3/fork.svg"),
	revert(0x0306, "set3/revert.svg"),

	home(0x0322, "set3/home.svg"),
	repo(0x0323, "set3/repo.svg"),
	branch(0x0324, "set3/branch.svg"),
	
	MECH_configuration(0x0342, "set3/configuration.svg"),
	MECH_takeoff(0x0343, "set3/flight-takeoff.svg"),
	MECH_dynamics(0x0344, "set3/curve.svg"),
	
	ELECTRICAL_BATTERY(0x0351, "set3/battery-bolt.svg"),
	JOURNEY(0x0352, "set3/route.svg");
	/* </set3: 0x32xx> */


	public final String pathname;

	public final int code;

	private SVG_CarbideIcon(int code, String pathname) {
		this.pathname = pathname;
		this.code = code;
	}

	


}
