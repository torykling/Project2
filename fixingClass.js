// Credit to Blake's blog for helping me get started with classes

class Card {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}

class Deck {
    constructor() {
        this.cards = [];    
    }
                       
    createDeck() {
    let suits = ['clubs', 'diamonds', 'hearts', 'spades'];
    let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
    let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < ranks.length; j++) {
            this.cards.push(new Card(suits[i], ranks[j], values[j]));
        	}
    	}
	}
	shuffleDeck() {
       for(let k = this.cards.length - 1; k > 0; k--) {
		let l = Math.floor(Math.random() * (k+1));
		[this.cards[k], this.cards[l]] = [this.cards[l], this.cards[k]];
		} 
		console.log(this.cards)
    }
}

class Player {
    constructor(name) {
        this.playerName = name;
        this.playerCards = [];
    }
}

class Board {
    constructor() {
        this.cardsInMiddle = [];
        this.players = [];
        this.round = 0;
    }
    start(playerOneName, playerTwoName) {
        this.players.push(new Player(playerOneName));
        this.players.push(new Player(playerTwoName));
        let d = new Deck();
        d.createDeck();
        d.shuffleDeck();    
        this.players[0].playerCards = d.cards.slice(0, 26);
        this.players[1].playerCards = d.cards.slice(26, 52);
    }
    oneCardToPot(num) {
    	this.cardsInMiddle.push(this.players[num].playerCards.pop())
    }
    pushPotItems(num) {
    	for (let i = 0; i < this.cardsInMiddle.length; i++) {
			this.players[num].playerCards.push(this.cardsInMiddle[i]);
		}
		this.cardsInMiddle = [];
		this.round += 1;
    }
    whatCards() {
    	const player1Card = this.cardsInMiddle[this.cardsInMiddle.length-2]
		const player2Card = this.cardsInMiddle[this.cardsInMiddle.length-1]
		console.log(`${this.players[0].playerName} played a ${player1Card.rank} of ${player1Card.suit}. ${this.players[1].playerName} played a ${player2Card.rank} of ${player2Card.suit}.`)
    }
    roundAlert(winner) {
    	if (this.players[0].playerCards.length === 1) {
		console.log(`End of round ${this.round}. ${winner} wins! ${this.players[0].playerName} has 1 card. ${this.players[1].playerName} has ${this.players[1].playerCards.length} cards.`);
		} else if (this.players[1].playerCards.length === 1) {
		console.log(`End of round ${this.round}. ${winner} wins! ${this.players[0].playerName} has ${this.players[0].playerCards.length} cards. ${this.players[1].playerName} has 1 card.`);
		} else {
		console.log(`End of round ${this.round}. ${winner} wins! ${this.players[0].playerName} has ${this.players[0].playerCards.length} cards. ${this.players[1].playerName} has ${this.players[1].playerCards.length} cards.`);
		}
    }
    gameOver(winner) {
    	if (this.players[0].playerCards.length === 0) {
			alert(`GAME OVER. ${this.players[0].playerName} is out of cards. ${this.players[1].playerName} WINS THE GAME!!! Reload the page to play again!`);
			console.log(`GAME OVER. ${this.players[0].playerName} is out of cards. ${this.players[1].playerName} WINS THE GAME!!! Reload the page to play again!`);
		} else if (this.players[1].playerCards.length === 0) {
			alert(`GAME OVER. ${this.players[1].playerName} is out of cards. ${this.players[0].playerName} WINS THE GAME!!! Reload the page to play again!`);
			console.log(`GAME OVER. ${this.players[1].playerName} is out of cards. ${this.players[0].playerName} WINS THE GAME!!! Reload the page to play again!`);
		} else {
			this.checkRoundCount();
			this.roundAlert(winner);
		}
    }
    compareCards() {
    	this.whatCards();
		let indexPlayerTwo = this.cardsInMiddle.length - 1;
		let indexPlayerOne = this.cardsInMiddle.length - 2;
		if (this.cardsInMiddle[indexPlayerOne].value > this.cardsInMiddle[indexPlayerTwo].value) {
			this.pushPotItems(0);
			this.gameOver(`${this.players[0].playerName}`);
		
		} else if (this.cardsInMiddle[indexPlayerTwo].value > this.cardsInMiddle[indexPlayerOne].value) {
	
			this.pushPotItems(1);
			this.gameOver(`${this.players[1].playerName}`);
		
		} else if (this.cardsInMiddle[indexPlayerTwo].value === this.cardsInMiddle[indexPlayerOne].value) { 
		
			alert('A tie! This means war!');
			console.log('A tie! This means war!');
			if (this.players[0].playerCards.length > 3 && this.players[1].playerCards.length > 3) {
				this.war();	
			} else if (this.players[0].playerCards.length < 4) {
				this.players[0].playerCards = [];
				alert(`GAME OVER. ${this.players[0].playerName} does not have enough cards for war and must forfeit. Refresh the page to play again!`);
				console.log(`GAME OVER. ${this.players[0].playerName} does not have enough cards for war and must forfeit. Refresh the page to play again!`);
			} else {
				this.players[1].playerCards = [];
				alert(`GAME OVER. ${this.players[1].playerName} does not have enough cards for war and must forfeit. Refresh the page to play again!`);
				console.log(`GAME OVER. ${this.players[1].playerName} does not have enough cards for war and must forfeit. Refresh the page to play again!`);
			}
		
		} 
    }
    war() {
    	this.oneCardToPot(0);
		this.oneCardToPot(1);
		this.oneCardToPot(0);
		this.oneCardToPot(1);
		this.oneCardToPot(0);
		this.oneCardToPot(1);
		this.oneCardToPot(0);
		this.oneCardToPot(1);
		this.compareCards();
    }
    playGame() {
    	this.oneCardToPot(0);
    	this.oneCardToPot(1);
    	this.compareCards();
    }
    keepPlaying() {
    	while (this.players[0].playerCards.length > 0 && this.players[1].playerCards.length > 0) {
			this.playGame();
		}
    }
    checkRoundCount() {
    	if (this.round >= 2000) {
			alert(`GAME OVER. It's a draw! This game has gone on for thousands of rounds and has no winner.`);
			console.log(`GAME OVER. It's a draw! This game has gone on for thousands of rounds and has no winner.`);
			this.players[0].playerCards = [];
			this.players[1].playerCards = [];
		}
    }
}
let player1Name = prompt("Welcome to War! Please enter a name for Player 1");
let player2Name = prompt("Please enter a name for Player 2. Log game.playGame() to the console to play a round!");
let game = new Board();
game.start(`${player1Name}`, `${player2Name}`);
console.log(game.players);