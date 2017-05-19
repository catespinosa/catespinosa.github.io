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
				content : row.content.plain,
			};//var article
			all_articles.push(article); //we want to push the object in to the all articles array
		});//foreach

		return all_articles;
	};// parseresults function


 	// make all article title links NOT go to the source but instead open the pop up
 	$('section.articleContent a').on('click', function(event){
 		event.preventDefault();
 		//var h3_text = $(this).children('h3')[0];
 		
 		showPopUp();

 	});



 	function showPopUp(title, link, content) {
	 	// make pop up div visible by removing the "loader" and "hidden" classes
	 		$('#popUp').removeClass('loader hidden');
	 	// replace the html dom text in the pop up div with that of the article
	 		$('#popUp h1').html(title);
	 		$('#popUp p').html(content);
	 		$('#popUp .container a').append(link);
	 		// add an onclick event to be able to close the pop up
	 		$('.closePopUp').on('click', function (e) {
	 			e.preventDefault();
	 			$('#popUp').addClass('loader hidden');
	 		})
 
 
 	// make sure the read more from source link opens a new tab/window
	 };


 	function addArticlesToPage(articles) {
	var source = $('#articles-template').html();
	var htmlbuilder = Handlebars.compile(source);
	var articlesDataObj = {
		rows: articles
	};
	var htmlBlock = htmlbuilder(articlesDataObj);

	$('section#main').append(htmlBlock);
	
	};//addArticlesToPage		
 	
 	



}); //$get


 	