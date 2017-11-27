
// Designs the animation in the landing page
function load_sketch_animation(){
var path = document.querySelector('.path-1');
if(path){
	var length = path.getTotalLength();
	// Set up the starting positions
	path.style.transition = path.style.WebkitTransition = 'none';
	// Set up the starting position
	path.style.strokeDasharray = length + ' ' + length;
	path.style.strokeDashoffset = length;
	// Trigger a layout so styles are calculated & the browser picks up the starting position before animation
	path.getBoundingClientRect();
	// Define our transition
	path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
	// Go!
	path.style.strokeDashoffset = '0';

	var path = document.querySelector('.path-2');
	var length = path.getTotalLength();
	// Set up the starting positions
	path.style.transition = path.style.WebkitTransition = 'none';
	// Set up the starting position
	path.style.strokeDasharray = length + ' ' + length;
	path.style.strokeDashoffset = length;
	// Trigger a layout so styles are calculated & the browser picks up the starting position before animation
	path.getBoundingClientRect();
	// Define our transition
	path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 3s ease-in-out';
	// Go!
	path.style.strokeDashoffset = '0';

	var path = document.querySelector('.path-3');
	var length = path.getTotalLength();
	// Set up the starting positions
	path.style.transition = path.style.WebkitTransition = 'none';
	// Set up the starting position
	path.style.strokeDasharray = length + ' ' + length;
	path.style.strokeDashoffset = length;
	// Trigger a layout so styles are calculated & the browser picks up the starting position before animation
	path.getBoundingClientRect();
	// Define our transition
	path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 4s ease-in-out';
	// Go!
	path.style.strokeDashoffset = '0';

	var path = document.querySelector('.path-4');
	var length = path.getTotalLength();
	// Set up the starting positions
	path.style.transition = path.style.WebkitTransition = 'none';
	// Set up the starting position
	path.style.strokeDasharray = length + ' ' + length;
	path.style.strokeDashoffset = length;
	// Trigger a layout so styles are calculated & the browser picks up the starting position before animation
	path.getBoundingClientRect();
	// Define our transition
	path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 5s ease-in-out';
	// Go!
	path.style.strokeDashoffset = '0';

	var path = document.querySelector('.path-5');
	var length = path.getTotalLength();
	// Set up the starting positions
	path.style.transition = path.style.WebkitTransition = 'none';
	// Set up the starting position
	path.style.strokeDasharray = length + ' ' + length;
	path.style.strokeDashoffset = length;
	// Trigger a layout so styles are calculated & the browser picks up the starting position before animation
	path.getBoundingClientRect();
	// Define our transition
	path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 6s ease-in-out';
	// Go!
	path.style.strokeDashoffset = '0';

	var path = document.querySelector('.path-6');
	var length = path.getTotalLength();
	// Set up the starting positions
	path.style.transition = path.style.WebkitTransition = 'none';
	// Set up the starting position
	path.style.strokeDasharray = length + ' ' + length;
	path.style.strokeDashoffset = length;
	// Trigger a layout so styles are calculated & the browser picks up the starting position before animation
	path.getBoundingClientRect();
	// Define our transition
	path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 7s ease-in-out';
	// Go!
	path.style.strokeDashoffset = '0';
	}

}

load_sketch_animation();