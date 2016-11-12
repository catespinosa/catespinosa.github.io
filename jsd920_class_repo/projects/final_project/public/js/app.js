var spotifyApi = new SpotifyWebApi();
console.log(spotifyApi);


// spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function(err, data) {
//   if (err) console.error(err);
//   else console.log('Artist albums', data);
// });




// get an access token
var myAccesstoken = 'AQDcMVnwInPth0Emqph-m42IOCJANzCtgrfaB47RbM5RSFUo-11iksysWGwA0lgqUe9Fm05zr-UEWtUJuYiuO8kZTmQuWMUsfTm7nadeycD84fxe1X9ysmI1ifQFLt7AC8gCg8DMd9jyJLKz6HNvM8fN06zSd3D31Bq2tv4MsP95gjWRY5HxRvemxMQo2d2tXwiRDNAv4XzSgd9t84pefM04kYnG3AncNxz_v3_CO_pHqMNiD4mZHQ';

// set it in the wrapper
var spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(myAccesstoken);
spotifyApi.getUserPlaylists('126955706')
  .then(function(data) {
    console.log('User playlists', data);
  }, function(err) {
    console.error(err);
  });

// spotifyApi.getPlaylist('jmperezperez', '4vHIKV7j4QcZwgzGQcZg1x')
//   .then(function(data) {
//     console.log('User playlist', data);
//   }, function(err) {
//     console.error(err);
//   });