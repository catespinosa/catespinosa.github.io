// (function(){
// 	var spotifyApi = new SpotifyWebApi();
// 	console.log(spotifyApi);


// 	// spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function(err, data) {
// 	//   if (err) console.error(err);
// 	//   else console.log('Artist albums', data);
// 	// });




// 	// get an access token
// 	var myAccesstoken = 'AQDcMVnwInPth0Emqph-m42IOCJANzCtgrfaB47RbM5RSFUo-11iksysWGwA0lgqUe9Fm05zr-UEWtUJuYiuO8kZTmQuWMUsfTm7nadeycD84fxe1X9ysmI1ifQFLt7AC8gCg8DMd9jyJLKz6HNvM8fN06zSd3D31Bq2tv4MsP95gjWRY5HxRvemxMQo2d2tXwiRDNAv4XzSgd9t84pefM04kYnG3AncNxz_v3_CO_pHqMNiD4mZHQ';

// 	// set it in the wrapper
// 	var spotifyApi = new SpotifyWebApi();
// 	spotifyApi.setAccessToken(myAccesstoken);
// 	spotifyApi.getUserPlaylists(126955706)
// 	  .then(function(data) {
// 	    console.log('User playlists', data);
// 	  }, function(err) {
// 	    console.error(err);
// 	  });

	
// })();

//create the json object that's gonna populate the carousel img title descr playlist id
//work on api so that the api calls the right playlist
$(document).ready(function () {

var genres = [
	{
		image:'https://i.scdn.co/image/c7201f157a9e9c34397a59fe8e966a5bc2e37333', 
		title: 'My playlist title', 
		description:'My genre description',
		button: 'url', 
		playlistid:'4VxLxeHYwneGkyUCZPStxo'
	},
	{
		image:'https://i.scdn.co/image/c7201f157a9e9c34397a59fe8e966a5bc2e37333', 
		title: 'My playlist title', 
		description:'My genre description',
		button: 'url', 
		playlistid:'4VxLxeHYwneGkyUCZPStxo'
	},

	{
		image:'https://i.scdn.co/image/c7201f157a9e9c34397a59fe8e966a5bc2e37333', 
		title: 'My playlist title', 
		description:'My genre description',
		button: 'url', 
		playlistid:'4VxLxeHYwneGkyUCZPStxo'
	}
]

genres.forEach(function(d) {
	console.log('this is image source', d.image);
    // add image tag 
    var thumbnailsrc = $("<img>").attr('src', d.image);
    $('.thumbnail').append(thumbnailsrc);
    console.log('thumbnails source from object', thumbnailsrc)
    
});




});//document ready function

