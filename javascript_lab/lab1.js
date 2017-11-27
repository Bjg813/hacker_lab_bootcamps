

document.getElementById("button-1").onclick = function () {
	DisplayText();
};

function DisplayText () {
	document.getElementById("output").innerHTML = "Hello World!";
}

document.getElementById("button-2").onclick = function () {
	DisplayText1();
};

function DisplayText1 () {
	document.getElementById("output").innerHTML = "Hello Moon!";
}

document.getElementById("button-3").onclick = function () {
	DisplayText2();
};

function DisplayText2 () {
	document.getElementById("output").innerHTML = "Hello Mars!";
}

document.getElementById("button-4").onclick = function () {
	DisplayText3();
};

function DisplayText3 () {
	document.getElementById("output").innerHTML = "Hello Jupiter!";
}




