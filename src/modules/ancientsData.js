import ancients from '../assets/Ancients/index.js';

export const azathoth = [1, 2, 1, 2, 3, 1, 2, 4, 0];
export const cthulhu = [0, 2, 2, 1, 3, 0, 3, 4, 0];
export const iogSothoth = [0, 2, 1, 2, 3, 1, 3, 4, 0];
export const shubNiggurath = [1, 2, 1, 3, 2, 1, 2, 4, 0];
const ancientsContainer = document.querySelector('.ancients-container');


ancients.forEach((el, i) => {
  const li = document.createElement('li');
  if (i==0) {
    li.classList.add('active');
  }
  li.classList.add('ancient-card');
  li.classList.add(`ancient${i}`);
  li.style.backgroundImage = `url(${ancients[i]})`;
  ancientsContainer.append(li);
});

export let ancientsDotsStart;

export function ancientsData() {
  const ancientCard = document.querySelectorAll('.ancient-card');
  if (ancientCard[0].classList.contains('active')) {
    ancientsDotsStart = [...azathoth];
  } else if (ancientCard[1].classList.contains('active')) {
    ancientsDotsStart = [...cthulhu];
  } else if (ancientCard[2].classList.contains('active')) {
    ancientsDotsStart = [...iogSothoth];
  } else if (ancientCard[3].classList.contains('active')) {
    ancientsDotsStart = [...shubNiggurath];
  }
};

ancientsData();




// ancientsData();


