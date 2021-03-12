$(document).ready(function(){
    $();
    // onclick - click card, card flips click card 2, card flips:  from https://medium.com/free-code-camp/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae

// choose dificulty level

// start game (shuffle cards on load)

startGame();

function startGame(){
    shuffleDeck();
    // startTimer
    // startClickCounter
    // startPairCounter
}

function shuffleDeck() {
   // const gameCards = Array.from(document.getElementsByClassName(".game-card"));
    $(".game-card").each(function() {
        let shuffledDeck = Math.floor(Math.random()* 21);
        console.log(shuffledDeck);
        console.log(this.style.order);    
     this.style.order = shuffledDeck;
      

    },)

 
}
},)
 //   })
//for (let i = 0; i < gameCards.length; i++) {
 //    let shuffledDeck = Math.floor(Math.random()*(gameCards.length - 1) + 1);
 //    gameCards.style.order = shuffledDeck;
// }

validateCardFlip();

// when clicked a card flips to hide back face (card-back) and show front face (card-front) face. 
// rules - flip card only if:
// 0 or 1 cards are already flipped
// not all pairs have already been matched 
// the card has not already been matched
function validateCardFlip(gameCard){
    if 
        (!$(this).hasClass("flip") && !$(this).hasClass(".matched"));
    
$(".game-card").on("click",function(){
$(this).addClass("flip"); 
})}

//let frontCard = (".card-front");
//let backCard = (".card-back");
//let cardOne,cardTwo;
 //   const newLocal = ".game-card";
//let cardsTurned = 0;

//    $(".game-card").click(function() {
//        $().off("click");
 //     }

      // code option;
    //  var gameCards = (".game-card");

//$(".game-card").on("click",function(){
//$(this).addClass("flip"); 
//});
//let frontCard = (".card-front");
//let backCard = (".card-back");
//let flippedCard= $(".game-card").hasClass("flip")
//let secondCard= flippedCard*2;
 //   const  newLocal = ".game-card";
//let cardsTurned = 0;

// when clicked a card flips to hide back face (card-back) and show front face (card-front) face. 

//if 
//  (secondCard=2,

//    $(".game-card").click(function() {
//        $().off("click");
   
//       $(".game-card").removeClass("flip");
//      })
 
 
//     $(".game-card").first.is($("#cat")) && $(".game-card").second.is($("#cat")) {
//      $(this).addClass('.matched');
  



// work out if cards are a match

//function isPair() {
 //   if 
    // cardOne === CardTwo {
 //       $(this).addClass('.matched');
//    }
// //}


//  two cards are flipped, stop futher cards from being flipped and re-place deck all face down

//$(".game-card").on(click,
//function() {

 //  turnedCard +=1 
 // $(this).addClass("turned");

// if match congratulations:

//$(".matched").function() {
 //   alert ("Well Done!");
   // $(".welldone").show();
    
//}

// if match score point:

// if not match better luck & missed attempt score:

// when all matched = well done! & display score:
