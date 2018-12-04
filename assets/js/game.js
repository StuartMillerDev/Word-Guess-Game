//Variables

//define game object
var game={
  "lives":6,
  "score":0,
  "wins":0,
  "lose":0,
  "word":"",
  "guess":[]
}; //End of game definition


var temp=["habit",
"happily",
"Harry" ,
"heading" ,
"hunter" ,
"Illinois" ,
"image",
"independent",
"instant",
"January" ,
"kids" ,
"label" ,
"Lee",
"lungs",
"manufacturing"
];

//GAME LOGIC

//checks the user input
function checkLetter(x){
  //pattern of valid characters (/i is case insensitive search)
var regexp=/[qwertyuiopasdfghjklzxcvbnm]/i;
//input must be a valid character and must be a string
  if(regexp.test(x) && typeOf(x)=="string"){
    //pass the letter to the checkWord method if its not already used
    if(game["guess"].includes(x)!=-1){
      checkWord(x);
    }
    else{
      //add the unused letter to the used array
      game["guess"].push(x);
    }
  }
}
//checks the user selected letter against the current word
function checkWord(y){
  //Loop through the current "word" string
  for(var i=0; i<game["word"].length; i++){
    //check if letter is at the current index of the string
    var letter=game["word"][i];
    if(y==letter){
      //show letter on the screen


    }
    else if (game["lives"]>0){
      //you lose a life
      game["lives"]-=1;
      //animate something
    }
    else{
      //something
    }
  }
}

//checks for a victory condition and returns true/false
function checkWin(){
  var str=game["guess"];
  var victory=false;
  var count=0;
  //go through the array of guessed letters and see if the word contains it
  for(var i=0; i<str.length;i++){
    if(game["word"].includes(str[i])){
      count++;
    }
  }
  //After itterating through the word and letters check if we guessed correctly
  if(count=game["word"].length){
    victory=true;
  }
//Victory if you avve not used up all your lives and have guessed all the letters
  if(game["lives"]>0 && victory){
    return true;
  }
  else{
    return false;
  }
}

//resets the game (continue)
function resetGame(){
//reset Variables
game["lives"]=6;
game["word"]=temp[Math.floor(Math.random()*temp.length)];
game["wins"]+=1;
}
//total reset of game
function newGame(){
  //reset all values back to default settings
game["lives"]=6;
game["score"]=0;
game["win"]=0;
game["lose"]=0;
game["word"]=temp[Math.floor(Math.random()*temp.length)];
game["guess"]=[];
}

//ON KEY EVENTS BELOW
