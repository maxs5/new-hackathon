const menu = document.getElementById('custom-menu');

window.addEventListener('contextmenu', e => {
  e.preventDefault();  // отключаем стандартное меню

  // вычисляем размеры окна и меню
  const winW = window.innerWidth;
  const winH = window.innerHeight;
  const menuW = menu.offsetWidth;
  const menuH = menu.offsetHeight;

  // начальные координаты
  let x = e.clientX;
  let y = e.clientY;

  // корректируем, чтобы меню не выходило за границы
  if (x + menuW > winW)  x = winW  - menuW;
  if (y + menuH > winH)  y = winH  - menuH;

  menu.style.left    = x + 'px';
  menu.style.top     = y + 'px';
  menu.style.display = 'block';
});

// Прячем меню при клике вне его
window.addEventListener('click', e => {
  if (!menu.contains(e.target)) {
    menu.style.display = 'none';
  }
});

// Обработка выбора пункта меню
menu.addEventListener('click', e => {
  if (e.target.tagName === 'LI') {
    const action = e.target.dataset.action;
    menu.style.display = 'none';
  }
});


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
