var cards = [
	{
		rank: "queen",
		suit: "hearts",
		image: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		image: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		image: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		image: "images/king-of-diamonds.png"
	}
];
var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay.length < 2) {
		console.log("Pick another card.")
	} else if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!"); //alert in example, but switched to console.log here
	} else {
		console.log("Sorry, try again."); //alert in example, but switched to console.log here
	}
}

var flipCard = function(cardId) {
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].image);
	console.log(cards[cardId].suit);
	checkForMatch()
};

flipCard(0);
flipCard(2);

