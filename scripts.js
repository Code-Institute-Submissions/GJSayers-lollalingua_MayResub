// onclick - click card, card flips click card 2, card flips:  from https://medium.com/free-code-camp/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae

const cards = document.querySelectorAll('.game-card');

function flipCard() {
  this.classList.toggle('flip');
}



cards.forEach(card => card.addEventListener('click', flipCard));


// when two cards are flipped stop futher cards from being flipped

// work out if cards are a match

// if match congratulations:

// if match score point:

// if not match better luck & missed attempt score:

// when all matched = well done! & display score: