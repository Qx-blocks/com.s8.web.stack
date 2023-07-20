package com.s8.web.front.carbide.grid;

import java.util.List;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.io.bohr.neon.core.NeObject;
import com.s8.io.bohr.neon.functions.none.VoidNeFunction;
import com.s8.io.bohr.neon.lambdas.none.VoidLambda;

/**
 * 
 * @author pierreconvert
 *
 */
public class Grid extends NeObject {


	public Grid(NeBranch branch) {
		super(branch, "/s8-web-front/carbide/grid/Grid");
		onClickLambda(() -> unselectAllCards());
	}







	public void setCards(List<GridCard> cards) {
		vertex.fields().setObjectListField("cards", cards);
	}


	/**
	 * 
	 * @return
	 */
	public List<GridCard> getCards(){
		return vertex.fields().getObjectListField("cards");
	}


	public void unselectAllCards() {
		List<GridCard> cards = getCards();
		if(cards != null) {
			cards.forEach(card -> {
				card.clearPopover();
				card.setSelected(false);
			}); 
		}	
	}


	/**
	 * 
	 * @param func
	 */
	public void onClick(VoidNeFunction func) {
		vertex.methods().setVoidMethod("on-click", func);
	}



	/**
	 * 
	 * @param func
	 */
	public void onClickLambda(VoidLambda lambda) {
		vertex.methods().setVoidMethodLambda("on-click", lambda);
	}

}
