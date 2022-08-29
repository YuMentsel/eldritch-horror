import {
  brownCards,
  blueCards,
  greenCards,
} from '../data/mythicCards/index.js';
import { getNextCard, dotsNumReset } from './flipCards';
const stageText = document.querySelectorAll('.stage-text');


// Первичный рандом

function shuffleCards(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}

let randBrCards = shuffleCards(brownCards);
let randBlCards = shuffleCards(blueCards);
let randGrCards = shuffleCards(greenCards);

let randomBrownCards;
let randomBlueCards;
let randomGreenCards;

// Сортировка по уровням

const difficulty = document.querySelectorAll('.difficulty');
const difficultyContainer = document.querySelector('.difficulty-container');

function choiceDifficulty() {
  if (difficulty[0].classList.contains('active')) {
    randomBrownCards = [
      ...randBrCards.filter((el) => el.difficulty == 'easy'),
      ...randBrCards.filter((el) => el.difficulty == 'normal'),
    ];
    randomBlueCards = [
      ...randBlCards.filter((el) => el.difficulty == 'easy'),
      ...randBlCards.filter((el) => el.difficulty == 'normal'),
    ];
    randomGreenCards = [
      ...randGrCards.filter((el) => el.difficulty == 'easy'),
      ...randGrCards.filter((el) => el.difficulty == 'normal'),
    ];
  } else if (difficulty[1].classList.contains('active')) {
    randomBrownCards = randBrCards.filter((el) => el.difficulty !== 'hard');
    randomBlueCards = randBlCards.filter((el) => el.difficulty !== 'hard');
    randomGreenCards = randGrCards.filter((el) => el.difficulty !== 'hard');
  } else if (difficulty[2].classList.contains('active')) {
    randomBrownCards = randBrCards;
    randomBlueCards = randBlCards;
    randomGreenCards = randGrCards;
  } else if (difficulty[3].classList.contains('active')) {
    randomBrownCards = randBrCards.filter((el) => el.difficulty !== 'easy');
    randomBlueCards = randBlCards.filter((el) => el.difficulty !== 'easy');
    randomGreenCards = randGrCards.filter((el) => el.difficulty !== 'easy');
  } else if (difficulty[4].classList.contains('active')) {
    randomBrownCards = [
      ...randBrCards.filter((el) => el.difficulty == 'hard'),
      ...randBrCards.filter((el) => el.difficulty == 'normal'),
    ];
    randomBlueCards = [
      ...randBlCards.filter((el) => el.difficulty == 'hard'),
      ...randBlCards.filter((el) => el.difficulty == 'normal'),
    ];
    randomGreenCards = [
      ...randGrCards.filter((el) => el.difficulty == 'hard'),
      ...randGrCards.filter((el) => el.difficulty == 'normal'),
    ];
  } else {
    randomBrownCards = randBrCards;
    randomBlueCards = randBlCards;
    randomGreenCards = randGrCards;
  }
}

// Сброс предыдущей раскладки

const shuffleButton = document.querySelector('.shuffle-button');
const playContainer = document.querySelector('.play-container');
const lastCard = document.querySelector('.last-card');
const deck = document.querySelector('.deck');

function resetDeckContainer() {
  shuffleButton.classList.remove('none');
  playContainer.classList.add('none');
  lastCard.style.backgroundImage = 'none';
  deck.style.cursor = 'pointer';
  deck.addEventListener('click', getNextCard);
  dotsNumReset();
  stageText.forEach((el, i) => {
    stageText[i].classList.remove('done');
  });
}

///////////////////////////////////////////////////////

// Переключение сложности повторный расклад

function toggleDifficulty(e) {
  let curr = e.target;
  difficulty.forEach((el, i) => {
    difficulty[i].classList.remove('active');
  });
  curr.classList.add('active');
  resetDeckContainer();
}

difficultyContainer.addEventListener('click', toggleDifficulty);

export {
  randomBrownCards,
  randomBlueCards,
  randomGreenCards,
  choiceDifficulty,
  resetDeckContainer
};
