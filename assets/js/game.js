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

var used=[];

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
  //pattern of vvalid characters
var regexp=/[qwertyuiopasdfghjklzxcvbnm]/;
//input must be a valid character and must be a string
  if(regexp.test(x) && typeOf(x)=="string"){
    //pass the letter to the checkWord method if its not already used
    if(used.!contains(x)){
      checkWord(x);
    }
    else{
      used.push(x);
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
    else if (game["lives"]>0) {
      game["lives"]-=1;
      //animate something
    }
    else{

    }
  }
}
//resets the game (continue)
function resetGame(z){
//reset Variables
z["lives"]=6;
z["word"]=temp[Math.floor(Math.random()*temp.length)];
z["wins"]+=1;

}
//total reset of game
function newGame(){

}
