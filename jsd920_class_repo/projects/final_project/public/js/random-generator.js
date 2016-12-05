
	$("#jumble").click(function(){
		console.log("Clicked");
		$("#Name").text('');
		var l = [{
			move:"Dile que no",
			description:"xyz"},
			{move:"Arriba",
			description:"sldfsdfsdf"},
			{move:"Abajo",
			description:"asdfsdfsdfsd"},
			{move:"Enchufa",
			description:"asdfsdfsdfsd"},
			{move:"Enchufa doble",
			description:"asdfsdfsdfsd"}
		];
		console.log ("list of objects", l)	

		// , "Arriba", "Abajo","Dame", "Enchufa", "Enchufa Doble", "Guapea", "Pelota", "Sombrero"];
		// var u = ["a", "e", "i", "o", "u"];
		// var f = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "w", "x", "v", "z"];
		// var y = ["y", "ie", "i",];
		// var letter = "";

		//Helper Function to append a random index from an array.
		function randomRueda(array) {
			
			console.log(array[Math.floor(Math.random() * array.length)]);

			$("#Name").append(array[Math.floor(Math.random() * array.length)]);

		}

		// function twoRandomLetters(array) {
			
		// 	var letter = array[Math.floor(Math.random() * array.length)];
		// 	console.log(letter);
		// 	console.log(letter);
		// 	$("#Name").append(letter);
		// 	$("#Name").append(letter);

		// }

		randomRueda(l);
		// randomLetter(u);
		// twoRandomLetters(f);
		// randomLetter(y);
	});
