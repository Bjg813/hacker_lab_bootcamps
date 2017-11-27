var x = true;

function ExampleFunction (y, z) {
	var answer = y + z;
	return answer;
}

function LoopExample() {
	for (var i = 0; i < 10; i++) {
	console.log("The counter is at " + i);
	}
	x = ExampleFunction(3, 5);
	if (x > 5) {
		console.log("x is greater then 5");
	}
	else if (x > 10) {
		console.log("x is greater then 10");
	}
}







