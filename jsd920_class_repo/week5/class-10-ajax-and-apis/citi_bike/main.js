/*

In the index.html file there is a "Get Citi Bike Data" button.
When the user clicks the button, pull data from the provided resource: https://feeds.citibikenyc.com/stations/stations.json
Handle the link success and error responses accordingly, displaying results in
console.log() if successful.

*/

window.onload = function () {
	document.getElementById('output').onclick = makeRequest;

	function makeRequest() {
		console.log('inside makeRequest');
		var url = 'https://gbfs.citibikenyc.com/gbfs/en/station_information.json';
		//create an instance of XMLHttpRequest
		var httpRequest = new XMLHttpRequest();
		//Set a custom function to handle the request
		httpRequest.onreadystatechange = responseMethod;
		//open GET request to the url
		httpRequest.open('GET',url);

		function responseMethod(){
			//check if our state is "DONE"
			if (httpRequest.readyState === XMLHttpRequest.DONE) {
				if (httpRequest.status === 200) {
					console.log(JSON.parse(httpRequest.response));
					var data = JSON.parse(httpRequest.response);
				}
				else {console.log('we have a problem');}


			}



		}
	}
};