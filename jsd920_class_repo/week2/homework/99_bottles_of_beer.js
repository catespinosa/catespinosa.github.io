

// 99 BOTTLES OF BEER
// Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal
// Make sure your program can handle both singular and plural cases (i.e. both "100 bottles of beer" and "1 bottle of beer")
// Hint: you will want to use a for loop that starts at 99 and counts down to 0




 var bottles = 99;

  while (bottles >= 3) {
    console.log(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer. Take one down and pass it around, " + (bottles-1) + " bottles of beer on the wall" );
    bottles -= 1; // always update your condition in a while loop!
  }
  if (bottles >=2) {
  	console.log (bottles)
  }