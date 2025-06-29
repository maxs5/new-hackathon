
// Случайное целое число от min до max
export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

// Случайный цвет в формате hsl
export function randomColor() {
  return `hsl(${random(0, 360)}, 70%, 60%)`;
}

// Плавное исчезновение и удаление элемента
export function removeWithFadeOut(element, timeout = 500) {
  element.style.transition = 'opacity 0.5s ease';
  element.style.opacity = '0';
  setTimeout(() => element.remove(), timeout);
}
export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

