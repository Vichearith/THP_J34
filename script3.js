function pyramide() {
inputNumber = Number(prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")) ;
	if (Number.isInteger(inputNumber)) {
		i = 1
		do {
			space = inputNumber - i
			console.log(" ".repeat(space) + "#".repeat(i))
			i += 1;
			} while (i <= inputNumber);
	} else {
		console.log("Ce n'est pas un entier")
	}
}
pyramide();