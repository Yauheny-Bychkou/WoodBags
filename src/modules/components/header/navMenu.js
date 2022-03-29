import ListItem from './listItem';
import Link from './link';
import BurgerMenu from './burgerMenu';
import ApiService from '../api-service/api-service';

const typeStructure = 'header';
const firstElement = 0;

class NavMenu {
  container = document.createElement('div');
  headerWrapper = document.createElement('div');
  headerWrapperNav = document.createElement('nav');
  headerWrapperList = document.createElement('ul');
  constructor() {
    this.service = new ApiService();
    this.burgerMenu = new BurgerMenu();
    this.appendWrappers();
    this.getStructure();
    this.addClassList();
  }
  async getStructure() {
    const requestStructure = await this.service.getStructure();
    const headerStructure = requestStructure.filter((elem) => {
      if (elem.type === typeStructure) {
        return elem;
      }
    });
    this.getList(headerStructure[firstElement]);
  }
  getList(structure) {
    structure.links.forEach((link) => {
      if (link.name !== 'svg') {
        this.headerWrapperList.append(new ListItem(link).element);
      } else if (link.name === 'svg') {
        this.headerWrapperNav.append(new Link(link).element);
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
    this.headerWrapper.append(this.headerWrapperNav);
    this.container.append(this.headerWrapper);
  }
}
export default NavMenu;
