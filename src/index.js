import './index.html';
import './index.scss';

import { shuffleDeck } from './modules/shuffle.js';
import { getNextCard } from './modules/flipCards.js';
import { choiceAncient } from './modules/choiceAncient.js';

const deck = document.querySelector('.deck');
const shuffleButton = document.querySelector('.shuffle-button');
const ancientsContainer = document.querySelector('.ancients-container');

shuffleButton.addEventListener('click', shuffleDeck);

// Перелистывание карт 
deck.addEventListener('click', getNextCard);

// Выбор древних
ancientsContainer.addEventListener('click', choiceAncient);


