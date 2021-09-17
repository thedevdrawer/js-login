class Auth {
	constructor() {
        document.querySelector("body").style.display = "none";
		const auth = localStorage.getItem("auth");
		this.validateAuth(auth);
	}

	validateAuth(auth) {
		if (auth != 1) {
			window.location.replace("/");
		} else {
            document.querySelector("body").style.display = "block";
		}
	}

	logOut() {
		localStorage.removeItem("auth");
		window.location.replace("/");
	}
}
