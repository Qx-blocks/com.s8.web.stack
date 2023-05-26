import { DynamicMeshScreen } from "./DynamicMeshScreen.js";
import { S8 } from '/s8-io-bohr-atom/S8.js';

/**
 * 
 */
S8.import_CSS('/s8-web-front/inboard/inboard.css');



export class InboardScreen {


	constructor(title, onLoggingIn) {
		this.title = title;
		this.onLoggingIn = onLoggingIn;
		this.build();
	}



	build() {


		let wrapperNode = document.createElement("div");
		wrapperNode.classList.add("inboard");

		const options = {
			particleColor: "rgb(200,200,200)",
			lineColor: "rgb(200,200,255)",
			particleAmount: 64,
			defaultSpeed: 1,
			variantSpeed: 1,
			defaultRadius: 2,
			variantRadius: 2,
			linkRadius: 256,
		};

		let dynamicMeshScreen = new DynamicMeshScreen(options);
		dynamicMeshScreen.start();
		
		wrapperNode.appendChild(dynamicMeshScreen.getEnvelope());


		let formNode = document.createElement("div");

		let titleNode = document.createElement("h1");
		titleNode.innerText = this.title;
		formNode.appendChild(titleNode);

		let subTitleNode = document.createElement("h3");
		subTitleNode.innerText = "Login";
		formNode.appendChild(subTitleNode);


		/* <label for="username">Username</label> */
		let usernameLabelNode = document.createElement("label");
		usernameLabelNode.setAttribute("for", "username");
		usernameLabelNode.innerText = "Username";
		formNode.appendChild(usernameLabelNode);


		/* <input type="text" placeholder="Email" id="username"> */
		let usernameInputNode = document.createElement("input");
		usernameInputNode.setAttribute("type", "text");
		usernameInputNode.setAttribute("placeholder", "Email");
		//usernameInputNode.setAttribute("id", "username");
		formNode.appendChild(usernameInputNode);
		this.usernameInputNode = usernameInputNode;

		/* <label for="password">Password</label> */
		let passwordLabelNode = document.createElement("label");
		passwordLabelNode.setAttribute("for", "password");
		passwordLabelNode.innerText = "Password";
		formNode.appendChild(passwordLabelNode);


		/* <input type="password" placeholder="Password" id="password"> */
		let passwordInputNode = document.createElement("input");
		passwordInputNode.setAttribute("type", "password");
		passwordInputNode.setAttribute("placeholder", "Password");
		//passwordInputNode.setAttribute("id", "password");
		formNode.appendChild(passwordInputNode);
		this.passwordInputNode = passwordInputNode;

		/* <button>Log In</button> */
		let buttonNode = document.createElement("button");
		buttonNode.innerText = "Log IN";
		let _this = this;
		buttonNode.addEventListener("click", function(){
			_this.onLoggingIn(_this.usernameInputNode.value, _this.passwordInputNode.value);
		})
		
		formNode.appendChild(buttonNode);
		this.buttonNode = buttonNode;

		wrapperNode.appendChild(formNode);
		this.wrapperNode = wrapperNode;


	}


	getEnvelope() {
		return this.wrapperNode;
	}

}