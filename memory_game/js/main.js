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
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again."); 
	}
};

var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].image);
	if(cardsInPlay.length === 2) {
		checkForMatch();
	}
};

var randomize = function(myArray) {
  	var i = myArray.length;
  	if ( i == 0 ) return false;
  	while ( --i ) {
     	var j = Math.floor( Math.random() * ( i + 1 ) );
     	var tempi = myArray[i];
     	myArray[i] = myArray[j];
     	myArray[j] = tempi;
   	}
};

var createBoard = function() {
	randomize(cards);
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

createBoard();

var resetWindow = function() {
	window.location.reload(false)
};

document.getElementById('reset').addEventListener('click', resetWindow);
