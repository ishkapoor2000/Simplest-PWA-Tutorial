if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register("sw.js").then(registration => {
		console.log("SW Registered");
		console.log(registration);
	}).catch(error => {
		console.log("SW Registeration failed")
		console.log(error);
	})
} else {
	console.log("Application is not supported.");
}