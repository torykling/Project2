// const cards = {
// 	hearts: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
// 	spades: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
// 	clubs: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
// 	diamonds: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
// }

// const deck = cards.hearts.concat(cards.spades, cards.clubs, cards.diamonds);

// original deck - no suit or face value
let deck = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14]
// this function shuffles the deck randomly- found a Fisher-Yates shuffle on javascript info
function shuffle() {
	for(let k = deck.length - 1; k > 0; k--) {
		let l = Math.floor(Math.random() * (k+1));
		[deck[k], deck[l]] = [deck[l], deck[k]];
	}
}
// this function splits the deck in two and deals to players
function dealCards() {
	for(let m = 0; m < deck.length; m++) {
		if (m % 2 === 0) {
			player1.push(deck[m]);
		} else {
			player2.push(deck[m]);
		}
	}
}
// this starts the game
function startGame() {
	shuffle();
	dealCards();
	alert('The cards have been shuffled and dealt. Ready to play! Log playGame() to the console to begin!');
}
// (someday figure out how to update the deck with suits)

let player1 = []
let player2 = []

let thePot = []

// this function moves the top card to the pot
const oneCardToPot = (player) => thePot.push(player.shift());
const player1Card = thePot[thePot.length-2];
const player2Card = thePot[thePot.length-1];
// this function pushes items from the pot one a time into a player's array AND deletes the item from the pot
function pushPotItems(player) {
	for (let i = 0; i < thePot.length; i++) {
		player.push(thePot[i]);
	}
	thePot = [];
}

// this function creates an alert to update the user about the results of the round
const roundAlert = (winner) => alert(` Player 1 played a ${player1Card}. Player 2 played a ${player2Card}. End of round. ${winner} wins! Player 1 has ${player1.length} cards. Player 2 has ${player2.length} cards.`);


// this function checks to see if the game is over
function gameOver(winner) {
	if (player1.length === 0) {
		alert('Game over. Player 1 is out of cards. Player 2 wins the game!!! Reload the page to play again!');
	} else if (player2.length === 0) {
		alert('Game over. Player 2 is out of cards. Player 1 wins the game!!! Reload the page to play again!');
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

//welcome alert
alert('Welcome to war! Log startGame() to the console to start the game.');

// need to figure out a prompt that would allow the players to enter their names and rename player1 and player2

