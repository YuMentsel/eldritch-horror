import { randomBrownCards, randomBlueCards, randomGreenCards } from './random.js';

// Получение карт согласно древнему

let randomBlueCardsSet,
    randomBrownCardsSet,
    randomGreenCardsSet;

function getCardsAll(g, br, bl) {
  let randomGreenCardsS = randomGreenCards.slice(0, g);
  let randomBrownCardsS = randomBrownCards.slice(0, br);
  let randomBlueCardsS = randomBlueCards.slice(0, bl);
  randomBrownCardsSet = shuffleBr(randomBrownCardsS);
  randomGreenCardsSet = shuffleBr(randomGreenCardsS);
  randomBlueCardsSet = shuffleBr(randomBlueCardsS);
}

function shuffleBr(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}

function getCards(g, br, bl) {
  let green = randomGreenCardsSet.splice(0, g);
  let brown = randomBrownCardsSet.splice(0, br);
  let blue = randomBlueCardsSet.splice(0, bl);
  let stage = [...green, ...brown, ...blue];

  for (let i = stage.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [stage[i], stage[j]] = [stage[j], stage[i]];
  }
  return stage;
}

export { getCardsAll, getCards, randomBlueCardsSet, randomBrownCardsSet, randomGreenCardsSet };