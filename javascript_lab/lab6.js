
// Challenge 1
// document.getElementById("button-1").onclick = function () {
// 	document.getElementById("output").innerHTML = "Hello World!";
// }

// Challenge 2
var fortunes = ["You are who you are", "You are who you arent", "I wouldn't eat that", "The last time she looked at you was the superbowl, or was it?", "Every time you eat this you are getting smarter"];

function DrawFortune () {
	var fortune = Math.random() * fortunes.length;
	fortune = Math.floor(fortune);
	document.getElementById("output").innerHTML = fortunes[fortune];
}

document.getElementById("button-2").onclick = function () {	
	InputData ();
}

// Challenge 3
var dataCollections = ["one", "two", "three"];

function InputData () {
	var input = document.getElementById("text-1").value;
	dataCollections.push(input);
	document.getElementById("output").innerHTML = dataCollections.join();

}

// Challenge 4
var randomNumber;

document.getElementById("button-4").onclick = function() {
	randomNumber = Math.random() * 10;
	randomNumber = Math.floor(randomNumber);
	InputGuess();
} 

function InputGuess () {
	var playerGuess = document.getElementById("text-2").value;
	if (randomNumber > playerGuess) {
		document.getElementById("output").innerHTML = "Too Low";
	}
	else if (randomNumber < playerGuess) {
		document.getElementById("output").innerHTML = "Too Hi!";
	}
	else  {
		document.getElementById("output").innerHTML = "Guess is correct!";
	}
}

// Challenge 5 (Star Trek)

// Updates Frequency 
window.setInterval(Update, 50);

// Tiles Variables
var x = 0;
var y = 1;
var isPaused = false; // pause button

// Updates Function
function Update () {
	if (isPaused === false) {
		x++;
	if (x > 0) {
		x = 0;
		y++;
	}

	if (y > 5) {
		ClearGrid();
		y = 1;
		}
	}
}

function ClearGrid () {
	for (var x = 1; x <= 5; x++) {
		for (var y = 1; y <= 5; y++) {
			var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

		document.getElementById("grid-" + x + "-" + y).style.backgroundColor = hue;
		}
	}
}

// Change color of whole page with button and stop randomnization
function ChangeColorBeginning () {
	for (var x = 1; x <= 5; x++) {
		for (var y = 1; y <= 5; y++) {
		document.getElementById("grid-" + x + "-" + y).style.backgroundColor = "red";
		}
	}
	if (isPaused == true) {
		isPaused = false;
	}
	else {
		isPaused = true;
	}
}

// When paused displays colors horizontally
function ColorFinderHorizontal () {
	for (var x = 1; x <= 2; x++) {
		for (var y = 1; y <= 5; y++) {
		document.getElementById("grid-" + x + "-" + y).style.backgroundColor = "red";
		}
	}
	for (var x = 4; x <= 5; x++) {
		for (var y = 1; y <= 5; y++) {
		document.getElementById("grid-" + x + "-" + y).style.backgroundColor = "yellow";
		}
	}
	if (isPaused == true) {
		isPaused = false;
	}
	else {
		isPaused = true;
	}
}

// When paused displays colors vertically
function ColorFinderVertical () {
	for (var x = 1; x <= 5; x++) {
		for (var y = 1; y <= 2; y++) {
		document.getElementById("grid-" + x + "-" + y).style.backgroundColor = "red";
		}
	}
	for (var x = 1; x <= 5; x++) {
		for (var y = 4; y <= 5; y++) {
		document.getElementById("grid-" + x + "-" + y).style.backgroundColor = "yellow";
		}
	}
	if (isPaused == true) {
		isPaused = false;
	}
	else {
		isPaused = true;
	}
}

// When paused displays color of whole page
function ChangeColorEnd () {

	for (var x = 1; x <= 2; x++) {
		for (var y = 1; y <= 2; y++) {
		document.getElementById("grid-" + x + "-" + y).style.backgroundColor = "red";
		}
	}
	for (var x = 4; x <= 5; x++) {
		for (var y = 4; y <= 5; y++) {
		document.getElementById("grid-" + x + "-" + y).style.backgroundColor = "red";
		}
	}
	for (var x = 4; x <= 5; x++) {
		for (var y = 1; y <= 2; y++) {
		document.getElementById("grid-" + x + "-" + y).style.backgroundColor = "red";
		}
	}
	for (var x = 1; x <= 2; x++) {
		for (var y = 4; y <= 5; y++) {
		document.getElementById("grid-" + x + "-" + y).style.backgroundColor = "red";
		}
	}
	if (isPaused == true) {
		isPaused = false;
	}
	else {
		isPaused = true;
	}
}

// Buttons
document.getElementById("button-1").onclick = function () {
	ChangeColorBeginning();
}

document.getElementById("button-2").onclick = function () {
	ColorFinderHorizontal();
}

document.getElementById("button-3").onclick = function () {
	ColorFinderVertical();
}

document.getElementById("button-4").onclick = function () {
	ChangeColorEnd();
}






// // Challenge 6
// // Arrays
// var insultBeginnings = ["Shut up, ", "You're a failed abortion whose ", "You must have been born on a highway, ", "Your family tree is a cactus "];
// var insultEndings = ["you'll never be the man your mother is.", "birth certificate is an apology from the condom factory.", "because that's where most accidents happen.", "because everybody on it is a prick."];


// function InsultGenerator () {
// 	var insultFirst = insultBeginnings[Math.floor(Math.random() * insultBeginnings.length)];
// 	var insultLast = insultEndings[Math.floor(Math.random() * insultEndings.length)];
// 	var insultComplete = insultFirst + insultLast;
// 	document.getElementById("output").innerHTML = insultComplete; 
// }

// document.getElementById("button-1").onclick = function () {
// 	InsultGenerator();	
// }

// var variable = array[Math.floor(Math.random() * array.length)];



