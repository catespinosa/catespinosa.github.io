/*

	Closures Exercise: Sticky Notes

	Goal:
	Use a closure to help you create colored sticky notes dynamically in your DOM with the click of a button. The results should look something like goal.png

	Instructions:
	Note: The CSS is all setup for you (don't edit the style.css file). You will need to work on the index.html and app.js files.

	HTML
	- Create input and button elements - maybe use a form :)
	- Your inputs should capture the color of the sticky note and the sticky note's message

	JS
	- Ensure your JS runs only after document is ready (note: jQuery is included)
	- Attach the proper event handler to your DOM input element(s)
	- Capture the sticky note color and message; properly store these inputs using variables
	- Similar to the farm exercise, you will have to use jQuery to:
		1) Create a new <div> element
		2) Give this new <div> a class of "box"
		3) Add text to this <div> containing:
			a) A number representing the order of its creation (this is where your closure will come in handy)
			b) The text the user entered into the input from the HTML step above
		4) This <div> should have a background color matching the color from the user input
		5) Ensure this <div> is appended to the <div class="container">
	- After a user enters a stick note, clear the inputs

	Bonus:
	- Remove a sticky note if a user clicks on it
*/


//- Ensure your JS runs only after document is ready (note: jQuery is included)
$(document).ready(function() {
	var container = $('.container');
	var count = 1;

	//- Attach the proper event handler to your DOM input element(s)
	$('#submitBtn').click(function(event){
		event.preventDefault();
		//1) Create a new <div> element
		var message = $('#messageinput').val();
		var newcolor = $('#colorinput').val();
		var newdiv = $('<div>');
		counter = count ++;
		//2) Give this new <div> a class of "box"
		newdiv.addClass('box').html(counter + ". " + message).css('background-color',newcolor).css('font-size', '14px'); 
	    $('.container').append(newdiv);
		//add text to this div
		
		// $('.box').append(counter + '.' + message);

		$('#messageinput').val('');
		$('#colorinput').val('');
		
	});
	container.on('click', '.box', function () {
    $(this).remove();
	});

});
