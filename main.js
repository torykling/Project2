// create a player name 
let player1Name = prompt("Welcome to War! Please enter a name for Player 1");
let player2Name = prompt("Please enter a name for Player 2. Log startGame() to the console to begin.");


// creating a card class to build the deck
class Card {
	constructor(suit, rank, score) {
		this.suit = suit;
		this.rank = rank;
		this.score = score;
	}
}
// using a nested for loop to create the deck
const deck = [];
const suit = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
const rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
const score = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
for (let i = 0; i < 4; i++) {
	for (let j = 0; j < 13; j++) {
		const card = new Card(suit[i], rank[j], score[j]);
		deck.push(card);
	}
}

// original deck - no suit or face value
// let deck = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14]
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
	alert('The cards have been shuffled and dealt. Ready to play! Log playGame() to draw your cards!');
}


let player1 = []
let player2 = []

let thePot = []

// this function moves the top card to the pot
const oneCardToPot = (player) => thePot.push(player.shift());
// this function pushes items from the pot one a time into a player's array AND deletes the item from the pot
function pushPotItems(player) {
	for (let i = 0; i < thePot.length; i++) {
		player.push(thePot[i]);
	}
	thePot = [];
}
// this function identifies the cards that each player played
const whatCards = () => {
	const player1Card = thePot[thePot.length-2]
	const player2Card = thePot[thePot.length-1]
	console.log(`${player1Name} played a ${player1Card.rank} of ${player1Card.suit}. ${player2Name} played a ${player2Card.rank} of ${player2Card.suit}.`)
}

let round = 0;
// this function counts the rounds
function roundCount() {
	round += 1;
	// callback();
}
// this function creates an alert to update the user about the results of the round
const roundAlert = (winner) => console.log(`End of round ${round}. ${winner} wins! ${player1Name} has ${player1.length} cards. ${player2Name} has ${player2.length} cards.`);


// this function checks to see if the game is over
function gameOver(winner) {
	if (player1.length === 0) {
		alert(`GAME OVER. ${player1Name} is out of cards. ${player2Name} WINS THE GAME!!! Reload the page to play again!`);
		console.log(`GAME OVER. ${player1Name} is out of cards. ${player2Name} WINS THE GAME!!! Reload the page to play again!`);
	} else if (player2.length === 0) {
		alert(`GAME OVER. ${player2Name} is out of cards. ${player1Name} WINS THE GAME!!! Reload the page to play again!`);
		console.log(`GAME OVER. ${player2Name} is out of cards. ${player1Name} WINS THE GAME!!! Reload the page to play again!`);
	} else {
		roundCount();
		roundAlert(winner);
	}
}

// this function compares the values of the cards and adds the pot to the back of the winner's deck
function compareCards() {
	whatCards();
	let indexPlayerTwo = thePot.length - 1;
	let indexPlayerOne = thePot.length - 2;
	if (thePot[indexPlayerOne].score > thePot[indexPlayerTwo].score) {
		
		pushPotItems(player1);
		gameOver(`${player1Name}`);
		// roundAlert('Player 1');
	} else if (thePot[indexPlayerTwo].score > thePot[indexPlayerOne].score) {
		// whatCards();
		pushPotItems(player2);
		gameOver(`${player2Name}`);
		// roundAlert('Player 2');
	} else if (thePot[indexPlayerTwo].score === thePot[indexPlayerOne].score) { 
		// whatCards();
		alert('A tie! This means war!')
		if (player1.length > 3 && player2.length > 3) {
			war();	
		} else if (player1.length < 4) {
			alert(`GAME OVER. ${player1Name} does not have enough cards for war and must forfeit. Refresh the page to play again!`);
			console.log(`GAME OVER. ${player1Name} does not have enough cards for war and must forfeit. Refresh the page to play again!`);
		} else {
			alert(`GAME OVER. ${player2Name} does not have enough cards for war and must forfeit. Refresh the page to play again!`);
			console.log(`GAME OVER. ${player2Name} does not have enough cards for war and must forfeit. Refresh the page to play again!`);
		}
		
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

// function to end the game quickly
function keepPlaying() {
	while (player1.length > 0 && player2.length > 0) {
		playGame();
	}
}

//welcome alert
// alert('Welcome to war! Log startGame() to the console to start the game.');


