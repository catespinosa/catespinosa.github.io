var movesArray = [
    {
    move:"Dile que no",
      description:"Cross body step"
    },
    {
      move:"Arriba",
      description:"Walk forwards"
    },
    {
      move:"Abajo",
      description:"Walk backwards"
    },
    {
      move:"Enchufa",
      description:"Follower's left turn and leaders move to the next follower"
    },
    {
      move:"Enchufa doble",
      description:"Enchufa, but the leader stops the follower with his right arm, then pushes her back, and repeats a normal Enchufa"
    },
    {
      move:"Guapea",
      description:"Basic step"
    },
    {
      move:"Pelota",
      description:"Stamp twice then clap twice"
    },
    {
      move:"Pelota loca",
      description:"Enchufa then stamp, clap, stamp, clap, stamp, clap, clap clap"
    },
    {
      move:"Sombrero",
      description:"Hold both hands, right over left, and turn her to her left, then move your left arm over your head, and your right over hers"
    }
];

$('#randomize').click(function() {
  var randomCall = movesArray[Math.floor(Math.random() * movesArray.length)];
  $('#Name').text(randomCall.move);
  $('#description').text(randomCall.description);
});