/* Independent Practice

Making a favorites list: DOM manipulation


- When the user clicks the submit button, take the value they've typed
  into the input box and add it to the list (hint: appendChild)

- Also, when a new item is added to the list, clear the input box.

*/

function addToList(list, input) {

// create a new li
	var li = document.createElement("li")
	//create a new text node
	var text = document.createTextNode(input.value) // sets the text to be the value of the object
	//var text = document.createTextNode(input) sets the text to be the entire object
	//append the text node to the li
	li.appendChild(text)
	//grab the ul
	//append the li to the ul
	list.appendChild(li)
	//clear text box, option 1 pass entire input object so that we can grab text and clear text
	//option 2 we clear the text outside of this function
	input.value = ""; //setting the input value to an empty string

}

window.onload = function() { //gets 'called/executed/invoked' automatically by the browser. 
  // YOUR CODE HERE!
	var ul = document.getElementById("fav-list")

	var button = document.getElementById('new-thing-button')
	button.onclick = function(event) {

		event.preventDefault()
		//grab input field data
		var input = document.getElementById('new-thing');
		addToList(ul,input); // i'm calling the function above
		
	}

};



/*

Bonus:

When they click submit without typing anything, alert the user
"you must type in a value!"
  (Hint: the `value` property of the input box, before anyone types in it,
  is the empty string.)

*/


