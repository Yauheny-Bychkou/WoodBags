import ListItem from '../header/listItem';
import { structureHeader } from './structure';
import './style.css';

class Menu {
  element = document.createElement('div');
  name = document.createElement('h3');
  nav = document.createElement('nav');
  list = document.createElement('ul');
  lineTop = document.createElement('div');
  lineBottom = document.createElement('div');
  constructor() {
    this.name.classList.add('menu-name');
    this.name.innerHTML = 'Woodbag.s';
    this.lineTop.classList.add('menu-line');
    this.lineBottom.classList.add('menu-line');
    this.element.classList.add('menu', 'none');
    this.nav.classList.add('menu-nav');
    this.list.classList.add('menu-list');
    this.list.prepend(this.name);
    this.nav.append(this.list);
    this.element.append(this.lineTop, this.nav, this.lineBottom);
    this.getList();
  }

  getList() {
    structureHeader.links.forEach((link) => {
      this.list.append(new ListItem(link, 'menu').element);
    });
  }
}
export default Menu;
