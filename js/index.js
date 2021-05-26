import { colors } from "../colors.js";

const refs = {
  body: document.querySelector('body'),
  btStart: document.querySelector('button[data-action="start"]'),
  btStop: document.querySelector('button[data-action="stop"]'),
}

//console.log(refs);
let intervalId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.btStart.addEventListener('click', onStartClick);
refs.btStop.addEventListener('click', stopChangeColor);

function onStartClick() {
  refs.btStart.disabled = true;

  intervalId = setInterval(() => {
    const indColor = randomIntegerFromInterval(0, colors.length - 1);
    refs.body.style.background = colors[indColor];

  }, 1000);
}

function stopChangeColor() {
  refs.btStart.disabled = false;
  clearInterval(intervalId);
}





