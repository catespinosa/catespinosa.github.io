// # 99 Bottles of Beer - DOM Version

// Remember the 99 Bottles of Beer assignment? For this assignment, you'll be creating a website that programatically displays the lyrics to that song.

// 1. You'll need to create both an .html file and a .js file (be sure to link them!)
// 2. If you plan on using jQuery, properly link to an external CDN
// 3. In your HTML file, you'll want to have an unordered list (<ul>) that will contain all of your lyrics
// 4. Each line of the song should appear inside of a list item (<li>) within that unordered list
// 5. Your JavaScript file should programatically append each line of the song to the page--no hard-coding lyrics in HTML!


//create a function that loops through the 99 bottles song and returns the lyrics

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

function addToList(list, bottles) {
//create new li
	var li = document.createElement("li");
//create a new text node
	var text = document.createTextNode(bottles.value); // sets the text to be the value of the object
//append the text node to the li
	li.appendChild(text);
//grab the ul
//append the li to the ul
	list.appendChild(li);

}


//create new li


//create new text node



//append the text node to the li



//grab the ul


//append the li to the ul



//loop to the lyrics again or go back to the first 

