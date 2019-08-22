protein = []
inputARN = prompt("Salut, donne moi un ARN") ;
arrayARN = inputARN.match(/.{1,3}/g);
arrayARN.forEach(ARN =>{
	switch(ARN){
		case "UCU":
		case "UCC":
		case "UCA":
		case "UCG":
		case "AGU":
		case "AGC":
			protein.push("Sérine");
			break;
		case "CCU":
		case "CCC":
		case "CCA":
		case "CCG":
			protein.push("Proline");
			break;
		case "UUA":
		case "UUG":
			protein.push("Leucine");
			break;
		case "UUU":
		case "UUC":
			protein.push("Phénylalanine");
			break;
		case "CGU":
		case "CGC":
		case "CGA":
		case "CGG":
		case "AGA":
		case "AGG":
			protein.push("Arginine");
			break;
		case "UAU":
		case "UAC":
			protein.push("Tyrosine");
			break;
	}
});
console.log(protein.join("-"));