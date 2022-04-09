import Title from '../title/title';
import ApiService from '../api-service/api-service';
import './style.css';
import Card from './card';
const typeStructure = 'galery';

class Galary {
  element = document.createElement('section');
  wrapperCards = document.createElement('div');
  wrapperCardsTop = document.createElement('div');
  wrapperCardsBottom = document.createElement('div');
  container = document.createElement('div');
  constructor() {
    this.element.setAttribute('id', 'catalog');
    this.service = new ApiService();
    this.element.classList.add('galery');
    this.wrapperCards.classList.add('galery-wrapper');
    this.wrapperCardsTop.classList.add('galery-wrapper-top');
    this.wrapperCardsBottom.classList.add('galery-wrapper-bottom');
    this.container.classList.add('container');
    this.getStructure();
  }
  async getStructure() {
    const structure = await this.service.getStructure(typeStructure);
    this.getCards(structure);
  }
  getCards(structure) {
    structure.cards.forEach((elem, i) => {
      if (i < 3) {
        this.wrapperCardsTop.append(new Card(elem.nameTranslate, elem.name, elem.img).element);
      } else this.wrapperCardsBottom.append(new Card(elem.nameTranslate, elem.name, elem.img).element);
    });
    this.wrapperCards.append(this.wrapperCardsTop, this.wrapperCardsBottom);
    this.container.append(this.wrapperCards);
    this.element.append(new Title(structure.title).element, this.container);
  }
}
export default Galary;
