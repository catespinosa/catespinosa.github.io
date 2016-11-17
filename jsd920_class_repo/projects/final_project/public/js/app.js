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
		image:'https://i.scdn.co/image/68b6a65573a55095e9c0c0c33a274b18e0422736', 
		title: 'My playlist title', 
		description:'My genre description',
		button: 'url', 
		playlistid:'4VxLxeHYwneGkyUCZPStxo'
	},

	{
		image:'https://i.scdn.co/image/0d447b6faae870f890dc5780cc58d9afdbc36a1d', 
		title: 'My playlist title', 
		description:'My genre description',
		button: 'url', 
		playlistid:'4VxLxeHYwneGkyUCZPStxo'
	}
]

genres.forEach(function(d) {
	console.log('this is image source', d.image);
    // add image tag 
    var thumbnailsrc1 = $("<img>").attr('src', d.image);
    var thumbnailsrc2 = $("<img>").attr('src', d.image);
    var thumbnailsrc3 = $("<img>").attr('src', d.image);
    $('.thumbnail1').append(thumbnailsrc1);
    $('.thumbnail2').append(thumbnailsrc2);
    $('.thumbnail3').append(thumbnailsrc3);
    console.log('thumbnails source from object', thumbnailsrc)
    
});




});//document ready function

