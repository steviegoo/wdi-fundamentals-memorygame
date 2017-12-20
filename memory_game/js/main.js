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
var cardsInPlayId = [];

var unflipCards = function() {
	var c = document.getElementById("game-board").childNodes;
	for (var i = 0; i < cardsInPlayId.length; i++) {
		var cardId = cardsInPlayId[i];
		c[cardId].setAttribute('src', "images/back.png");
	}
	cardsInPlayId = [];
};

var unclickCards = function() {
	var c = document.getElementById("game-board").childNodes;
	for (var i = 0; i < cardsInPlayId.length; i++) {
		var cardId = cardsInPlayId[i];
		c[cardId].removeEventListener('click', flipCard);
	}
};

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		unclickCards();	
		cardsInPlay = [];
		cardsInPlayId = [];
	} else {
		window.setTimeout(unflipCards, 900);
		cardsInPlay = [];
	}
};

var numberOfMoves = 0;
var moveCounter = function () {
	numberOfMoves = numberOfMoves + 1;
	document.getElementById("score").innerHTML = numberOfMoves;
}

var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	cardsInPlayId.push(cardId);
	this.setAttribute('src', cards[cardId].image);
	moveCounter();
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
	window.location.reload(false);
 	click = 0
};

document.getElementById('reset').addEventListener('click', resetWindow);
