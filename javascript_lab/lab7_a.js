
/****************************************************
				Challenge 4 
*****************************************************/

// Values of Cookies
var cookie = 0;
var grandma = 0;
var cursor = 0;
var cookieFarm = 0;
var totalCookie = 0;
var buyCookiesButtons;

// Values of Buttons to Buy Cookies and Reset
var buttonOne = document.getElementById("button-1");
var buttonTwo = document.getElementById("button-2");
var buttonThree = document.getElementById("button-3");
var buttonFour = document.getElementById("button-4");

// Setting Interval of Window 
window.setInterval(AutoCookie, 5000);

// Default Button Display
BuyButtons();

// Cookie Functions
// Buy Cookie Button Descriptions 
function BuyButtons () {
	buyCookiesButtons = ["Cursor(+1) = 10(Cost)", "Grandmas(*2) = 50(Cost)", "Cookie Farm(*4) = 100(Cost)", "Clear Bakery"];
	buttonOne.childNodes[0].nodeValue = buyCookiesButtons[0];
	buttonTwo.childNodes[0].nodeValue = buyCookiesButtons[1];
	buttonThree.childNodes[0].nodeValue = buyCookiesButtons[2];
	buttonFour.childNodes[0].nodeValue = buyCookiesButtons[3];
}

// When clicked adds one cookie then displayed in output box
function AddCookie() {
	cookie += 1;
	totalCookie++;
	output.innerHTML = totalCookie + " Cookies!";
}

// Add Cookies Function you can buy with numbers and add to total number of cookies
function AddCursor () {
	if (totalCookie > 10) {
	totalCookie -= 10;
	cursor += 1;
	}
	output.innerHTML = totalCookie + " Cookies!";
}

function AddGrandma () {
	if (totalCookie > 50) {
	totalCookie -= 50;
	grandma += 1;
	}
	output.innerHTML = totalCookie + " Cookies!";
}

function CookieFarm () {
	if (totalCookie > 100) {
	totalCookie -= 100;
	cookieFarm += 1;
	}
	output.innerHTML = totalCookie + " Cookies!";
}

function AutoCookie () {
	totalCookie += cursor + (grandma * 2) + (cookieFarm * 4);
	output.innerHTML = totalCookie + " Cookies!";
}

// Buttons
document.getElementById("button-1").onclick = function () {
	AddCursor();
}

document.getElementById("button-2").onclick = function () {
	AddGrandma();
}

document.getElementById("button-3").onclick = function () {
	CookieFarm();
}

// Cookie Button
document.getElementById("grid-3-3").addEventListener("click", AddCookie);






