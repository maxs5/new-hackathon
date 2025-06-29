
import { Menu } from './core/menu.js';

export class CustomMenu extends Menu {
  constructor(selector) {
    super(selector);
    this.modules = [];

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.open(event.clientX, event.clientY);
    });

    document.addEventListener('click', () => this.close());
  }

  open(x, y) {
    if (this.modules.length === 0) {
      this.close();
      return;
    }

    this.el.classList.add('open');
    this.el.style.top = `${y}px`;
    this.el.style.left = `${x}px`;
    this.el.innerHTML = '';

    this.modules.forEach((module) => {
      const item = document.createElement('li');
      item.className = 'menu-item';
      item.textContent = module.text;
      item.onclick = () => module.trigger();
      this.el.append(item);
    });
  }

  close() {
    this.el.classList.remove('open');
  }

  add(module) {
    this.modules.push(module);
  }
}


