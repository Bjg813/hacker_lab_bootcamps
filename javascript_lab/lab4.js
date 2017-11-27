// Variables
var playerTotal = 0;

// Output Field Variables
var output = document.getElementById("output");

// Buttons
document.getElementById("button-1").onclick = function () {
	Hit ();
}

document.getElementById("button-2").onclick = function () {	
	Stand ();
}

document.getElementById("button-3").onclick = function () {	
	Reset ();
}

// Functions
function Draw () {
	var card = Math.random() * 13;
	card = Math.ceil(card);
	if (card > 10) {
		card = 10;
	}
	return card;
}

function Display (message) {
	var newParagraph = document.createElement("p");
	var textNode = document.createTextNode(message);
	newParagraph.appendChild(textNode);
	output.appendChild(newParagraph);
}

function Hit () {
	var card = Draw ();
	Display (card);
	playerTotal += card;
	if (playerTotal > 21) {
		Display ("Busted") 
		playerTotal = 0;
	}
}

function Stand () {
	var dealerTotal = Draw () + Draw ();
	Display (playerTotal);
	Display (dealerTotal);
	if (playerTotal > dealerTotal) {
		Display ("Won!");
	}
	else {
		Display ("Lost");
	}
	playerTotal;
}

function Reset () {
	while (output.hasChildNodes()) {
		output.removeChild(output.firstChild);
	}
	playerTotal;
}
	

