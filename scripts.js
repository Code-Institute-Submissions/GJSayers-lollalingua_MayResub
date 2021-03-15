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


    function shuffleDeck() {
        $(".game-card").each(function () {
            let shuffledDeck = Math.floor(Math.random() * 21);
            console.log(shuffledDeck);
            console.log(this.style.order);
            this.style.order = shuffledDeck;
        })
    }
})

playGame();

function playGame() {
    let secondsLeft = 60;
    const flippedCards = [];
    $(".game-card").on("click", function () {
        $(this).addClass("flip");
        flippedCards.push($(".game-card").hasClass(".flip"));
        console.log(flippedCards.length);
        
})

$(".game-card").click(function(){
    // something goes here... 
         $(".flip").trigger(function validateCardFlip);
    }
    
    
      
    function validateCardFlip() {

        if ((secondsLeft > 0) && (flippedCards.length = 2)) {
            console.log(flippedCards.length);
            const cardOne = flippedCards[0];
            const cardTwo = flippedCards[1];
            console.log(cardOne);
            console.log(cardTwo);
            checkCardsLength();
        }
    } 
        
    

    function checkCardsLength() {
    console.log(flippedCards.length);
    var checkCardsLength = function () {
        if (flippedCards.length === 2) {
            disableClick();
            function disableClick() {
                $(this).click(function () {
                    $(".game-card").off("click");
                    $(this).removeClass(".flip");
                })
            }
        };
        }
            checkForMatch();

            function checkForMatch() {
                if
                    ((cardOne.dataset.index) === (cardTwo.dataset.index)) {
                    $(".flip").addClass("matched");
                    console.log('matching pair!');

                } else {
                    $("game-card").removeClass("flip");
                }
            }
            if (flippedCards.length !== 2) {
                let isNotPair = true;
                $(".game-card").removeClass("flip");
                console.log(isNotPair, true);
            }
        }
    



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
