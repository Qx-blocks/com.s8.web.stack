package com.s8.pkgs.ui.carbide.collections.grids.r2;

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
public class R2Grid extends S8WebObject {

	
	
	public final static String ROOT_WEBPATH = CarbideWebSources.ROOT_WEBPATH + "/collections/grids/r2";
	
	private List<R2GridCard> cards = new ArrayList<>();

	public R2Grid(S8WebFront branch) {
		super(branch, ROOT_WEBPATH + "/R2Grid");
		onClickLambda(() -> unselectAllCards());
	}







	public void setCards(List<R2GridCard> cards) {
		this.cards = cards;
		vertex.outbound().setObjectListField("cards", this.cards);
	}


	/**
	 * 
	 * @return
	 */
	public List<R2GridCard> getCards(){
		return cards;
	}


	public void unselectAllCards() {
		List<R2GridCard> cards = getCards();
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
