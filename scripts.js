$(document).ready(function(){
    $();
    // onclick - click card, card flips click card 2, card flips:  from https://medium.com/free-code-camp/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae

// choose dificulty level

// start game (shuffle cards on load)

startGame();

function startGame(){
    shuffleDeck();
    countdownTimer();
    // startClickCounter
    // startPairCounter
    // addClicks
}

function countdownTimer(){

    let secondsLeft = 60;
    setInterval(function(){
        if (secondsLeft <= 0) {
            clearInterval(secondsLeft = 0);
            $('#timer').html("<h3>Time's Up!</h3>");
        } 
            $('#time').text(secondsLeft);
            secondsLeft -=1
        },  1000);
    } 


function shuffleDeck() {
    $(".game-card").each(function() {
        let shuffledDeck = Math.floor(Math.random()* 21);
        console.log(shuffledDeck);
        console.log(this.style.order);    
     this.style.order = shuffledDeck;
    },)   
  }
},)

validateCardFlip();

// when clicked a card flips to hide back face (card-back) and show front face (card-front) face. 
// rules - flip card only if:
// 0 or 1 cards are already flipped
// not all pairs have already been matched 
// the card has not already been matched
function validateCardFlip(){

    if 
      (!$(".game-card").hasClass(".flip") || !$(".game-card").hasClass(".matched")) {

            $(".game-card").on("click",function(){
                $(this).addClass("flip"); 
                });
            }
        }    
        console.log(validateCardFlip);      
    {        
    ($(this).click(function() {
        $().off("click")
    })
    )}

    let flippedCards = [];

  function flippedCard() {
      flippedCards.push(this);
      var cardslength = flippedCards.length;
      if (cardslength === 2) {
          addClicks();
          if(cardslength[0].type === cardslength[1].type) {
              isPair();
          } else {
              isNotPair();
          }

      }
  } console.log(flippedCards.length);

// let flippedCards = [];

// work out if cards are a match
////let flippedCard = $(".game-card").hasClass((".flip"));
////let pushedCard = flippedCards.push(flippedCard.dataset);
//console.log(flippedCards,[]);
//let checkPair = 
//let cardOne = flippedCard.length
//let cardTwo = cardOne
//function isPair() {

//    if (cardOne.dataset.value === cardTwo.dataset.value) {
//        $(".game-card").addClass(".matched");
        
//    }
//  }
//};


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
