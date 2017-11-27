

/****************************************************
				Challenge 1 
*****************************************************/
// Bottles of Beer on the Wall using a for loop

var bottlesOfBeer = " ";

for (var i = 99; i >= 0; i--) {
	bottlesOfBeer += i + " Bottles of Beer on the wall, " + i + " Bottles of Beer.  Take one down, pass it around. " + (i - 1) + " Bottles of Beer on the Wall! ";
}

document.getElementById("output").innerHTML = bottlesOfBeer;


/****************************************************
				Challenge 2 
*****************************************************/
// // Mad Lib generator

function MadLib () {
	var inputOne = document.getElementById("text-1");
	var inputTwo = document.getElementById("text-2");
	var inputThree = document.getElementById("text-3");
	var story = "There once was a " + (inputOne.value) + " who lived by a " + (inputTwo.value) + " and who carried a very " + (inputThree.value);
	output.innerHTML = story;
}


// // Button
document.getElementById("button-1").onclick = function () {
	MadLib();
};


/****************************************************
				Challenge 3 
*****************************************************/
// Facebook "OMG That is So ME!"

// Values
var questionNumber = 1;
var value = 0;
var answers;
var total = 0;

// Questions Array
var questions = ["What is your hair color?", "What is your favorite season?", "Where is your favorite place to live?"];

// Question One
QuestionOne(); 

// Question Functions
function QuestionOne () {
	output.innerHTML = questions[0];
	answers = ["Brown", "Red", "Blonde", "Black"];
	document.getElementById("button-1").childNodes[0].nodeValue = answers[0];
	document.getElementById("button-2").childNodes[0].nodeValue = answers[1];
	document.getElementById("button-3").childNodes[0].nodeValue = answers[2];
	document.getElementById("button-4").childNodes[0].nodeValue = answers[3];
}

function QuestionTwo () {
	output.innerHTML = questions[1];
	answers = ["Spring", "Winter", "Summer", "Fall"];
	document.getElementById("button-1").childNodes[0].nodeValue = answers[0];
	document.getElementById("button-2").childNodes[0].nodeValue = answers[1];
	document.getElementById("button-3").childNodes[0].nodeValue = answers[2];
	document.getElementById("button-4").childNodes[0].nodeValue = answers[3];
}

function QuestionThree () {
	output.innerHTML = questions[2];
	answers = ["Mountains", "Beach", "Forest", "Desert"];
	document.getElementById("button-1").childNodes[0].nodeValue = answers[0];
	document.getElementById("button-2").childNodes[0].nodeValue = answers[1];
	document.getElementById("button-3").childNodes[0].nodeValue = answers[2];
	document.getElementById("button-4").childNodes[0].nodeValue = answers[3];
}

function FinalAnswer () {
	value = value;
	if (value === 3) {
		output.innerHTML = "You are Princess Elsa!";
		CelebrateDisney();
	}
	else if (value > 3 && value >= 6) {
		output.innerHTML = "You are Princess Ariel!";
		CelebrateDisney();
	}
	else if (value > 6 && value >= 9) {
		output.innerHTML = "You are Princess Belle!";
			CelebrateDisney();
	}
	else if (value > 9 && value >= 12) {
		output.innerHTML = "You are Princess Jasmine!";
			CelebrateDisney();
	}
}

// Answer Function
function Answer (valueIncrement) {
		value += valueIncrement;
		total = value + " Magic Coins Counted";
		alert(total);
		questionNumber++;
		if (questionNumber === 2) {
			QuestionTwo();
		}
		else if (questionNumber === 3) {
			QuestionThree();
		}
		if (questionNumber > 3) {
			FinalAnswer();
		}
}


// Buttons
document.getElementById("button-1").onclick = function () {
	Answer (1);
}

document.getElementById("button-2").onclick = function () {
	Answer (2);
}

document.getElementById("button-3").onclick = function () {
	Answer (3);
}

document.getElementById("button-4").onclick = function () {
	Answer (4);
}
// End Buttons

// Celebrate Disney with Random Colors!
function CelebrateDisney () {
	window.setInterval(Update, 250);
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

	if (y > 0) {
		ClearGrid();
		y = 1;
		}
	}
	if (isPaused == true) {
		isPaused = false;
	}
	else {
		isPaused = true;
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
}

// End Disney Celebration




















