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
      showLetter(y);
      }
    }
  }

  //unhides all the letters passed to this function.
  function showLetter(z){
    //collect the hidden word content
    var str=$("#wordHidden").textContent;
    //loop through the word
    for(var i=0; i<game["word"].length; i++){
      //find the index of the correct letter
      if(game["word"][i]==z){
        //rebuild the string with the unhidden letter
        str[i]=z;
      }
    }
    //update the html
    $("#wordHidden").html(str);
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

//Builds the string with hidden characters
function resetWordHidden(){
  var letter=game["word"].length;
  var str="";
  //build the hidden string
  for(var i=0; i<letter; i++){
    str+="-"
  }
  //update html with hidden word "--------" style
  $("#wordHidden").html(str);
}



//ON KEY EVENTS BELOW


document.onkeyup = function(event) {
checkLetter();
}
