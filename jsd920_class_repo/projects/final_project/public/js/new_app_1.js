$(document).ready(function () {

var spotifyApi = new SpotifyWebApi();
// spotifyApi.setAccessToken('BQD-QeP6VqzjFcPy8xpHdmiPm3Wwtrxu9UotDZt3JBsP2cL5o_2CJEvJLuxFPB2yW4vvyE0AQAqcsbC4q1RAaw');
// spotifyApi.getUserPlaylists()  // note that we don't pass a user id
//   .then(function(data) {
//     console.log('User playlists', data);
//   }, function(err) {
//     console.error(err);
//   });
searchTrack('Llego la musica cubana')

function searchTrack(queryTerm) {
  // store the current promise in case we need to abort it
  return spotifyApi.searchTracks(queryTerm, {limit: 5})
    .then(function(data) {
   console.log('data', data);


    }, function(err) {
      console.error('error',err);
    });
}



// $.ajax({
//    url: 'https://api.spotify.com/v1/users/126955706/playlists',
//    headers: {
//        'Authorization': 'Bearer ' + 'BQD-QeP6VqzjFcPy8xpHdmiPm3Wwtrxu9UotDZt3JBsP2cL5o_2CJEvJLuxFPB2yW4vvyE0AQAqcsbC4q1RAaw'
//    },
//    success: function(response) {
//    	console.log('this is response', response)
//           }
// });


$('#timbaBtn').on('click', function(event) {
  event.preventDefault(); 
  console.log('playlist 1', event)


});

$('#sonBtn').on('click', function(event) {
  event.preventDefault(); 
  console.log('playlist 2', event)
});

$('#rumbaBtn').on('click', function(event) {
  event.preventDefault(); 
  console.log('playlist 3', event)
});



// var Spotify = require('spotify-web-api-js');
// var s = new Spotify();


// // https://api.spotify.com/v1/users/wizzler/playlists" -H "Authorization: Bearer {your access token}


// // // set it in the wrapper
// var spotifyApi = new SpotifyWebApi();
// spotifyApi.setAccessToken('BQD-QeP6VqzjFcPy8xpHdmiPm3Wwtrxu9UotDZt3JBsP2cL5o_2CJEvJLuxFPB2yW4vvyE0AQAqcsbC4q1RAaw');
// spotifyApi.getUserPlaylists('126955706')
//   .then(function(data) {
//     console.log('User playlists', data);
//   }, function(err) {
//     console.error(err);
//   });

// spotifyApi.getPlaylist('126955706', 'BQD-QeP6VqzjFcPy8xpHdmiPm3Wwtrxu9UotDZt3JBsP2cL5o_2CJEvJLuxFPB2yW4vvyE0AQAqcsbC4q1RAaw')
//   .then(function(data) {
//     console.log('User playlist', data);
//   }, function(err) {
//     console.error(err);
//   });

 });






