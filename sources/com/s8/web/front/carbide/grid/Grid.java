package com.s8.web.front.carbide.grid;

import java.util.List;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.io.bohr.neon.core.NeObject;

/**
 * 
 * @author pierreconvert
 *
 */
public class Grid extends NeObject {

	public Grid(NeBranch branch) {
		super(branch, "/s8-web-front/carbide/grid/Grid");
	}
	
	
	
	public void setCards(List<GridCard> cards) {
		vertex.setObjectListField("cards", cards);
	}
	
	
}
