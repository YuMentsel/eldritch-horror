import './index.html';
import './index.scss';

import ancients from './assets/Ancients/index.js';
import { shuffleDeck } from './modules/shuffle.js';
import { getNextCard } from './modules/flipCards.js';
import { choiceAncient } from './modules/choiceAncient.js';

const deck = document.querySelector('.deck');
const shuffleButton = document.querySelector('.shuffle-button');
const ancientsContainer = document.querySelector('.ancients-container');

shuffleButton.addEventListener('click', shuffleDeck);

// Перелистывание карт 
deck.addEventListener('click', getNextCard);

// Карты древних
ancients.forEach((el, i) => {
  const li = document.createElement('li');
  li.classList.add('ancient-card');
  li.classList.add(`ancient${i}`);
  li.style.backgroundImage = `url(${ancients[i]})`;
  ancientsContainer.append(li);
});

// Выбор древних
ancientsContainer.addEventListener('click', choiceAncient);