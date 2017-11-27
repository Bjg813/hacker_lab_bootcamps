
window.setInterval(Update, 500);

// variables
var x = 0;
var y = 1;
var isPaused = false; // pause button

function Update () {
	if (isPaused == false) {
	x++;
	if (x > 5) {
		x = 1;
		y++
	}

	if (y > 5) {
		ClearGrid();
		y = 1;
	}
document.getElementById("grid-" + x + "-" + y).style.backgroundColor = "red";
	}
}

function ClearGrid () {
	for (var x = 1; x <= 5; x++) {
		for (var y = 1; y <= 5; y++) {
		document.getElementById("grid-" + x + "-" + y).style.backgroundColor = "white";
		}
	}
}

document.getElementById("button-1").onclick = function () {

	if (isPaused == true) {
		isPaused = false;
	}
	else {
		isPaused = true;
	}
}
