import ListItem from '../header/listItem';
import ProductCard from './productCard';
import BurgerMenu from '../burgerMenu/burgerMenu';
import { structureModal } from './structure';
import './style.css';

class Modal {
  element = document.createElement('div');
  content = document.createElement('div');
  container = document.createElement('div');
  modalHeader = document.createElement('div');
  wrapperBurger = document.createElement('div');
  lineMenuTop = document.createElement('div');
  lineMenuBottom = document.createElement('div');
  modalNav = document.createElement('nav');
  modalList = document.createElement('ul');
  wrapperProducts = document.createElement('div');
  wrapperCards = document.createElement('div');
  titleWrapper = document.createElement('div');
  titleLine = document.createElement('div');
  title = document.createElement('h2');

  constructor() {
    this.addClassName();
    this.getList();
    this.appendWrappers();
  }
  getList() {
    structureModal.links.forEach((link) => {
      this.modalList.append(new ListItem(link, 'modal').element);
    });
  }
  appendWrappers() {
    const burger = new BurgerMenu();
    burger.link.classList.add('menu-btn-modal');
    burger.span.classList.add('menu-span-modal');
    this.wrapperBurger.append(burger.element);
    this.modalNav.append(this.lineMenuTop, this.modalList, this.lineMenuBottom);
    this.modalHeader.append(this.modalNav);
    this.container.append(this.wrapperBurger, this.modalHeader, this.wrapperProducts);
    this.content.append(this.container);
    this.element.append(this.content);
  }
  addClassName() {
    this.lineMenuTop.classList.add('menu-line-modal');
    this.lineMenuBottom.classList.add('menu-line-modal');
    this.wrapperBurger.classList.add('wrapper-burger');
    this.element.classList.add('modal');
    this.modalHeader.classList.add('modal-header');
    this.container.classList.add('container-modal');
    this.wrapperProducts.classList.add('modal-products');
    this.modalNav.classList.add('modal-nav');
    this.modalList.classList.add('modal-list');
    this.content.classList.add('modal-content');
    this.titleWrapper.classList.add('modal-wrapper-title');
    this.titleLine.classList.add('modal-wrapper-line');
    this.title.classList.add('modal-title');
    this.wrapperCards.classList.add('wrapper-cards');
  }
  addWrapperProducts(typeProduct) {
    this.wrapperProducts.innerHTML = '';
    this.wrapperCards.innerHTML = '';
    this.titleWrapper.append(this.titleLine, this.title);
    this.wrapperProducts.append(this.titleWrapper, this.wrapperCards);
    this.title.innerHTML = structureModal[typeProduct].title;
    structureModal[typeProduct].products.forEach((product) => {
      this.wrapperCards.append(new ProductCard(product.image, product.name, product.price).element);
    });
  }
}
export default Modal;
