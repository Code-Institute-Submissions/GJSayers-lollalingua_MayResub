// onclick - click card, card flips click card 2, card flips:  from https://medium.com/free-code-camp/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae

var gameCards = (".game-card");
let frontCard = (".card-front");
let backCard = (".card-back");
let cardOne,cardTwo;
let cardsTurned = 0;

// when clicked a card flips to hide back face (card-back) and show front face (card-front) face. 

$(".game-card").on('click', flipCards)
function flipCards(){

  $(this).toggleClass('flip'); 
};

//  two cards are flipped stop futher cards from being flipped and re-place deck all face down

//$(".game-card").on(click,
//function() {

//    cardsTurned +=1 
 //   $(this).toggleClass("turned");

//if (cardsTurned > 2 && check($(".turned"))== false) {
 //   deckReset();
//}
//})




// work out if cards are a match

//function isPair() {
 //   if 
    // cardOne === CardTwo {
 //       $(this).addClass('.matched');
//    }
// //}

// if match congratulations:

//$(".matched").function() {
 //   alert ("Well Done!");
   // $(".welldone").show();
    
//}



// if match score point:

// if not match better luck & missed attempt score:

// when all matched = well done! & display score: