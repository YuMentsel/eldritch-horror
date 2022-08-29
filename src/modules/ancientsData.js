import { ancient } from './choiceAncient.js';

export const azathoth = [1, 2, 1, 2, 3, 1, 2, 4, 0];
const cthulhu = [0, 2, 2, 1, 3, 0, 3, 4, 0];
const iogSothoth = [0, 2, 1, 2, 3, 1, 3, 4, 0];
const shubNiggurath = [1, 2, 1, 3, 2, 1, 2, 4, 0];

export let ancientsDotsStart = [...azathoth];

export function ancientsData() {
  if (ancient.classList.contains('ancient0')) {
    ancientsDotsStart = [...azathoth];
  } else if (ancient.classList.contains('ancient1')) {
    ancientsDotsStart = [...cthulhu]
  } else if (ancient.classList.contains('ancient2')) {
    ancientsDotsStart = [...iogSothoth]
  } else if (ancient.classList.contains('ancient3')) {
    ancientsDotsStart = [...shubNiggurath]
  }
};

