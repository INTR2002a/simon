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


// When a panel gets clicked, call the clickpanel function()
$('.panel').on('click', clickpanel);







