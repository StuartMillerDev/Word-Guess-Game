//Variables

//define game object
var game={
  "lives":6,
  "score":0,
  "wins":0,
  "lose":0,
  "word":""
}; //End of game definition


//GAME LOGIC

//checks the user input
function checkLetter(x){
  //pattern of vvalid characters
var regexp=/[qwertyuiopasdfghjklzxcvbnm]/;
//input must be a valid character and must be a string
  if(regexp.test(x) && typeOf(x)=="string"){
    //pass the letter to the checkWord method
    checkWord(x);
  }
}
//checks the user selected letter against the current word
function checkWord(y){
  //Loop through the current "word" string
  for(var i=0; i<game["word"].length; i++){
    //check if letter is at the current index of the string
    if(y==){
      //show letter on the screen
    }
  }
}
//resets the game, generates a new game
function resetGame(){
//reset Variables




}
