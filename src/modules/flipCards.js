import {ancientsDotsStart, ancientsData} from './ancientsData.js';
import {
  stageAllAzathoth,
  stageOneAzathoth,
  stageTwoAzathoth,
  stageThreeAzathoth,
} from './shuffle.js';

const lastCard = document.querySelector('.last-card');
const deck = document.querySelector('.deck');
const stageOne = document.querySelector('.one');
const stageTwo = document.querySelector('.two');
const stageThree = document.querySelector('.three');
const dots = document.querySelectorAll('.dot');
let count = 0;

// Номерация кружков

let ancientsDots = [...ancientsDotsStart];

export function dotsNum() {
  ancientsData();
  dots.forEach((el, i) => {
    el.textContent = ancientsDots[i];
  });
}

export function dotsNumReset() {
  ancientsData();
  ancientsDots = [...ancientsDotsStart];
  count = 0;
}

// Перелистывание карт

export function getNextCard() {
  if (stageAllAzathoth.length == 1) {
    deck.removeEventListener('click', getNextCard);
    deck.style.backgroundImage = 'none';
    deck.style.cursor = 'default';
    let nextCard = stageAllAzathoth.pop();
    lastCard.style.backgroundImage = `url(${nextCard.cardFace})`;
    dots.forEach((el) => {
      el.textContent = 0;
    });
    stageThree.classList.add('done');
  } else {
    let nextCard = stageAllAzathoth.pop();
    lastCard.style.backgroundImage = `url(${nextCard.cardFace})`;
    count++;
    if (count == stageOneAzathoth.length) stageOne.classList.add('done');
    if (count == stageOneAzathoth.length + stageTwoAzathoth.length) stageTwo.classList.add('done');

    if (count <= stageOneAzathoth.length) {
      if (nextCard.color == 'green') ancientsDots[0]--;
      else if (nextCard.color == 'brown') ancientsDots[1]--;
      else if (nextCard.color == 'blue') ancientsDots[2]--;
      dotsNum();
    } else if (count <= stageOneAzathoth.length + stageTwoAzathoth.length) {
      if (nextCard.color == 'green') ancientsDots[3]--;
      else if (nextCard.color == 'brown') ancientsDots[4]--;
      else if (nextCard.color == 'blue') ancientsDots[5]--;
      dotsNum();
    } else {
      if (nextCard.color == 'green') ancientsDots[6]--;
      else if (nextCard.color == 'brown') ancientsDots[7]--;
      else if (nextCard.color == 'blue') ancientsDots[8]--;
      dotsNum();
    }
  }
}
