package com.s8.pkgs.ui.carbide.grid;

import java.util.ArrayList;
import java.util.List;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.S8WebFrontObject;
import com.s8.api.web.functions.none.VoidNeFunction;
import com.s8.api.web.lambdas.none.VoidLambda;
import com.s8.pkgs.ui.carbide.WebSources;

/**
 * 
 * @author pierreconvert
 *
 */
public class Grid extends S8WebFrontObject {

	
	private List<GridCard> cards = new ArrayList<>();

	public Grid(S8WebFront branch) {
		super(branch, WebSources.ROOT_WEBPATH + "/grid/Grid");
		onClickLambda(() -> unselectAllCards());
	}







	public void setCards(List<GridCard> cards) {
		this.cards = cards;
		vertex.outbound().setObjectListField("cards", this.cards);
	}


	/**
	 * 
	 * @return
	 */
	public List<GridCard> getCards(){
		return cards;
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
		vertex.inbound().setVoidMethod("on-click", func);
	}



	/**
	 * 
	 * @param func
	 */
	public void onClickLambda(VoidLambda lambda) {
		vertex.inbound().setVoidMethodLambda("on-click", lambda);
	}

}
