
// Using parameters in functions
function sex (sex1, sex2) {
	alert(sex1 + " " + sex2);
}
// Using arguments in funcitons 
sex("male", "female");


// All Methods used to find time: 
getDay(), getMonth(), getDate(), getFullYear(), getHours(), getMinutes(), getSeconds(), getMilliseconds(), getTime()

// Find what day it is today using new Date object and getDay method
var days = ["Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dateTime = new Date();
var d = dateTime.getDay();
var day = days[d];

function dayOfWeek () {
	if (d === 5) {
	alert(day);
	}
}

dayOfWeek();


// Find time since 1970 using getTime method
function timeSince1970 () {
	var timeSince = dateTime.getTime();
	alert(timeSince)
}

timeSince1970();




