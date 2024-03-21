package com.s8.pkgs.ui.carbide.collections.grids.std;

import java.util.ArrayList;
import java.util.List;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.S8WebObject;
import com.s8.api.web.functions.none.VoidNeFunction;
import com.s8.api.web.lambdas.none.VoidLambda;
import com.s8.pkgs.ui.carbide.CarbideWebSources;

/**
 * 
 * @author pierreconvert
 *
 */
public class StdGrid extends S8WebObject {

	
	
	public final static String ROOT_WEBPATH = CarbideWebSources.ROOT_WEBPATH + "/collections/grids/std";
	
	private List<StdGridCard> cards = new ArrayList<>();

	public StdGrid(S8WebFront branch) {
		super(branch, ROOT_WEBPATH + "/StdGrid");
		onClickLambda(() -> unselectAllCards());
	}







	public void setCards(List<StdGridCard> cards) {
		this.cards = cards;
		vertex.outbound().setObjectListField("cards", this.cards);
	}


	/**
	 * 
	 * @return
	 */
	public List<StdGridCard> getCards(){
		return cards;
	}


	public void unselectAllCards() {
		List<StdGridCard> cards = getCards();
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
