$(document).ready(function () {
	function genres(image,title,description,button,playlistid) {
		this.image = image;
		this.title = title;
		this.description = description;
		this.button = button;
		this.playlistid = playlistid
	}

	//create genres - constructors
	function Salsa(image,title,description,button,playlistid){
		genres.call(this, image,title,description,button,playlistid);
	}

	function Soncubano(image,title,description,button,playlistid){
		genres.call(this, image,title,description,button,playlistid);
	}

	function Rumba(image,title,description,button,playlistid){
		genres.call(this, image,title,description,button,playlistid);
	}

//create an instance of the genres
	var timba = new Salsa('https://i.scdn.co/image/c7201f157a9e9c34397a59fe8e966a5bc2e37333','Salsa & Timba','Description', 'buttonURL','4VxLxeHYwneGkyUCZPStxo');
	var son = new Soncubano('https://i.scdn.co/image/bfbe5d09acec6efa2a08a8820de5cbcd23d55ba2','Son cubano','Description', 'buttonURL','4VxLxeHYwneGkyUCZPStxo');
	var guaguanco = new Rumba('https://i.scdn.co/image/3efc2bb9b97a057b57a81980ddf67df46c4918d5','Rumba','Description', 'buttonURL','4VxLxeHYwneGkyUCZPStxo');

	// push all genres instances here
	var playlists = [];

	playlists.push(timba);
	playlists.push(son);
	playlists.push(guaguanco);
	console.log('this is playlists',playlists)

	// var div_width = 300;
	// var div_height = 300;


	// playlists.forEach(function(oneplaylist){
	// 	console.log(oneplaylist)
	// 	// make div
	// 	var thumbnail_div = $('<div>');
		
	// 	// add class to div
	// 	thumbnail_div.addClass('thumb-pic');

	// 	// add background-img as inline css property of the div
	// 	thumbnail_div.css('background-image', "url(" + oneplaylist.image + ")");
	// 	thumbnail_div.css('width', div_width + 'px');
	// 	thumbnail_div.css('height', div_height + 'px');
	// 	// console.log(oneplaylist);
		
	// 	$('div.thumbnail').prepend(thumbnail_div);
	// 	$('div.caption').prepend('<h3>'+ oneplaylist.title +'</h3>');
	// });



	function createBox (obj){
		$('<img>').attr(src,obj.image);
		console.log('this is obj', obj);

	};


});






