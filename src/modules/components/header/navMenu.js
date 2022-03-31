import ListItem from './listItem';
import Link from './link';
import BurgerMenu from './burgerMenu';
import ApiService from '../api-service/api-service';

const typeStructure = 'header';

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
    const structure = await this.service.getStructure(typeStructure);
    this.getList(structure);
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
