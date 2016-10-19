/* Independent Practice

Making a favorites list: jQuery

You'll add the ability to complete tasks in your favorite things list. Your program must complete the following rules:

- Using jQuery, add a "complete task" link at the end of each to-do item (i.e. each "favorite thing").
- When clicked, the link will cross out the current item (hint: add a class to the list that sets the text-decoration to line-through).
- Each new item added by the user needs to also have the "complete task" link at the end.

*/


var bottles;
for (counter = 99; counter >= 1; counter = counter - 1) 
{
    if (counter == 1) {
        bottles = 'bottle';
    } else {
        bottles = 'bottles';
    }
    addToList(thingsList,counter+" "+bottles+" of beer on the wall.");
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

var button = document.getElementById('clickme')
//button.onclick = function(event) {
	$('#new-thing-button').click() {

	//grab input field data
	//var input = document.getElementById('newthing').value
	var input = $('#newthing').val()
	console.log(input)

	// create a new li
	var li = document.createElement("li")
	$(".fav-thing").create()
	//create a new text node
	var text = document.createTextNode(input)
	//append the text node to the li
	li.appendChild(text)
	//grab the ul
	//append the li to the ul
	ul.appendChild(li)

}


function addToList(list, input) {

// create a new li
	var li = document.createElement("li");
	//create a new text node
	var text = document.createTextNode(input.value); // sets the text to be the value of the object
	//var text = document.createTextNode(input) sets the text to be the entire object
	//append the text node to the li
	li.appendChild(text);
	//grab the ul
	//append the li to the ul
	list.appendChild(li);
	//clear text box, option 1 pass entire input object so that we can grab text and clear text
	//option 2 we clear the text outside of this function
	input.value = ""; //setting the input value to an empty string

}