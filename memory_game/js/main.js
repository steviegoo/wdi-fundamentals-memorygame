var cards = ["queen","queen","king","king"];
var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay.length < 2) {
		console.log("Pick another card.")
	} else if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
}

var flipCard = function(cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
}

flipCard(2);
flipCard(3);

