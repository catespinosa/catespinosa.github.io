$(document).ready(function () {

var meetupApi = 'https://api.meetup.com/find/groups?upcoming_events=true&photo-host=public&page=20&fallback_suggestions=true&sig_id=217660822&topic_id=116988%2C468792%2C120760%2C59363&sig=a04fbd81a81befd09d1ec4d041e8b8831f3b87fd';




  $('meetBtn').on('click', function (event) {
    event.preventDefault();
    console.log('button', event);
    // // check if navigator geolocation is available from the browser
    //     if (navigator.geolocation) {
          // if it is use the getCurrentPosition method to retrieve the Window's location
          // navigator.geolocation.getCurrentPosition(function(position) {
          //   var lat = position.coords.latitude;
          //   var long = position.coords.longitude;

          //   console.log('lat: ', lat);
          //   console.log('long: ', long);

          //   // Feel free to adjust the search radius as you see fit
          //   var radius = '25mi';

            


          });

        });
  });