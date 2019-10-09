let deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// figure out how to update the deck (maybe with suits) and to randomly shuffle/deal to the two players

let player1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let player2 = [6, 7, 8, 9, 10, 11, 12, 13, 14]

let thePot = []

// this function moves the top card to the pot
function oneCardToPot(player) {
	thePot.push(player.shift())
}

// this function makes war happen
function war() {
	oneCardToPot(player1);
	oneCardToPot(player2);
	oneCardToPot(player1);
	oneCardToPot(player2);
	oneCardToPot(player1);
	oneCardToPot(player2);
	oneCardToPot(player1);
	oneCardToPot(player2);
	compareCards();
}

// this function compares the values of the cards and adds the pot to the back of the winner's deck
function compareCards() {
	if (thePot[thePot.length-1] > thePot[thePot.length-2]) {
		player1.push(thePot);
	} else if (thePot[thePot.length-2] > thePot[thePot.length-1]) {
		player2.push(thePot);
	} else { 
		war();
	}
}


playOneCard(player1);
playOneCard(player2);

war();
console.log(thePot);