package com.s8.pkgs.ui.carbide.grid;

import java.util.List;

import com.s8.api.objects.web.WebS8Object;
import com.s8.api.objects.web.WebS8Session;
import com.s8.api.objects.web.functions.none.VoidNeFunction;
import com.s8.api.objects.web.lambdas.none.VoidLambda;
import com.s8.pkgs.ui.carbide.Carbide;

/**
 * 
 * @author pierreconvert
 *
 */
public class Grid extends WebS8Object {


	public Grid(WebS8Session branch) {
		super(branch, Carbide.ROOT_WEBPATH + "/grid/Grid");
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
