/*

Virtual Farm

Goal: You'll be creating a virtual farm whose animals can be clicked on to get an alert displaying their name and what sound they make

Instructions:

1) Create a top-level "FarmAnimal" object that all the other farm animals will inherit from
2) FarmAnimal must have "name", "sound", and "image" instance props, and a "talk" instance method (talk should alert the animal's name and its sound)
3) Create at least three different animals for your farm (remember to inherit from "FarmAnimal" by changing the "prototype" of your animals)

	- Give each animal a name, a sound, and an image (use the web and copy an image path)

4) Once you build your animal constructors, create an instance of each animal and push that instance into the "farmAnimals" array

	ex:

	new rooter = new Rooster('Roger');
	farmAnimals.push(rooster);

5) Lastly, iterate over the "farmAnimals" array and append each of your animals to the DOM
	- You will have to create a new DOM element (a <div> is recommended)
	- This new <div> needs to have the CSS class "animal"
	- Assign this <div> random "bottom" and "left" attributes (this is so animals do not overlap each other in the DOM)

		Hint: use %-based values (bottom: 50%; left: 25%)

	- This <div>'s background should be the animal's image

		Hint: background-image: url('http://some-url-here.com')

	- Each <div> should have a click event that alerts the name of the animal and the sound that it makes
	- Append each new <div> to the body

		Hint: $('body').append(yourElement)
*/


$(document).ready(function () {
	function FarmAnimal(name,sound,image) {
		this.name = name;
		this.sound = sound;
		this.image = image;
	}


	//talk instance method
	FarmAnimal.prototype.talk = function () {
	    console.log(sound + 'hello my name is' + name);
	};

	//create at least 3 animals - constructors
	function Dog(name,sound,image){
		FarmAnimal.call(this, name,sound,image);
	}

	function Cow(name,sound,image){
		FarmAnimal.call(this, name,sound,image);
	}

	function Sheep(name,sound,image){
		FarmAnimal.call(this, name,sound,image);
	}

//create an instance of the animals
	var pablo = new Dog('Skip','ruff-ruff','https://guildofshepherdsandcollies.com/wp-content/uploads/2015/11/Fotolia_76429030_Subscription_Monthly_M-1024x727.jpg');
	var cow = new Cow('Lucy','Mooo','http://vignette4.wikia.nocookie.net/creepypasta/images/f/fc/700cow.jpg');

	var sheep = new Sheep('Dolly','Baaaa','https://a2ua.com/sheep/sheep-004.jpg')

	// push all animal instances here
	var farmAnimals = [];

	farmAnimals.push(pablo);
	farmAnimals.push(cow);
	farmAnimals.push(sheep);


	//loop through the results

// Lastly, iterate over the "farmAnimals" array and append each of your animals to the DOM
// - You will have to create a new DOM element (a <div> is recommended)
// - This new <div> needs to have the CSS class "animal"
// - Assign this <div> random "bottom" and "left" attributes (this is so animals do not overlap each other in the DOM)

// 		Hint: use %-based values (bottom: 50%; left: 25%)

// This <div>'s background should be the animal's image

// 		Hint: background-image: url('http://some-url-here.com')

	// farmAnimals.forEach(function(oneanimal){
	// 	//create the dom element using jquery
	// 	var element = $('<img>').attr('src', 'FarmAnimal.image');
	// 	//grab the dom element and append the images	
	// 	$('.animal').append(element);
	// });

	var margin_left = 0;
	farmAnimals.forEach(function(oneanimal){
		// make div
		var animal_div = $('<div>');

		// add class to div
		animal_div.addClass('animal');

		// add background-img as inline css property of the div
		animal_div.css('background-image', "url(" + oneanimal.image + ")");
		console.log(oneanimal);
		animal_div.css('margin-left', margin_left + 'px');
		margin_left = margin_left + 250;

		$('div.farm').append(animal_div);
	});


});

