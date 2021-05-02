$(document).ready(function () {
    $();
    // onclick - click card, card flips click card 2, card flips:  inspiration from https://medium.com/free-code-camp/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae

    startGame();
    // sets up the game to initiate play
    function startGame() {
        console.log(startGame);
        shuffleDeckEn(); //shuffles the english cards deck on load
        shuffleDeckFrench(); //shuffles the french cards deck on load
        shuffleDeckItalian(); //shuffles the italian cards deck on load
        turns = [];
        console.log(turns);
        matchedPairs = [];
        console.log(matchedPairs);
        $(".game-card").removeClass(".matched");
        secondsLeft = 60;
    }
    // checks if countdownTimer should be called by validating the number of turns played (two revealed cards = 1 turn and the start of the timer)
    function validateTimer() {
        console.log(validateTimer);
        if (turns === 1) {
            countdownTimer();
        }
    }

    // starts the countdown time on first card flip - displays countdown time in the info div and also displays a time's up message to the html once the 60 seconds are over.  In the first if statement,  all pairs are not matched within the time and a game-over modal is displaed stating the pairs matched and turns taken with the option to start again.   
    function countdownTimer() {
        console.log(countdownTimer);
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
                $(".welcome-message").hide(1000);
                $(".welcome").hide(1000);
                
            }
            // if all pairs are matched in the 60 seconds a winning modal is activated and the option to play again is given.  
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
                
            }
            // populates the info div with the countdown seconds. 
            $('#time').text(secondsLeft);
            secondsLeft -= 1;
            }, 1000);
            };
            
            // reloads the page to play again
            $("#modal-play-again-btn").on("click",function() {
            location.reload();
            }); 

            // counts number of flips/turns a player has made and pushes them to index.html for front-end display - calls validateTimer function to see if countdownTimer should be called.
            function turnsCounter() {
            $('#turns').text(turns);
            console.log(turns);
            validateTimer();
            }

            // shuffles English cards so they are not always displayed in the same format, and not next to each other in pairs 
            function shuffleDeckEn() {
            $(".game-card-en").each(function () {
            let shuffledDeckEn = Math.floor(Math.random() * 21);
            console.log(shuffledDeckEn);
            console.log(this.style.order);
            this.style.order = shuffledDeckEn;
            });
            }
            // shuffles French cards so they are not always displayed in the same format, and not next to each other in pairs for the French deck
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
        const gameCardsEn = document.querySelectorAll(".game-card-en"); //allows access to call/ edit English game-cards throughout the game
        const gameCardsIt = document.querySelectorAll(".game-card-it"); //allows access to call/ edit Italian game-cards throughout the game
        const gameCardsFr = document.querySelectorAll(".game-card-fr"); //allows access to call/ edit French game-cards throughout the game
        let isFlippedCard = false; // to identify which cards are turned 
        let freezePlay = false;    // to reference during playGame function to ensure not too many cards are turned or checked at once
        let cardOne, cardTwo;      // to identify the first and second cards flipped and be able to check them against each other. 
        var matchedPairs = [];     // array populated by matched pairs in isPair function - Used to append image to score div
        var turns = [];            // array populated by number of clicks in turnCounter function
        var enCardInPlay = [];     // to identify how many English cards are in play and avoid two flipping in any given turns
        var frCardInPlay = [];     // to identify how many French cards are in play and avoid two flipping in any given turns
        var itCardInPlay = [];     // to identify how many Italian cards are in play and avoid two flipping in any given turns

        // event listener to activate card-flipping / game play
        $(".game-card-en").on("click",playGame);
        $(".game-card-fr").on("click",playGame);
        $(".game-card-it").on("click",playGame);

        // activates on boardCheck(); based on first card turned to ensure that second card flipped cannot be from the English board
        function freezeEnBoard() {
            if ((enCardInPlay >= 1) && (gameCardsEn)) {
                $(".game-card-en").off("click", playGame);
                $(".game-card-fr").on("click", playGame);
                $(".game-card-it").on("click", playGame);
            };      
        }
        // activates on boardCheck(); based on first card turned to ensure that second card flipped cannot be from the French board
        function freezeFrBoard() {
            if ((frCardInPlay >= 1) && (gameCardsFr)) {
                $(".game-card-fr").off("click", playGame);
                $(".game-card-en").on("click", playGame);
                $(".game-card-it").on("click", playGame);
            };
        }
        // activates on boardCheck(); based on first card turned to ensure that second card flipped cannot be from the Italian board
        function freezeItBoard() {
            if ((itCardInPlay >= 1) && (gameCardsIt)) {
                $(".game-card-it").off("click", playGame);
                $(".game-card-en").on("click", playGame);
                $(".game-card-fr").on("click", playGame);
            };
        }
        // Checks which board the first card flipped is - Adds to the Cards in play lists for reference in freezeBoard functions
        function boardCheck() {
        if (cardOne.classList.contains("game-card-en") && (!cardTwo)) {
            enCardInPlay++;
            console.log(enCardInPlay,frCardInPlay,itCardInPlay, "cards in play");
            freezeEnBoard();
            console.log("freezeEnBoard");   
        } else if  (cardOne.classList.contains("game-card-fr") && (!cardTwo)) {
            frCardInPlay++;
            console.log(enCardInPlay,frCardInPlay,itCardInPlay, "cards in play");
            freezeFrBoard();
            console.log("freezeFrBoard");   
        } else if  (cardOne.classList.contains("game-card-it") && (!cardTwo)) {
            itCardInPlay++;
            console.log(enCardInPlay,frCardInPlay,itCardInPlay, "cards in play");
            freezeItBoard();  
            console.log("freezeItBoard");      
        }   
        };

        function clearCardInPlay(){
            if ((itCardInPlay >= 1) && (!document.getElementsByClassName('matched'))) {
                itCardInPlay-- ;
                $(".game-card-en").on("click",playGame);
                $(".game-card-fr").on("click",playGame);
                $(".game-card-it").on("click",playGame);

            } else if ((enCardInPlay >= 1) && (!document.getElementsByClassName('matched'))) {
                enCardInPlay-- ;
                $(".game-card-en").on("click",playGame);
                $(".game-card-fr").on("click",playGame);
                $(".game-card-it").on("click",playGame);
            } else if ((frCardInPlay >= 1) (!document.getElementsByClassName('matched'))) {
                frCardInPlay-- ;
                $(".game-card-en").on("click",playGame);
                $(".game-card-fr").on("click",playGame);
                $(".game-card-it").on("click",playGame);
            }
            console.log(enCardInPlay,frCardInPlay,itCardInPlay, "cards in play");
        }
            
        // this funtion checks if cards are valid to play,  adds a flip class to cards that are valid, and also identifies which are first and second cards in play, then calls isPair. 
        function playGame() {
            if (freezePlay) return;
            if (this === cardOne) return;
            $(this).addClass("flip");
            console.log(enCardInPlay,frCardInPlay,itCardInPlay, "cards in play");
            // Sets first card in play as CardOne and activates turnsCounter(); and boardCheck();
            if (!isFlippedCard) {
                isFlippedCard = true;
                cardOne = this;
                turns++;
                console.log(turns);
                turnsCounter();
                console.log(enCardInPlay,frCardInPlay,itCardInPlay, "cards in play");
                boardCheck();
                console.log("board check");
                // If this is the second flip of a turn, activates isPair(); and clearCardInPlay(); to decrement the card in play lists
                } else {
                    isFlippedCard = false;
                    cardTwo = this;
                    isPair();
                    console.log("is pair");
                    clearCardInPlay();
                    console.log(enCardInPlay,frCardInPlay,itCardInPlay, "cards in play");
                }
            };

            // Appends star image to the info board each time a pair is matched
            function scoreCounter() {
                $('#points').append('<img class="points" src="assets/images/scoring-images/star-point-removebg-preview.png" alt="star-points">');
            }

            // Compares cards one and two to see if they are a match based on the data-ident (identifier) in the html. If the cards are a matched, matched class is added, matchedPairs list increments and disableCardClick(); prevents further play for a matched pair in this round, else unFlipCards is called to return face down. 
            function isPair() {
                if (cardOne.dataset.ident === cardTwo.dataset.ident) {
                    cardOne.classList.add("matched");
                    cardTwo.classList.add("matched");
                    console.log(cardOne,cardTwo);
                    matchedPairs++;
                    // matched pairs 
                    console.log(matchedPairs);
                    console.log(enCardInPlay,frCardInPlay,itCardInPlay);
                    disableCardClick();
                    console.log("disableCardClick");
                    scoreCounter(); // initites the score counter on load
                    clearCardInPlay(); // adds the click back on to frozen boards
                    console.log("scoreCounter");
                    //continuePlay();
                } else {
                    unFlipCards();
                    console.log("unflip cards");
                    console.log(enCardInPlay,frCardInPlay,itCardInPlay, "cards in play");
                    clearCardInPlay(); // adds the click back on to frozen boards
                    console.log("clearCardInPlay");
                }
            }

            // prevents further play for a matched pair in this round
            function disableCardClick() {
                $(".matched").off("click", playGame);
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
            }
    });


