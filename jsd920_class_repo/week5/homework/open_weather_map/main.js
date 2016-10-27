/*
Open Weather Map Instructions:
1)
- Use either $.ajax or $.get to GET the current weather data for New York City
- Use the API docs to figure out how to properly structure the weatherUrl below (http://openweathermap.org/current)
	- Hint: search the docs for "city name"
- Be sure to include in the weatherUrl the option to receive data in your units of choice (imperial, metric, etc.)
	- Hint: search the docs for "units format"
- First, print the response to the console, then, using the API's response, print the following data to #nyc-weather:
	- The current "temp"
	- The current "hummidity"
	- The current wind "speed"
2)
- Add a form to to the index.html page that allows the user to enter a city and a state
- Capture this form's submit event and dynamically create the weatherUrl below from the user's input
- Print this result to the DOM
3) Bonus:
- Change the background color based on the temperature; ie colder temps should be blue, and hotter temps red
4) Intermediate Bonus:
- Implement handlebars.js templates :)
5) Legendary Bonus:
- Sign up for the flicker API: https://www.flickr.com/services/api/
- Use the flicker search photo library: https://www.flickr.com/services/api/flickr.photos.search.html
- Hint: you will have to convert the responses from the search API into images: https://www.flickr.com/services/api/misc.urls.html
- Instead of changing the background color based on temperature, change the background to first result the flicker API returns for the city
- Ex: user enters "Brooklyn" - search flicker API for "Brooklyn" and use the first image
*/


$(document).ready(function () {
 	var apiKey = '56a9888b322a116c84e3d122fb2f8c52';
  	var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=nyc&units=imperial&APPID=56a9888b322a116c84e3d122fb2f8c52';
	// var inputCity = $('#city');
	// var inputState = $('#state');

 	$.get(weatherUrl, function(response) { //this function should be inside this scope because i was getting an error
      // console.log(response.main.temp); //the name of the root object is response
		$('#temp span').text(response.main.temp); 	//text is a method in jquery
		$('#humidity span').text(response.main.humidity); 
		$('#wind span').text(response.wind.speed);

 	});
	
	$('#searchBtn').click(function(event){
      //prevents default behavior of form
      event.preventDefault();
      // console.log('inputCity', inputCity.val());
			var inputCity = $('#city');
			var inputState = $('#state');
			var prefix = ('http://api.openweathermap.org/data/2.5/weather?q=' + inputCity.val() + ',' + inputState.val());
			var suffix = ('&units=imperial&APPID=56a9888b322a116c84e3d122fb2f8c52');
			var weatherUrl = (prefix + suffix);
		 		//console.log(weatherUrl);

		 	$.get(weatherUrl, function(response) { 
				$('#temp-l span').text(response.main.temp); 	
				$('#humidity-l span').text(response.main.humidity); 
				$('#wind-l span').text(response.wind.speed);
				
				if (response.main.temp < 60){
					$('body').addClass('cold');
				} else {
					$('body').addClass('hot');
				}


			});
	});

});