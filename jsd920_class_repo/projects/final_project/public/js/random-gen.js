var movesArray = [
    {
    move:"Dile que no",
      description:"Cross body step",
      videosource:"https://www.youtube.com/embed/JswM_OUf2zA"

    },
    {
      move:"Arriba",
      description:"Walk forwards",
      videosource:"https://www.youtube.com/embed/JswM_OUf2zA"
    },
    {
      move:"Abajo",
      description:"Walk backwards",
      videosource:"https://www.youtube.com/embed/JswM_OUf2zA"

    },
    {
      move:"Enchufa",
      description:"Follower's left turn and leaders move to the next follower",
      videosource:"https://www.youtube.com/embed/JswM_OUf2zA"
    },
    {
      move:"Enchufa doble",
      description:"Enchufa, but the leader stops the follower with his right arm, then pushes her back, and repeats a normal Enchufa",
      videosource:"https://www.youtube.com/embed/JswM_OUf2zA"
    },
    {
      move:"Guapea",
      description:"Basic step",
      videosource:"https://www.youtube.com/embed/JswM_OUf2zA"
    },
    {
      move:"Pelota",
      description:"Stamp twice then clap twice",
      videosource:"https://www.youtube.com/embed/JswM_OUf2zA"
    },
    {
      move:"Pelota loca",
      description:"Enchufa then stamp, clap, stamp, clap, stamp, clap, clap clap",
      videosource:"https://www.youtube.com/embed/JswM_OUf2zA"
    },
    {
      move:"Sombrero",
      description:"Hold both hands, right over left, and turn her to her left, then move your left arm over your head, and your right over hers",
      videosource:"https://www.youtube.com/embed/JswM_OUf2zA"
    }
];

$('#randomize').click(function() {
  var randomCall = movesArray[Math.floor(Math.random() * movesArray.length)];
  $('#Name').text(randomCall.move);
  $('#description').text(randomCall.description);
  $('#video').attr('src',randomCall.videosource)
});