

var meetupApi = 'https://api.meetup.com/find/groups?upcoming_events=true&photo-host=public&page=20&fallback_suggestions=true&sig_id=217660822&topic_id=116988%2C468792%2C120760%2C59363&sig=a04fbd81a81befd09d1ec4d041e8b8831f3b87fd';




  $('#meetBtn').on('click', function (event) {
    event.preventDefault();
    console.log('button', event);
    // // check if navigator geolocation is available from the browser
    //     if (navigator.geolocation) {
          // if it is use the getCurrentPosition method to retrieve the Window's location
          navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude;
            var long = position.coords.longitude;

            console.log('lat: ', lat);
            console.log('long: ', long);

            // Feel free to adjust the search radius as you see fit
            var radius = '25mi';


            var searchOptions = {
              geo: position.lat + ',' + position.long + ',' + position.radius,
              title: position.name, // title of the group
              link: position.link,
              desc: position.description
            };


              // $.getJSON(meetupApi, function(response) {
              //       console.log('this is JSON', response) 
           

              // });

              $.ajax({

                // The 'type' property sets the HTTP method.
                // A value of 'PUT' or 'DELETE' will trigger a preflight request.
                type: 'GET',

                // The URL to make the request to.
                url: 'https://api.meetup.com/find/groups?upcoming_events=true&photo-host=public&page=20&fallback_suggestions=true&sig_id=217660822&topic_id=116988%2C468792%2C120760%2C59363&sig=a04fbd81a81befd09d1ec4d041e8b8831f3b87fd',

                // The 'contentType' property sets the 'Content-Type' header.
                // The JQuery default for this property is
                // 'application/x-www-form-urlencoded; charset=UTF-8', which does not trigger
                // a preflight. If you set this value to anything other than
                // application/x-www-form-urlencoded, multipart/form-data, or text/plain,
                // you will trigger a preflight request.
                contentType: 'text/plain',

                xhrFields: {
                  // The 'xhrFields' property sets additional fields on the XMLHttpRequest.
                  // This can be used to set the 'withCredentials' property.
                  // Set the value to 'true' if you'd like to pass cookies to the server.
                  // If this is enabled, your server must respond with the header
                  // 'Access-Control-Allow-Credentials: true'.
                  withCredentials: false
                },

                headers: {
                  // Set any custom headers here.
                  // If you set any non-simple headers, your server must include these
                  // headers in the 'Access-Control-Allow-Headers' response header.
                  "Access-Control-Allow-Origin" : "origin-list-or-null"
                },

                success: function(response) {
                  console.log('this is the api response');
                },

                error: function(response) {
                  // Here's where you handle an error response.
                  // Note that if the error was due to a CORS issue,
                  // this function will still fire, but there won't be any additional
                  // information about the error.
                  console.log('try again', response)
                }
              });



          });

  });
