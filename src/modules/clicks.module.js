import { Module } from '../core/module.js';

export class ClicksModule extends Module {
  constructor() {
    super('clicks', 'Аналитика кликов');
  }

  trigger() {
    let clickCount = 0;
    const duration = 3000; // 3 секунды

    const clickHandler = () => clickCount++;
    document.addEventListener('click', clickHandler);

    const info = document.createElement('div');
    info.className = 'click-info';
    info.textContent = 'Считаем клики...';
    document.body.append(info);

    setTimeout(() => {
      document.removeEventListener('click', clickHandler);
      info.textContent = `Ты кликнул(а) ${clickCount} раз(а) за 3 секунды`;
      setTimeout(() => info.remove(), 3000);
    }, duration);
  }
}
