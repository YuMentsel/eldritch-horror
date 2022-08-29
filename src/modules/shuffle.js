import { choiceDifficulty } from './random.js';
import { dotsNum } from './flipCards';
import { getCardsAll, getCards } from './getCardsForAncient.js';

const shuffleButton = document.querySelector('.shuffle-button');
const playContainer = document.querySelector('.play-container');

export let stageOneAzathoth;
export let stageTwoAzathoth;
export let stageThreeAzathoth;
export let stageAllAzathoth;

export function shuffleDeck () {
  shuffleButton.classList.toggle('none');
  playContainer.classList.toggle('none');
  dotsNum();
  choiceDifficulty ();
  getCardsAll(5, 9, 2);

  stageOneAzathoth = getCards(1, 2, 1);
  stageTwoAzathoth = getCards(2, 3, 1);
  stageThreeAzathoth = getCards(2, 4, 0);
  stageAllAzathoth = [
    ...stageThreeAzathoth,
    ...stageTwoAzathoth,
    ...stageOneAzathoth,
  ];

}

