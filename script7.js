input = (prompt("Qu'est-ce-que tu me veux ?")) ;
if(input.substr(input.length - 1) === "?"){
	console.log("Ouais Ouais...");
} else if(input === input.toUpperCase() && input !== "") {
	console.log("Pwa, calme-toi...");
} else if(input.includes("Fortnite") || input.includes("fortnite")) {
	console.log("on s' fait une partie soum-soum ?");
} else if(input === "") {
	console.log("t'es en PLS ?");
} else {
	console.log("balek.");
};