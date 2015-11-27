// Generate a pattern
var pattern = ['g', 'r', 'y', 'b', 'y'];
var turn = 0;

var clickpanel = function(e) {

	// Get the click, this refers to the caller
	var colourclicked = $(this).attr('data-color');   // g, r, y, b
	console.log(colourclicked);

	// Check the colour
	if ( colourclicked == pattern[turn] ) {
		console.log("YES!");

		// Shortform for: turn = turn + 1
		turn++;

		// Check if I finished the sequence
		if (turn >= pattern.length) {
			console.log("WINNER");
			gameover("WINNER");
		}
	}
	else {
		console.log("NO!!!!!");

		// Call a function
		gameover("Game Over");

		// remove a "life" (if you have)
		// If you don't then game over
	}
};


// define a function, store as a variable
var gameover = function(message) {

	// Fade the simon
	$('.simon').fadeTo(500, 0.5);

	// Alert the user
	$('<h1>' + message + '</h1>')
		.insertAfter('.simon')
		.css({'text-align':'center', 'position':'relative', 'z-index':'999'})
		.on('click', function() {
			// Re add the functionality when you click the H1
			$('.panel').on('click', clickpanel);
		});

	// Remove click functionality
	$('.panel').off('click');

};


// Setup an index for flashing
var i = 0;
var timer; // global so we can clear it

// Flash one panel and move the index
var flashpanels = function() {
	
	// Flash each of the colours in sequence
	$('.panel[data-color="' + pattern[i] + '"]')
		.fadeOut(100)
		.fadeIn(100);

	// Increase the array index value
	i++;

	// If we don't have any more panels to flash, stop the flasher
	if (i >= pattern.length) {
		clearInterval(timer); // stop timer
		i = 0; // Setup index at 0 for next time
	}
};


// Generate a new value for our array
var generatenewpanel = function() {

	// Add new value to sequence
	// COMPLETE IN WEEK 13
	

	// Setup a timer that runs every 200 ms that will flash the panel
	timer = setInterval(flashpanels, 200);
};




// DOCUMENT IS READY:

// When a panel gets clicked, call the clickpanel function()
$('.panel').on('click', clickpanel);



