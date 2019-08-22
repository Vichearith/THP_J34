function factoriel() {
inputNumber = Number(prompt("De quel nombre veut tu calculer la factorielle ?")) ;
if (Number.isInteger(inputNumber)) {
	outputNumber = 1;
	while (inputNumber > 0) {
		outputNumber *= inputNumber;
		inputNumber -= 1;
		}
	console.log(outputNumber);
	} else{
	console.log("Ce n'est pas un entier");
	}
}
factoriel();