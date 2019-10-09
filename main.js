let deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// figure out how to update the deck (maybe with suits) and to randomly shuffle/deal to the two players

let player1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let player2 = [11, 12, 13, 14, 15, 16, 17, 18]

let thePot = []

// this function moves the top card to the pot
function oneCardToPot(player) {
	thePot.push(player.shift())
}

// this function pushes items from the pot one a time into a player's array AND deletes the item from the pot
function pushPotItems(player) {
	for (let i = 0; i < thePot.length; i++) {
		player.push(thePot[i]);
		
	}
}

// this function compares the values of the cards and adds the pot to the back of the winner's deck
function compareCards() {
	let indexPlayerOne = thePot.length - 1;
	let indexPlayerTwo = thePot.length - 2;
	if (thePot[indexPlayerTwo] > thePot[indexPlayerTwo]) {
		player1.push(thePot);
		console.log('Player1 wins')
	} else if (thePot[indexPlayerTwo] > thePot[indexPlayerOne]) {
		player2.push(thePot);
		console.log('Player2 wins')
	} else { 
		console.log('A tie! This means war!')
		war();
	}
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

// this function initiates the game play
function gamePlay() {
	oneCardToPot(player1);
	oneCardToPot(player2);
	compareCards();
}

// comments here for checking things out in the console
// console.log(player1);
// oneCardToPot(player1);
// console.log(player1);
// oneCardToPot(player2);
// war();
// console.log(thePot);





