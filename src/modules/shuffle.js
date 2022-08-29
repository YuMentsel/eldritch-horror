import { choiceDifficulty } from './random.js';
import { dotsNum } from './flipCards.js';
import { getCardsAll, getCards } from './getCardsForAncient.js';
import { ancientsData } from './ancientsData.js';
import background from '../assets/background';

const shuffleButton = document.querySelector('.shuffle-button');
const playContainer = document.querySelector('.play-container');
const deck = document.querySelector('.deck');

export let stageOneAzathoth;
export let stageTwoAzathoth;
export let stageThreeAzathoth;
export let stageAllAzathoth;

const ancientCard = document.querySelectorAll('.ancient-card');

export function checkAncient() {
  let anc;ancientCard.forEach((el, i) => {
    if (ancientCard[i].classList.contains('active')) { 
      anc = ancientCard[i];
    }
  });
  if (anc.classList.contains('ancient0')) {
    getCardsAll(5, 9, 2);
    stageOneAzathoth = getCards(1, 2, 1);
    stageTwoAzathoth = getCards(2, 3, 1);
    stageThreeAzathoth = getCards(2, 4, 0);
  }else if (anc.classList.contains('ancient1')) {
    getCardsAll(4, 9, 2);
    stageOneAzathoth = getCards(0, 2, 2);
    stageTwoAzathoth = getCards(1, 3, 0);
    stageThreeAzathoth = getCards(3, 4, 0);
  } else if (anc.classList.contains('ancient2')) {
    getCardsAll(5, 9, 2);
    stageOneAzathoth = getCards(0, 2, 1);
    stageTwoAzathoth = getCards(2, 3, 1);
    stageThreeAzathoth = getCards(3, 4, 0);
  } else if (anc.classList.contains('ancient3')) {
    getCardsAll(6, 8, 2);
    stageOneAzathoth = getCards(1, 2, 1);
    stageTwoAzathoth = getCards(3, 2, 1);
    stageThreeAzathoth = getCards(2, 4, 0);
  };
  
  stageAllAzathoth = [
    ...stageThreeAzathoth,
    ...stageTwoAzathoth,
    ...stageOneAzathoth,
  ];
}

export function shuffleDeck () {
  ancientsData();
  shuffleButton.classList.toggle('none');
  playContainer.classList.toggle('none');
  deck.style.backgroundImage = `url(${background})`;
  choiceDifficulty ();
  checkAncient();
  dotsNum();
}



