$(document).ready(function () {
    $();
    // onclick - click card, card flips click card 2, card flips:  inspiration from https://medium.com/free-code-camp/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae

    // choose dificulty level
    // start game (shuffle cards on load)

    startGame();

    function startGame() {
        shuffleDeck();
        countdownTimer();
        // startClickCounter
        // startPairCounter
        // addClicks
    }

    function countdownTimer() {

        let secondsLeft = 60;
        setInterval(function () {
            if (secondsLeft <= 0) {
                clearInterval(secondsLeft = 0);
                $('#timer').html("<h3>Time's Up!</h3>");
            }
            $('#time').text(secondsLeft);
            secondsLeft -= 1
        }, 1000);
    }

    // this function ensures the cards are not always displayed in the same format, and not next to each other in pairs ***works**
    function shuffleDeck() {
        $(".game-card").each(function () {
            let shuffledDeck = Math.floor(Math.random() * 21);
            console.log(shuffledDeck);
            console.log(this.style.order);
            this.style.order = shuffledDeck;
        })
    }
})

// global variables 
const gameCards = document.querySelectorAll(".game-card"); //allows access to call and edit game-cards throughout the game
let isFlippedCard = false; // to identify which cards are turned 
let freezePlay = false; // to reference during checking function to ensure not too many cards are turned or checked at once
let cardOne,cardTwo; // to identify the first and second cards flipped and be able to check them against each other. 

function playGame() {
    
   if (freezePlay) return;
   if (this === cardOne) return;
        $(this).addClass("flip");

   if (!isFlippedCard) {
     isFlippedCard = true;
     cardOne = this;
   } else {
       isFlippedCard = false;
       cardTwo = this;
   }        
}

$(".game-card").click(function(){
         $(".game-gard").trigger("validateCardFlip");
});
}
             // works out if it is a relevant time in the card to allow a card to be clicked to face up (to add class flip) ---**logic looks wrong, check**!!
      
    function validateCardFlip() {
        this.flippedCards = [];
        flippedCards.push($(this).hasClass(".flip"));
        console.log(flippedCards.length);

        if ((secondsLeft > 0) && (flippedCards.length = 2)) {
            
            checkCardsLength();
        }
    } 
        
             // checks how many cards have been flipped
    function checkCardsLength() {
        console.log(flippedCards.length);{
        if (flippedCards.length === 2) {
            disableClick(); };
        }
        };
            // prevents further cards from being turned and returns unmatched pairs to facedown position
            
    function disableClick() {
        $(this).click(function () {
                $(".game-card").off("click");
                $(this).removeClass(".flip");
                })
            };
        
            // checks if the two flipped cards are a matching pair
            checkForMatch(); 

            function checkForMatch() {
                let flippedCards = [];
                flippedCards.push($(this).hasClass(".flip"));
                console.log(flippedCards.length);
                
                var cardOne = flippedCards[0];
                var cardTwo = flippedCards[1];
                console.log(flippedCards.length);
                let flippedCard = flippedCards.push($(this).hasClass(".flip"));
                console.log(cardOne.img.class);
                console.log(cardTwo.img.class);
                if
                    ((cardOne.img.class) === (cardTwo.img.class)) {
                    $(".flip").addClass("matched");
                    console.log(cardOne.img.class);
                    console.log(cardTwo.img.class);
                    console.log('matching pair!');

                } else {
                    $(this).removeClass("flip");
                }
            }
           // if (flippedCards.length !== 2) {
           //     let isNotPair = true;
           //     $(this).removeClass("flip");
           //    console.log(isNotPair, true);
            
        
    



    //if 
    //((($(".game-card").hasClass(".flip") || $(".game-card").hasClass(".matched"))) && (secondsLeft > 0)); {
// let flippedCards = [];
// work out if cards are a match
////let flippedCard = $(".game-card").hasClass((".flip"));
//let pushedCard = flippedCards.push(flippedCard.dataset);
//console.log(flippedCards,[]);
//let checkPair = 
//let cardOne = flippedCard.length
//let cardTwo = cardOne
//function isPair() {
//  two cards are flipped, stop futher cards from being flipped and re-place deck all face down
// if match congratulations:
//$(".matched").function() {
 //   alert ("Well Done!");
   // $(".welldone").show();
//}
// if match score point:
// if not match better luck & missed attempt score:
// when all matched = well done! & display score:
