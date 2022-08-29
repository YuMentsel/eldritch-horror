import {ancientsData} from './ancientsData.js';
import {resetDeckContainer} from './random.js';

export let ancient;

export function choiceAncient (e) {
  const ancientsCard = document.querySelectorAll('.ancient-card');
  ancient = e.target;
  ancientsCard.forEach((el, i) => {
    ancientsCard[i].classList.remove('active');
  });
  ancient.classList.add('active');
  resetDeckContainer()
  ancientsData();
}



