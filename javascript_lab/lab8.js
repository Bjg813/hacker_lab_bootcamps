/****************************************************
				Lab 8
Choose your own adventure using objects easy-to-edit story
*****************************************************/

var output = document.getElementById("output");
var nodes = []; 

var currentLink1;
var currentLink2;
var currentLink3;

// Buttons
var buttonOne = document.getElementById("button-1");
buttonOne.onclick = function () { Act(1); };

var buttonTwo = document.getElementById("button-2");
buttonTwo.onclick = function () { Act(2); };

var buttonThree = document.getElementById("button-3");
buttonThree.onclick = function () { Act(3); };

window.onload = function () {
	Initialize();
};


function AddNode (id, text, choiceOne, linkOne, choiceTwo, linkTwo, choiceThree, linkThree) {
	var node = {};
	node.id = id;
	node.text = text;
	node.choiceOne = choiceOne;
	node.linkOne = linkOne;
	node.choiceTwo = choiceTwo;
	node.linkTwo = linkTwo;
	node.choiceThree = choiceThree;
	node.linkThree = linkThree;

	nodes.push(node); // Add the new node to our array.
}

function DisplayNode (id) {
	for (var i = 0; i < nodes.length; i++) { // Loop through all nodes
		if (nodes[i].id === id) { // Check if we've found the right node
				output.innerHTML = nodes[i].text;
				buttonOne.innerHTML = nodes[i].choiceOne;
				buttonTwo.innerHTML = nodes[i].choiceTwo;
				buttonThree.innerHTML = nodes[i].choiceThree;
				currentLink1 = nodes[i].linkOne;
				currentLink2 = nodes[i].linkTwo;
				currentLink3 = nodes[i].linkThree;
		}
	}
}

function Act (action) {
	if (action === 1) {
		DisplayNode(currentLink1);
	}
	if (action === 2) {
		DisplayNode(currentLink2);
	}
	if (action === 3) {
		DisplayNode(currentLink3);
	}
}


function Initialize () { 
	AddNode(0, "It was a dark and stormy night.  What do you do?", 
		"Watch Netflix", 1,
		"Binge on donuts", 2, 
		"Hide from the murderer in your house", 3);
	AddNode(1, "Netflix is not working!", 
		"Restart Apple TV", 5, 
		"Throw Remote", 3, 
		"Stare at Wall", 4);
	AddNode(2, "Donuts are Worms!", 
		"Eat Worms", 3, 
		"Save them for Fishing", 3, 
		"Dump them in Planter", 3);
	AddNode(3, "Your house in on fire!", 
		"Run out the door", 4,
		"Sacrafice yourself for your dog", 4,
		"Call 911", 4);
	AddNode(4, "Your house burned down", 
		"Burn down the dog house", 5,
		"Eat at McDonalds", 5,
		"Turn off your TV", 5);
	AddNode(5, "You Survived!", 
		"Burn down the dog house", 5,
		"Eat at McDonalds", 5,
		"Turn off your TV", 5);

// Displays first node for questioning
DisplayNode(0);

}






