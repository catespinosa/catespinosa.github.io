/*
  Please add all Javascript code to this file.
*/


 $.get("https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/stories.json", function(response) {
 	var results = response.new;
 	var articles = parseResults(results);
 	console.log(articles);
 	addArticlesToPage(articles);


function parseResults(results){
	var all_articles = []; //this is a placeholder for what we want to return
	results.forEach(function(row){
		var article = {
			title : row.title,
			image : row.responsive_images[1].image,
			link : row.link,
			channel : row.channel,
			total_shares : row.shares.total,
			content : row.content.plain
		};
		all_articles.push(article); //we want to push the object in to the all articles array
	});

	return all_articles;
}

 	function addArticlesToPage(articles) {
	var source = $('#articles-template').html();
	var htmlbuilder = Handlebars.compile(source);
	var articlesDataObj = {
		rows: articles
	};
	var htmlBlock = htmlbuilder(articlesDataObj);

	$('section#main').append(htmlBlock);
	
}
 	
 	// make all article title links NOT go to the source but instead open the pop up
 	$('section.articleContent a').on('click', function(event){
 		event.preventDefault();
 		var h3_text = $(this).children('h3')[0];
 		var title = response.new.title;
 		var link = response.new.link;
 		var description = response.new.content;
 		showPopUp(title, link, description);
 		//remove hidden class from pop up
 	});
});

 function showPopUp(title, link, description) {
 	// make pop up div visible by removing the "loader" and "hidden" classes
 		$('#popUp').removeClass('loader hidden');
 		$('#popUp.loader .container').css('display','');
 	// replace the html dom text in the pop up div with that of the article
 		function addtexttopopup (response) {
 			var popUptext = response.articles;
 			var popup = parseResults(popUptext);
 			addArticlesToPage(popup);
 		};
 	// add an onclick event to be able to close the pop up
 	$('.closePopUp a').on('click', function (event) {
 		event.preventDefault();
 		$('#popUp').hide();
 	});
 	// make sure the read more from source link opens a new tab/window
 };

