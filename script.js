console.log("Bonjour monde")

let firstName;
firstName = prompt('Donne moi ton prénom :');
let lastName;
lastName = prompt('Donne moi ton nom :');
console.log(`Bonjour ${firstName} ${lastName}`);

################################################################################################

function factoriel() {
inputNumber = Number(prompt("De quel nombre veut tu calculer la factorielle ?")) ;
if (Number.isInteger(inputNumber)) {
	outputNumber = 1;
	while (inputNumber > 0) {
		outputNumber *= inputNumber;
		inputNumber -= 1;
		}
	return outputNumber;
	} else{
	console.log("Ce n'est pas un entier");
	}
}
factoriel();

################################################################################################

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

################################################################################################

const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];






console.log("################################################################################################")
console.log("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;")
entrepreneurs.forEach(entrepreneur => {
  if (entrepreneur.year >= 1970 && entrepreneur.year < 1980){
  	console.log(entrepreneur);
  }
});

console.log("################################################################################################")
console.log("Sors une array qui contient le prénom et le nom des entrepreneurs ;")
var entrepreneurs_array = [];
entrepreneurs.forEach(entrepreneur => {
	entrepreneurs_array.push(`${entrepreneur.first} ${entrepreneur.last}`);
});
console.log(entrepreneurs_array)

console.log("################################################################################################")
console.log("Quel âge aurait chaque inventeur aujourd'hui ?")

entrepreneurs.forEach(entrepreneur => {
	age = 2019 - entrepreneur.year
	console.log(`${entrepreneur.first} ${entrepreneur.last} : ${age}`);
});

console.log("################################################################################################")
console.log("Trie les entrepreneurs par ordre alphabétique du nom de famille.")
entrepreneurs.sort((a,b) => (a.last > b.last) ? 1 : -1); 

################################################################################################

const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("################################################################################################")
console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?")
books.forEach(book => {
	console.log(book.rented>0);
});

console.log("################################################################################################")
console.log("Quel est livre le plus emprunté ?")
books.reduce((acc, i)=>(i.rented > acc.rented ? i : acc))

console.log("################################################################################################")
console.log("Quel est le livre le moins emprunté ?")
books.reduce((acc, i)=>(i.rented < acc.rented ? i : acc))

console.log("################################################################################################")
console.log("Trouve le livre avec l'ID: 873495 ;")
books.filter(book => book.id === 873495);


console.log("################################################################################################")
console.log("Supprime le livre avec l'ID: 133712 ;")

new_books = []
books.forEach(book => {
	if (book.id !==133712){
	new_books.push(book);
	}
});
console.log(new_books)


console.log("################################################################################################")
console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).")
new_books.sort((a,b) => (a.title > b.title) ? 1 : -1); 

################################################################################################
protein = []
inputARN = (prompt("Salut, donne moi un ARN")) ;
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
			protein.push("Proline")
			break;
		case "UUA":
		case "UUG":
			protein.push("Leucine")
			break;
		case "UUU":
		case "UUC":
			protein.push("Phénylalanine")
			break;
		case "CGU":
		case "CGC":
		case "CGA":
		case "CGG":
		case "AGA":
		case "AGG":
			protein.push("Arginine")
			break;
		case "UAU":
		case "UAC":
			protein.push("Tyrosine")
			break;
	}
});
console.log(protein.join("-"));

################################################################################################
input = (prompt("Qu'est-ce-que tu me veux ?")) ;
if(input.substr(input.length - 1) === "?"){
	console.log("Ouais Ouais...");
} else if(input === input.toUpperCase() && input !== "") {
	console.log("Pwa, calme-toi...");
} else if(input.include("Fortnite") || input.include("fortnite")) {
	console.log("on s' fait une partie soum-soum ?");
} else if(input === "") {
	console.log("t'es en PLS ?");
} else {
	console.log("balek.");
};