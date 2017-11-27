
// Array
var array = [8, 3, 5, 4, 9, 7, 6];
	document.getElementById("output").innerHTML = array.join();


// Buttons
function InsertionSort () {
	for (var i = 1; i < array.length; i++) {
		var tempValue = array[i];
		for (var j = i; j > 0; j--) {
			if (array[j] < array[j-1]) {
				tempValue = array[j];
				array[j] = array[j-1];
				array[j-1] = tempValue;
			}
		}
	}
	document.getElementById("output").innerHTML = array.join();
}

document.getElementById("button-1").onclick = function () {
	InsertionSort ();
};






