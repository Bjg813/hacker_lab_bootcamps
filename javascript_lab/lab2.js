
// Numeric Input Fields-Variables
var inputOne = document.getElementById("number-1");
var inputTwo = document.getElementById("number-2");
var inputThree = document.getElementById("number-3");


// Output Field Variables
var output = document.getElementById("output");



// Calculation Functions
function CircleArea (radius) {
	return radius * radius * 3.14;
}

function Circumference (radius) {
	return radius * 6.28;
}

function RectangleArea (width, height) {
	return width * height;
}
 
function BoxVolume (width, height, depth) {
	return width * height * depth;
}


// Outputting Results Function
function DisplayText (action) {
	if (action == "circleArea") {
		output.innerHTML = "The area is " + CircleArea(inputOne.value);
	}
	if (action == "circumference") {
		output.innerHTML = "The circumference is " + Circumference(inputOne.value);
	}
	if (action == "rectangleArea") {
		output.innerHTML = "The area is " + RectangleArea(inputOne.value, inputTwo.value);
	}
	if (action == "boxVolume") {
		output.innerHTML = "The volume is " + BoxVolume(inputOne.value, inputTwo.value, inputThree.value);
	}
}

// Buttons
document.getElementById("button-1").onclick = function () {
	DisplayText("circleArea");
};

document.getElementById("button-2").onclick = function () {
	DisplayText("circumference");
};

document.getElementById("button-3").onclick = function () {
	DisplayText("rectangleArea");
};

document.getElementById("button-4").onclick = function () {
	DisplayText("boxVolume");
};



