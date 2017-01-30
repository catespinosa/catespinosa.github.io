$(document).ready(function(){
    $(".video").hide();
    $(".jumbotron").hide();
});


var movesArray = [
    {
    move:"Dile que no",
      description:"Cross body step",
      videosource:"https://www.youtube.com/embed/fa4EHHHFcsQ"

    },
    {
    move:"Dame",
      description:"CMove on to the next follower",
      videosource:"https://www.youtube.com/embed/czwBiVX_8qM"

    },
    {
      move:"Arriba",
      description:"Walk forwards",
      videosource:""
    },
    {
      move:"Abajo",
      description:"Walk backwards",
      videosource:""

    },
    {
      move:"Enchufa",
      description:"Follower's left turn and leaders move to the next follower",
      videosource:"https://www.youtube.com/embed/qIdSys1iE5c"
    },
    {
      move:"Enchufa doble",
      description:"Enchufa, but the leader stops the follower with his right arm, then pushes her back, and repeats a normal Enchufa",
      videosource:"https://www.youtube.com/embed/JswM_OUf2zA"
    },
    {
      move:"Guapea",
      description:"Basic step",
      videosource:"https://www.youtube.com/embed/l5ElboSxHqc"
    },
    {
      move:"Pelota",
      description:"Stamp twice then clap twice",
      videosource:"https://www.youtube.com/embed/7MFz-fyMhPs"
    },
    {
      move:"Pelota loca",
      description:"Enchufa then stamp, clap, stamp, clap, stamp, clap, clap clap",
      videosource:"https://www.youtube.com/embed/aNuHV16UZbo"
    },
    {
      move:"Sombrero",
      description:"Hold both hands, right over left, and turn her to her left, then move your left arm over your head, and your right over hers",
      videosource:"https://www.youtube.com/embed/Y0U309VrG2w"
    }
];

$('#randomize').click(function() {
  var randomCall = movesArray[Math.floor(Math.random() * movesArray.length)];
  $('.jumbotron').show();
  $('#Name').text(randomCall.move);
  $('#description').text(randomCall.description);
  if (randomCall.videosource == "") {
    $('.video').hide();
    $('#vid-container').removeClass('embed-responsive embed-responsive-16by9');
  }
  else {
    $('.video').show();
    $('.video').attr('src',randomCall.videosource);
    $('#vid-container').addClass('embed-responsive embed-responsive-16by9');
  }
  // console.log(randomCall.videosource)

  //this only works if the videosource doens't exist
  // if (randomCall.hasOwnProperty("videosource")) {
  //   $('.video').show();
  //   $('.video').attr('src',randomCall.videosource);
  // }
  // else {
  //   $('.video').hide();
  // }
  
});