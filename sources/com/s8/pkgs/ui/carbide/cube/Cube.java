package com.s8.pkgs.ui.carbide.cube;

import java.util.List;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.S8WebFrontObject;
import com.s8.pkgs.ui.carbide.Carbide;

/**
 * 
 * @author pierreconvert
 *
 */
public class Cube extends S8WebFrontObject {
	
	
	public final static int NB_LAYERS = 8;
	
	
	/**
	 * 
	 * @param branch
	 */
	public Cube(S8WebFront branch) {
		super(branch, Carbide.ROOT_WEBPATH + "/cube/Cube");
	}


	
	/**
	 * 
	 * @param i
	 * @return
	 */
	public CubeElement getLayer(int i) {
		return (CubeElement) vertex.fields().getObjectListField("elements").get(i);
	}
	
	
	
	public void setElements(List<CubeElement> elements) {
		vertex.fields().setObjectListField("elements", elements);
	}
	
	
	public void addElement(CubeElement element) {
		vertex.fields().addObjToList("elements", element);
	}



	
	/*
	public class PrimaryView extends S8View {

		public @Override String getJSClasspath() { return "/carbide/cube/Cube"; }

		public PrimaryView(S8Orbital orbital) throws S8Exception {
			super(orbital);
		}

		@Override
		public void render(S8Scope scope) throws IOException {
			CubeLevel.View[] layerViews = new CubeLevel.View[NB_LAYERS];
			for(int i=0; i<NB_LAYERS; i++) {
				layerViews[i] = layers[i].new View(scope.context.orbit(null));
			}
			orbital.setViews(0x02, layerViews);
			
			
			// dock
			Dock dock = new Dock();
			dock.initialize();
			S8View dockView = dock.new DockMainView(scope.context.orbit(null));
			layerViews[NB_LAYERS-1].content = dockView;
			
			
			S8View fullScreen3d = new NbFullScreenWindow(scope.context.orbit(null));
			layerViews[0].content = fullScreen3d;
			
			// 3D-layer
			
			
			
		}

		@Override
		public void react(int code, S8Scope scope) throws IOException {
			// TODO Auto-generated method stub
			
		}
	}
	*/
}
