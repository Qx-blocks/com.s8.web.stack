package com.s8.web.front.carbide.grid;

import com.s8.io.bohr.neon.core.NeBranch;


/**
 * 
 * 
 * 
 * @author pierreconvert
 *
 */
public class RepositoryGridCard extends GridCard {

	
	
	/**
	 * 
	 * @param branch
	 */
	public RepositoryGridCard(NeBranch branch) {
		super(branch, "/s8-web-front/carbide/grid/RepositoryGridCard");
	}
	
	
	/**
	 * 
	 * @param name
	 */
	public void setTitle(String name) {
		vertex.fields().setStringUTF8Field("title", name);
	}
	
	/**
	 * 
	 * @param name
	 */
	public void setInfo(String name) {
		vertex.fields().setStringUTF8Field("info", name);
	}
	
	
}
