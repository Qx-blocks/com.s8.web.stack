package com.s8.pkgs.ui.carbide.collections.lists.std;

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
public class StdList extends S8WebObject {

	
	
	public final static String ROOT_WEBPATH = CarbideWebSources.ROOT_WEBPATH + "/collections/lists/std";
	
	private List<StdListRow> cards = new ArrayList<>();

	public StdList(S8WebFront branch) {
		super(branch, ROOT_WEBPATH + "/StdList");
		onClickLambda(() -> unselectAllCards());
	}







	public void setRows(List<StdListRow> cards) {
		this.cards = cards;
		vertex.outbound().setObjectListField("rows", this.cards);
	}


	/**
	 * 
	 * @return
	 */
	public List<StdListRow> getCards(){
		return cards;
	}


	public void unselectAllCards() {
		List<StdListRow> cards = getCards();
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
