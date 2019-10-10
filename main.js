let deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// figure out how to update the deck (maybe with suits) and to randomly shuffle/deal to the two players

let player1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let player2 = [11, 2, 13, 14, 15, 16, 17, 18, 19, 20]

let thePot = []

// this function moves the top card to the pot
function oneCardToPot(player) {
	thePot.push(player.shift());
}

// this function pushes items from the pot one a time into a player's array AND deletes the item from the pot
function pushPotItems(player) {
	for (let i = 0; i < thePot.length; i++) {
		player.push(thePot[i]);
	}
	thePot = [];
}

// this function creates an alert to update the user about the results of the round
function roundAlert(winner) {
	alert(`End of round. ${winner} wins. Player 1 has ${player1.length} cards. Player 2 has ${player2.length} cards.`);
}

// this function checks to see if the game is over
function gameOver(winner) {
	if (player1.length === 0) {
		alert('Game over. Player 1 is out of cards. Player 2 wins!');
	} else if (player2.length === 0) {
		alert('Game over. Player 2 is out of cards. Player 1 wins!');
	} else {
		roundAlert(winner);
	}
}

// this function compares the values of the cards and adds the pot to the back of the winner's deck
function compareCards() {
	let indexPlayerTwo = thePot.length - 1;
	let indexPlayerOne = thePot.length - 2;
	if (thePot[indexPlayerOne] > thePot[indexPlayerTwo]) {
		pushPotItems(player1);
		gameOver('Player 1');
		// roundAlert('Player 1');
	} else if (thePot[indexPlayerTwo] > thePot[indexPlayerOne]) {
		pushPotItems(player2);
		gameOver('Player 2');
		// roundAlert('Player 2');
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
function playGame() {
	oneCardToPot(player1);
	oneCardToPot(player2);
	compareCards();
}





