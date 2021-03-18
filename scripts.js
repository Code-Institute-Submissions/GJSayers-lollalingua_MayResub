$(document).ready(function () {
    $();
    // onclick - click card, card flips click card 2, card flips:  inspiration from https://medium.com/free-code-camp/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae

    // choose dificulty level
    // start game (shuffle cards on load)

    startGame();

    function startGame() {
        shuffleDeckEn();
        shuffleDeckFrench();
        shuffleDeckItalian();
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
    function shuffleDeckEn() {
        $(".game-card-en").each(function () {
            let shuffledDeckEn = Math.floor(Math.random() * 21);
            console.log(shuffledDeckEn);
            console.log(this.style.order);
            this.style.order = shuffledDeckEn;
        })
    }
    //NEED TO SET INDIVIDUAL SHUFFLE PER COUNTRY DECK - **** NOT YET WORKING ****
    function shuffleDeckFrench() {
        $(".game-card-fr").each(function () {
            let shuffleDeckFrench = Math.floor(Math.random() * 21);
            console.log(shuffleDeckFrench);
            console.log(this.style.order);
            this.style.order = shuffleDeckFrench;
        })
    }
    function shuffleDeckItalian() {
        $(".game-card-it").each(function () {
            let shuffleDeckItalian = Math.floor(Math.random() * 21);
            console.log(shuffleDeckItalian);
            console.log(this.style.order);
            this.style.order = shuffleDeckItalian;
        })
    }


    // global variables 
    const gameCards = document.querySelectorAll(".game-card"); //allows access to call and edit game-cards throughout the game
    let isFlippedCard = false; // to identify which cards are turned 
    let freezePlay = false; // to reference during checking function to ensure not too many cards are turned or checked at once
    let cardOne, cardTwo; // to identify the first and second cards flipped and be able to check them against each other. 
    var matchedPairs = [];
    var matchedPair = 0;

   // playGame();
    gameCards.forEach(gameCards => gameCards.addEventListener("click", playGame));
    function playGame(){
        if (freezePlay) return;
        if (this === cardOne) return;
        $(this).addClass("flip");

        if (!isFlippedCard) {
            isFlippedCard = true;
            cardOne = this;
            
        } else {
            isFlippedCard = false;
            cardTwo = this;
            console.log(cardOne);
            console.log(cardTwo);

            isPair();
        }


        function isPair() {
            if (cardOne.dataset.ident === cardTwo.dataset.ident) {
                cardOne.classList.add("matched");
                cardTwo.classList.add("matched");
                matchedPairs.push($(".matched"));

                console.log(matchedPairs.length);
                disableCardClick();
                // check functionality of add class matched - matched score point to be added here
            } else {
                unFlipCards();
            }
        }

        function disableCardClick() {
            cardOne.removeEventListener("click", playGame);
            cardTwo.removeEventListener("click", playGame);
            // check functionality - changed to plain js

        }

        function unFlipCards() {
            freezePlay = true;
            setTimeout(() => {
                cardOne.classList.remove("flip");
                cardTwo.classList.remove("flip");

                clearDeck();
            }, 1700);
        }
        function clearDeck() {
            isFlippedCard = false;
            freezePlay = false;
            cardOne = null;
            cardTwo = null;
        }
    }

    //fucntion push scores to score board & add star per matched page. 
})







             // works out if it is a relevant time in the card to allow a card to be clicked to face up (to add class flip) ---**logic looks wrong, check**!!

   // function validateCardFlip() {
   //     this.flippedCards = [];
    //    flippedCards.push($(this).hasClass(".flip"));
     //   console.log(flippedCards.length);

     //   if ((secondsLeft > 0) && (flippedCards.length = 2)) {

    //        checkCardsLength();
     //   }
    //} 

             // checks how many cards have been flipped
   // function checkCardsLength() {
    //    console.log(flippedCards.length);{
    //    if (flippedCards.length === 2) {
     //       disableClick(); };
     //   }
     //   };
            // prevents further cards from being turned and returns unmatched pairs to facedown position



            // checks if the two flipped cards are a matching pair

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
