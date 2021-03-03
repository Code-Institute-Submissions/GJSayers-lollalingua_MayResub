$(document).ready(function() {
$();
// choose language:
$("#lang-button-fr").click
(function(){
    $("#italian").hide(1000);
    $("#french").show(1000);
});
$("#lang-button-it").click
(function(){
    $("#french").hide(1000);
    $("#italian").show(1000);
});

// onclick subject page choice action - click card, card flips click card 2, card flips:  from https://medium.com/free-code-camp/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae
const cards = document.querySelectorAll('.game-card');

function flipCard() {
  this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));

}


// ref from codeopen.io https://codepen.io/urilee/pen/EEOyPr. (deleted, re-visit page to re-instate)




// choose avatar:

// display language on chosen subject page:

// spin subject button on hover:

// onclick subject choice action - flip then clik through to page:



// if match congratulations:

// if match score point:

// if not match better luck & missed attempt score:

// when all matched = well done! & display score:
)
