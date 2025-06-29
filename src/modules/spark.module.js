import { Module } from '../core/module.js';
import { random } from '../utils.js';

export class SparkModule extends Module {
  constructor() {
    super('spark', 'Искры');
    this.handler = this.createSparks.bind(this);
  }

  trigger() {
    document.addEventListener('click', this.handler);
    alert('Искры активированы! Кликни по экрану ✨');
  }

  createSparks(e) {
    const count = random(5, 10);

    for (let i = 0; i < count; i++) {
      const spark = document.createElement('div');
      spark.className = 'spark';

      const size = random(3, 6);
      const hue = random(0, 360);

      spark.style.width = `${size}px`;
      spark.style.height = `${size}px`;
      spark.style.left = `${e.clientX}px`;
      spark.style.top = `${e.clientY}px`;
      spark.style.backgroundColor = `hsl(${hue}, 90%, 70%)`;

      document.body.appendChild(spark);

      const angle = Math.random() * 2 * Math.PI;
      const distance = random(30, 60);
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance;

      requestAnimationFrame(() => {
        spark.style.transform = `translate(${dx}px, ${dy}px) scale(1.5)`;
        spark.style.opacity = '0';
      });

      setTimeout(() => spark.remove(), 1000);
    }
  }
}
