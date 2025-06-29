import { Module } from '../core/module.js';
import { removeWithFadeOut } from '../utils.js';

export class TimerModule extends Module {
  constructor() {
    super('timer', 'Таймер отсчёта');
  }


let timerInterval = null;
let seconds = 0;

// Обработка кликов по меню
menu.addEventListener('click', e => {
  if (e.target.tagName === 'LI') {
    const action = e.target.dataset.action;

    if (action === 'timer') {
      showTimer();
    } else {
      alert(`Вы выбрали: ${action}`);
    }

    menu.style.display = 'none';
  }
});

function showTimer() {
  const display = document.getElementById('timer-display');
  display.style.display = 'block';
  updateTimerText();
}

function startTimer() {
  if (timerInterval) return;

  timerInterval = setInterval(() => {
    seconds++;
    updateTimerText();
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  pauseTimer();
  seconds = 0;
  updateTimerText();
}

function closeTimer() {
  resetTimer();
  document.getElementById('timer-display').style.display = 'none';
}

function updateTimerText() {
  document.getElementById('timer-time').textContent = `Прошло: ${seconds} с`;
}

// Навешиваем события на кнопки после загрузки DOM
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('start-btn').addEventListener('click', startTimer);
  document.getElementById('pause-btn').addEventListener('click', pauseTimer);
  document.getElementById('reset-btn').addEventListener('click', resetTimer);
  document.getElementById('close-btn').addEventListener('click', closeTimer);
});

function showTimer() {
  const display = document.getElementById('timer-display');
  display.classList.add('visible');
  updateTimerText();
}

function closeTimer() {
  resetTimer();
  const display = document.getElementById('timer-display');
  display.classList.remove('visible');
}
