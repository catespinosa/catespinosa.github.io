/*
  Please add all Javascript code to this file.
*/


 $.get("https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/stories.json", function(response) {
 	var results = response.new;
 	var articles = parseResults(results);
 	//console.log(articles);
});

function parseResults(results){
	var all_articles = []; //this is a placeholder for what we want to return
	results.forEach(function(row){
		var article = {
			title : row.title,
			image : row.image,
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
	var single_article = [];
	articles.forEach(function (row){
		$('.articleContent h3').append(row.title);
		


		});
		return articles(single_article);


}

function addSingleArticleToPage() {  //add the items to the dom jquery - or handlebars 

	var source = $('#title-template').html();
	var template = Handlebars.compile(source);

	var articleObj = {
			title : row.title,
			image : row.image,
			link : row.link,
			channel : row.channel,
			total_shares : row.shares.total,
			content : row.content.plain
	};
	// // 3
	var titleTemplate = template(articleObj);

	// // 4
	$('#title').append(titleTemplate);



}

//do not use, just for demo!!

// function Article(row){  //object constructor
// 	this.title =  row.title;
// 	this.image = row.image;
// 	this.link = row.link;
// 	this.channel = row.channel;
// 	this.shares = row.shares.total;
// 	this.content = row.content.plain;
// };


