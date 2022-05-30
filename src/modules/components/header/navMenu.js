import ListItem from './listItem';
import Link from './link';
import BurgerMenu from '../burgerMenu/burgerMenu';
import { structureHeader } from './structure';
class NavMenu {
  container = document.createElement('div');
  headerWrapper = document.createElement('div');
  headerWrapperNav = document.createElement('nav');
  headerWrapperList = document.createElement('ul');
  constructor() {
    this.burgerMenu = new BurgerMenu();
    this.appendWrappers();
    this.getList();
    this.addClassList();
  }

  getList() {
    structureHeader.links.forEach((link) => {
      if (link.name !== 'svg') {
        this.headerWrapperList.append(new ListItem(link, 'header').element);
      }
    });
  }
  addClassList() {
    this.container.classList.add('container');
    this.headerWrapper.classList.add('header-wrapper');
    this.headerWrapperNav.classList.add('header-wrapper__nav');
    this.headerWrapperList.classList.add('header-wrapper__list');
  }
  appendWrappers() {
    this.headerWrapperNav.prepend(this.burgerMenu.element);
    this.headerWrapperNav.append(this.headerWrapperList);
    this.headerWrapper.append(this.headerWrapperNav, new Link('svg').element);
    this.container.append(this.headerWrapper);
  }
}
export default NavMenu;
