import Title from '../title/title';
import Card from './card';
import { structureGalery } from './structure';
import './style.css';

class Galary {
  element = document.createElement('section');
  wrapperCards = document.createElement('div');
  wrapperCardsTop = document.createElement('div');
  wrapperCardsBottom = document.createElement('div');
  container = document.createElement('div');
  constructor() {
    this.element.setAttribute('id', 'catalog');
    this.element.classList.add('galery', 'none');
    this.wrapperCards.classList.add('galery-wrapper');
    this.wrapperCardsTop.classList.add('galery-wrapper-top');
    this.wrapperCardsBottom.classList.add('galery-wrapper-bottom');
    this.container.classList.add('container-galery');
    this.getCards();
  }
  getCards() {
    structureGalery.cards.forEach((elem, i) => {
      if (i < 3) {
        this.wrapperCardsTop.append(new Card(elem.nameTranslate, elem.name, elem.img).element);
      } else this.wrapperCardsBottom.append(new Card(elem.nameTranslate, elem.name, elem.img).element);
    });
    this.wrapperCards.append(this.wrapperCardsTop, this.wrapperCardsBottom);
    this.container.append(this.wrapperCards);
    this.element.append(new Title(structureGalery.title).element, this.container);
  }
}
export default Galary;
