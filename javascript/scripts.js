$(document).ready(function () {
    $();
    // onclick - click card, card flips click card 2, card flips:  inspiration from https://medium.com/free-code-camp/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae

    startGame();

    function startGame() {
        shuffleDeckEn(); //shuffles the english cards deck on load
        shuffleDeckFrench(); //shuffles the french cards deck on load
        shuffleDeckItalian(); //shuffles the italian cards deck on load
    }

    // checks if countdownTimer should be called by validating the number of turns played (two revealed cards = 1 turn and the start of the timer)
    function validateTimer() {
        if (turns === 1) {
            countdownTimer();
        }
    }

    // displays countdown time in the info div
    function countdownTimer() {
        let secondsLeft = 60;
        setInterval(function () {
            if (secondsLeft <= 0) {
                $('#timer').html("<h3>Time's Up!</h3>");
                $(".info").hide(1500);
                $("#game-at-school").hide(1500); 
                $("#game-animals").hide(1500);
                $(".final-score").html(`Thanks for playing!  <br>
                Point scored: ${matchedPairs} <br>
                Turns taken: ${turns}  <br>
                <img src="assets/images/scoring-images/star-point-removebg-preview.png" alt="stars-image"> <br>
                Want to play again?`);
                $("#game-over-modal").css('display', 'block');
                secondsLeft = 60;
                clearDeck();
                //   clearInterval(secondsLeft = 0);
            }

            else if (matchedPairs === 6) {
                $('#timer').html("<h3>You won!</h3>");
                $(".info").hide(1500);
                $("#game-at-school").hide(1500); 
                $("#game-animals").hide(1500);
                $(".final-score").html(`You matched all the pairs!  <br>
                Point scored: ${matchedPairs} <br>
                Turns taken: ${turns}  <br>
                <img src="assets/images/scoring-images/star-point-removebg-preview.png" alt="stars-image"> <br>
                Want to play again?`);
                $("#game-over-modal").css('display', 'block');
                secondsLeft = 60;
                clearDeck();
                
            }

            $('#time').text(secondsLeft);
            secondsLeft -= 1;
            }, 1000);
    };

    // counts number of flips/turns a player has made and pushes them to index.html for front-end display - calls validateTimer function to see if countdownTimer should be called.
    function turnsCounter() {
        $('#turns').text(turns);
        console.log(turns);
        validateTimer();
    }

    // this function ensures the English cards are not always displayed in the same format, and not next to each other in pairs 
    function shuffleDeckEn() {
        $(".game-card-en").each(function () {
            let shuffledDeckEn = Math.floor(Math.random() * 21);
            console.log(shuffledDeckEn);
            console.log(this.style.order);
            this.style.order = shuffledDeckEn;
        });
    }
    // this function ensures the French cards are not always displayed in the same format, and not next to each other in pairs for the French deck
    function shuffleDeckFrench() {
        $(".game-card-fr").each(function () {
            let shuffleDeckFrench = Math.floor(Math.random() * 21);
            console.log(shuffleDeckFrench);
            console.log(this.style.order);
            this.style.order = shuffleDeckFrench;
        });
    }

    // this function ensures the Italian cards are not always displayed in the same format, and not next to each other in pairs for the Italian deck
    function shuffleDeckItalian() {
        $(".game-card-it").each(function () {
            let shuffleDeckItalian = Math.floor(Math.random() * 21);
            console.log(shuffleDeckItalian);
            console.log(this.style.order);
            this.style.order = shuffleDeckItalian;
        });
    }

    // global variables 
    // const gameCards = document.querySelectorAll(".game-card"); //allows access to call and edit game-cards throughout the game
    const gameCardsEn = document.querySelectorAll(".game-card-en"); //allows access to call and edit English game-cards throughout the game
    const gameCardsIt = document.querySelectorAll(".game-card-it"); //allows access to call and edit Italian game-cards throughout the game
    const gameCardsFr = document.querySelectorAll(".game-card-fr"); //allows access to call and edit French game-cards throughout the game
    let isFlippedCard = false; // to identify which cards are turned 
    let freezePlay = false; // to reference during playGame function to ensure not too many cards are turned or checked at once
    let cardOne, cardTwo; // to identify the first and second cards flipped and be able to check them against each other. 
    var matchedPairs = [];  // array populated by number of pairs matched in isPair function
    //  matchedPairs array length to display as score in info div
    var turns = [];  // array populated by number of clicks in turnCounter function
    
    var enCardInPlay = []; // to identify how many English cards are in play and avoid two flipping in any given turns
    var frCardInPlay = []; // to identify how many French cards are in play and avoid two flipping in any given turns
    var itCardInPlay = []; // to identify how many Italian cards are in play and avoid two flipping in any given turns



    /* gameCards.forEach(gameCards => gameCards.addEventListener("click", playGame));
    gameCards.forEach(gameCards => gameCards.addEventListener("touchstart", playGame)); */
    $(".game-card-en").on("click",playGame);
    $(".game-card-fr").on("click",playGame);
    $(".game-card-it").on("click",playGame);

    // POTENTIAL FUNCTION FOR FREEZING ENGLISH BOARD



    function freezeEnBoard() {
        if ((enCardInPlay >= 1) && (gameCardsEn)) {
            $(".game-card-en").off("click", playGame);
            $(".game-card-fr").on("click", playGame);
            $(".game-card-it").on("click", playGame);
        };      
    }
    

    function freezeFrBoard() {
        if ((frCardInPlay >= 1) && (gameCardsFr)) {
            $(".game-card-fr").off("click", playGame);
            $(".game-card-en").on("click", playGame);
            $(".game-card-it").on("click", playGame);
        };
    }

    function freezeItBoard() {
        if ((itCardInPlay >= 1) && (gameCardsIt)) {
            $(".game-card-it").off("click", playGame);
            $(".game-card-en").on("click", playGame);
            $(".game-card-fr").on("click", playGame);
        };
    }

        function boardCheck() {
        if (cardOne.classList.contains("game-card-en")) {
            enCardInPlay++;
            console.log(enCardInPlay,frCardInPlay,itCardInPlay, "cards in play");
            freezeEnBoard();
            console.log("freezeEnBoard");   
        } else if  (cardOne.classList.contains("game-card-fr")) {
            frCardInPlay++;
            console.log(enCardInPlay,frCardInPlay,itCardInPlay, "cards in play");
            freezeFrBoard();
            console.log("freezeFrBoard");   
        } else if  (cardOne.classList.contains("game-card-it")) {
            itCardInPlay++;
            console.log(enCardInPlay,frCardInPlay,itCardInPlay, "cards in play");
            freezeItBoard();  
            console.log("freezeItBoard");      
        }   
        };
    


    // this funtion checks if cards are valid to play,  adds a flip class to cards that are valid, and also identifies which are first and second cards in play, then calls isPair. 
    function playGame() {
        if (freezePlay) return;
        if (this === cardOne) return;
        // if (this.parent.id  === cardOne.parent.id) return;
        $(this).addClass("flip");
        console.log(enCardInPlay,frCardInPlay,itCardInPlay, "cards in play");

        // starts the game timer on first click
        if (!isFlippedCard) {
            isFlippedCard = true;
            cardOne = this;
            turns++;
            console.log(turns);
            turnsCounter();
            console.log(enCardInPlay,frCardInPlay,itCardInPlay, "cards in play");
            boardCheck();
            console.log("board check");

        } else {
            isFlippedCard = false;
            cardTwo = this;
            isPair();
            console.log("is pair");
        }};

        // compares cards one and two to see if they are a match based on the data-ident (identifier) in the html. If the cards are a matched, they get a matched class added and are pushed to  matchedPairs variable and disableCardClick prevents further play for a matched pair in this round, else unFlipCards is called to return face down. 
        function scoreCounter() {
            $('#points').append('<img class="points" src="assets/images/scoring-images/star-point-removebg-preview.png" alt="star-points">');
        }

        /*function continuePlay() {
            if ($(".matched")) {
                $(".matched").off("click",playGame);
            }
        }*/

        function isPair() {
            if (cardOne.dataset.ident === cardTwo.dataset.ident) {
                cardOne.classList.add("matched");
                cardTwo.classList.add("matched");
                console.log(cardOne,cardTwo);
                matchedPairs++;
                console.log(matchedPairs);
                console.log(enCardInPlay,frCardInPlay,itCardInPlay);
                disableCardClick();
                console.log("disableCardClick");
                scoreCounter(); // initites the score counter on load
                console.log("scoreCounter");
                //continuePlay();
            } else {
                unFlipCards();
                console.log("unflip cards");
                console.log(enCardInPlay,frCardInPlay,itCardInPlay, "cards in play");
                //continuePlay();

            }
        }

        // prevents further play for a matched pair in this round
        function disableCardClick() {
            $(".matched").off("click", playGame);
            ///$(".matched").removeClass(".flip");
            //cardTwo.removeEventListener("click", playGame);
        }

        // returns cards to original un-flipped state after displaying for a short period of time and stops further cards being clicked in the meantime
        function unFlipCards() {
            freezePlay = true;
            setTimeout(() => {
                cardOne.classList.remove("flip");
                cardTwo.classList.remove("flip");

                clearDeck();
                console.log("clear deck");
            }, 1700);
        }

        //returns deck to original state at start of play
        function clearDeck() {
            isFlippedCard = false;
            freezePlay = false;
            cardOne = null;
            cardTwo = null;
            itCardInPlay = [];
            enCardInPlay = [];
            frCardInPlay = [];
            
            console.log(enCardInPlay,frCardInPlay,itCardInPlay, "cards in play");
        
        }
});


