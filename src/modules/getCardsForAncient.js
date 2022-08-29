import { randomBrownCards, randomBlueCards, randomGreenCards } from './random.js';

// Получение карт согласно древнему

let randomBlueCardsSet,
    randomBrownCardsSet,
    randomGreenCardsSet;

function getCardsAll(g, br, bl) {
  randomGreenCardsSet = randomGreenCards.slice(0, g);
  randomBrownCardsSet = randomBrownCards.slice(0, br);
  randomBlueCardsSet = randomBlueCards.slice(0, bl);
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