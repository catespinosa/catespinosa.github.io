$('#meetBtn').on('click', function (event) {
 event.preventDefault();
    console.log('button', event);
  //   // // check if navigator geolocation is available from the browser
  //   //     if (navigator.geolocation) {
  //         // if it is use the getCurrentPosition method to retrieve the Window's location
  //         navigator.geolocation.getCurrentPosition(function(position) {
  //           var lat = position.coords.latitude;
  //           var long = position.coords.longitude;

  //           console.log('lat: ', lat);
  //           console.log('long: ', long);

           

    function fetchGroups(url, cb, data) {
    if(!data) data = [];
    
    $.ajax({
        
        dataType:'jsonp',
        method:'get',
        url:url,
        success:function(result) {
            console.log('back with ' + result.data.length +' results');
            console.dir(result);
            //add to data
            data.push.apply(data, result.data);
            if(result.meta.next_link) {
                var nextUrl = result.meta.next_link;
                fetchGroups(nextUrl, cb, data);
            } else {
                cb(data);   
            }
        }
    }); 
    
    };

          
              
              var $results = $("#results");

              $results.html("<p>Finding meetups near you.</p>");

              fetchGroups("https://api.meetup.com/find/groups?upcoming_events=true&photo-host=public&page=20&fallback_suggestions=true&sig_id=217660822&topic_id=116988%2C468792%2C120760%2C59363&sig=a04fbd81a81befd09d1ec4d041e8b8831f3b87fd", function(res) {
                        console.log("totally done");

                        var s = "";
                        for(var i=0;i<res.length; i++) {
                            var group = res[i];
                            
                            if(group.group_photo && group.group_photo.thumb_link) {
                                s += "<img src=\"" + group.group_photo.thumb_link + "\">";
                            }
                            s += "<h3>"+" <a href='"+group.link+"'>"+group.name+"</a></h3>";
                            s += "<p>Location: "+group.city + ", " + group.state + " " + group.country + "</p><br clear=\"left\">";
                            s += "<p>"+group.description + "</p><br clear=\"left\">";
                        }
                        $results.html(s);



                  
              });
        






            

             
              

            // });//navigation

              


 });//onclick



  