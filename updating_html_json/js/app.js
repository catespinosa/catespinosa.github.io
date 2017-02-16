//Create html file with story and update csv file. Fields are simply: Headline, first sentence, filename.

//Create JSON from csv file

//Update JSON from csv file





$(document).ready(function () {

//1. Create function to get JSON data

//2. Parse JSON

	$.getJSON('https://dl.dropboxusercontent.com/s/kmqf99al4l7ntie/stories.json?dl=0', function(response) {
 	var results = response.myObj;
 	var articles = parseResults(results);
 	console.log(articles);
 	addArticlesToPage(articles);
 	//3. Iterate through objects and push into array
		function parseResults (results) {
			var all_articles = [];
			console.log(all_articles)
			results.forEach(function(row){
					var article = {
					headline : row.headline,
					date : row.date,
					author : row.author,
					blurb : row.blurb,
					link : row.link,
				};
				all_articles.push(article);

		});
			return all_articles;

	};

//4. Add articles to index.html - create template?
	
 	function addArticlesToPage(articles) {
	var source = $('#articles-template').html();
	var htmlbuilder = Handlebars.compile(source);
	var articlesDataObj = {
		rows: articles
	};
	var htmlBlock = htmlbuilder(articlesDataObj);

	$('article#myList').append(htmlBlock);

	
	};//addArticlesToPage		



//5. Click event on headline that takes you to the story's html file.
	});


});