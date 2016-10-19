// # 99 Bottles of Beer - DOM Version

// Remember the 99 Bottles of Beer assignment? For this assignment, you'll be creating a website that programatically displays the lyrics to that song.

// 1. You'll need to create both an .html file and a .js file (be sure to link them!)
// 2. If you plan on using jQuery, properly link to an external CDN
// 3. In your HTML file, you'll want to have an unordered list (<ul>) that will contain all of your lyrics
// 4. Each line of the song should appear inside of a list item (<li>) within that unordered list
// 5. Your JavaScript file should programatically append each line of the song to the page--no hard-coding lyrics in HTML!


function addToList(list,song) {

	// create a new li
	var li = document.createElement("li");
	console.log(li)
	//create a new text node
	var text = document.createTextNode(counter.value); // sets the text to be the value of the object
	//var text = document.createTextNode(input) sets the text to be the entire object
	//append the text node to the li
	li.appendChild(text);
	//grab the ul
	//append the li to the ul
	list.appendChild(li);
	//clear text box, option 1 pass entire input object so that we can grab text and clear text
	//option 2 we clear the text outside of this function
}

function bottleSong (counter) {
	var bottles;

	for (counter = 99; counter >= 1; counter = counter - 1) 
	{
    	if (counter == 1) {
        	bottles = 'bottle';
    	} else {
        	bottles = 'bottles';
    	}
    	console.log(counter+" "+bottles+" of beer on the wall.");
    	if (counter < 99) {
        console.log("");
        console.log(counter+" "+bottles+" of beer on the wall.");
    	}
    	console.log(counter+" "+bottles+" of beer.");
    	console.log("Take one down.");
    	console.log("Pass it around.");
    	if (counter == 1) {
        console.log("No bottles of beer on the wall.");
    	}
	}
}
//on window load, create a new li with 99 bottles of beer opening line


//create new li



//create new text node


//append the text node to the li




//grab the ul
//append the li to the ul


//loop through the lyrics to do it again



//window.onload = function() { //gets 'called/executed/invoked' automatically by the browser. 
  // YOUR CODE HERE!
	
	window.onload = function() {
		//grab input field data
		var ul = document.getElementById('lyrics');
		var song = document.getElementById('bottles');
		addToList(ul,song); // i'm calling the function above

};






