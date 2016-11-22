$(document).ready(function () {

var spotifyApi = new SpotifyWebApi();
// spotifyApi.setAccessToken('BQD-QeP6VqzjFcPy8xpHdmiPm3Wwtrxu9UotDZt3JBsP2cL5o_2CJEvJLuxFPB2yW4vvyE0AQAqcsbC4q1RAaw');
// spotifyApi.getUserPlaylists()  // note that we don't pass a user id
//   .then(function(data) {
//     console.log('User playlists', data);
//   }, function(err) {
//     console.error(err);
//   });
// searchTrack('Llego la musica cubana')

// function searchTrack(queryTerm) {
//   // store the current promise in case we need to abort it
//   return spotifyApi.searchTracks(queryTerm, {limit: 5})
//     .then(function(data) {
//    console.log('data', data);


//     }, function(err) {
//       console.error('error',err);
//     });
// }

var sonApi = 'https://api.spotify.com/v1/tracks/?ids=0wIEGEWdswpwOnpM3nuwkC,3b2J8pXcrlrGMY4q7zsBtI,3oFwFUxhOgem0hPpFsor1n';
var rumbaApi = 'https://api.spotify.com/v1/tracks/?ids=4F03szV3H55QIiP94TXrsT,1KIimqBpVLFcS5Yc7DSQg9,47lSbhOlKE8fJJ2jc6HqRQ';
var salsaApi = 'https://api.spotify.com/v1/tracks/?ids=3Pacy6CMa8HPNVfeA3wkPQ,3N3oba9mXWFD4NOnZFK46Q,0neyZWsvpfpyVutNtRjj8g,3zpPox6fuNguDVxRjSoBaJ,4rGvcJFVrCO22Rj9pCJ9EL';


$.get(sonApi, function(response) {
  console.log('this is son', response) 
    $('.song-track span').text(response.tracks.name);
    // $('#humidity span').text(response.main.humidity); 
    // $('#wind span').text(response.wind.speed);
    console.log('track name', name)
  });





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






