// Generate a pattern
var pattern = ['g', 'r', 'y', 'b', 'y'];
var turn = 0;

var clickpanel = function(e) {

	// Get the click
	var colour = $(this).attr('data-color');
	console.log(colour);

	// Check the colour
	if ( colour == pattern[turn] ) {
		console.log("YES!");

		// Shortform for: turn = turn + 1
		turn++;

		// Check if I finished the sequence
		if (turn >= pattern.length) {
			console.log("WINNER");
			// Do something fun
		}
	}
	else {
		console.log("NO!!!!!");

		// Call a function
		gameover();

		// remove a "life" (if you have)
		// If you don't then game over
	}
};

// define a function, store as a variable
var gameover = function() {

	// Fade the simon
	$('.simon').fadeTo(500, 0.5);

	// Alert the user
	$('<h1>Game Over</h1>')
		.insertAfter('.simon')
		.css('text-align','center')
		.on('click', function() {
			// Re add the functionality when you click the H1
			$('.panel').on('click', clickpanel);
		});

	// Remove click functionality
	$('.panel').off('click');

};


// Click and Check
$('.panel').on('click', clickpanel);



