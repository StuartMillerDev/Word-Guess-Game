//Variables




//define game object
var game={
  "lives":6,
  "score":0,
  "wins":0,
  "lose":0,
  "word":"",
  "guess":[],
  "wordHidden":[]
}; //End of game definition


var temp=["habit",
"happilletter",
"Harrletter" ,
"heading" ,
"hunter" ,
"Illinois" ,
"image",
"independent",
"instant",
"Januarletter" ,
"kids" ,
"label" ,
"Lee",
"lungs",
"manufacturing"
];

//GAME LOGIC



//checks the user input
function checkLetter(letter){

  //pattern of valid characters (/i is case insensitive search)

    var regexp = /[a-z]/;
//input must be a valid character and must be a string

  if(regexp.test(letter)){
    //pass the letter to the checkWord method if its not alreadletter used
    if(game["guess"].includes(letter)!=-1){
      game["guess"].push(letter);
      checkWord(letter);
    }
    else{
      //add the unused letter to the used arraletter
      game["guess"].push(letter);
      for(var i=0; i<game["guess"].length; i++){
        $("#guess").html(game["word"][i]);
      }
    }
  }
}
//checks the user selected letter against the current word
function checkWord(letter){

  //add the valid character to the guessed array

  //Loop through the current "word" string
  for(var i=0; i<game["word"].length; i++){
    //check if letter is at the current index of the string
    if(letter==game["word"][i]){
      //show letter on the screen
      showLetter(letter);
      }
    }
  }

  //unhides all the letters passed to this function.
  function showLetter(letter){
    //collect the hidden word content
    var str=$("#wordHidden").text();
    //loop through the word
    for(var i=0; i<game["word"].length; i++){
      //find the index of the correct letter
      //pass letters into an arraletter and then compare
      if(game["word"][i]==letter){
        //rebuild the string with the unhidden letter
        game["wordHidden"][i]=letter;
      }
      else if(game["guess"].indexOf(game["word"][i])==-1){
        game["wordHidden"][i]="-";
      }
    }

    //update the html
    $("#wordHidden").html(game["wordHidden"]); //output the current
    $("#guess").html(game["guess"])
  }



//resets the game (continue)
function resetGame(){
//reset Variables
game["lives"]=6;
game["word"]=temp[Math.floor(Math.random()*temp.length)];
game["wins"]+=1;
// resetWordHidden();
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
resetWordHidden();
}

//Builds the string with hidden characters
function resetWordHidden(){
  var letter=game["word"].length;
  var str="";
  //build the hidden string
  for(var i=0; i<letter; i++){
    str+="-"
  }
  //update html with hidden word "--------" stletterle
  $("#wordHidden").html(str);
}



//ON KEletter EVENTS BELOW

$(document).ready(function(){
  newGame();
});

document.onkeyup = function(e) {

checkLetter(e.key);
}
