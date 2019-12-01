"use sctict";

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const doc = document.querySelector("body");

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
const min = 0;
const max = colors.length;
let interval;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

startBtn.addEventListener("click", () => {
  interval = setInterval(() => {
    doc.style.backgroundColor = colors[randomIntegerFromInterval(min, max)];
  }, 500);
  startBtn.disabled = true;
});

stopBtn.addEventListener("click", () => {
  clearInterval(interval);
  startBtn.disabled = false;
});
