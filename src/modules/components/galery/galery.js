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
    this.service = new ApiService();
    this.element.classList.add('galery');
    this.wrapperCards.classList.add('galery-wrapper');
    this.wrapperCardsTop.classList.add('galery-wrapper-top');
    this.wrapperCardsBottom.classList.add('galery-wrapper-bottom');
    this.container.classList.add('container');
    this.container.append(this.wrapperCards);
    this.element.append(new Title('Каталог').element, this.container);
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
  }
  getCode() {
    return `
    <div class="container">
    <div class="about-wrapper">
      <div class="about-wrapper__img">
        <img class="about-wrapper__image" src="about.jpg" alt="about" />
      </div>
      <div class="about-wrapper__text">
        <p class="about-wrapper__description">
        Меня зовут Аня, мне 25 и я технарь, поэтому дрелью и отверткой владею профессионально. Закончила БНТУ,
        энергетический факультет, и как это часто бывает, поняла, что диплом это хорошо, а бизнес лучше.
      </p>
      <p class="about-wrapper__description">
        Поиски «своего дела» были долгими и мучительными, пробовала себя в разных сферах. Потом я влюбилась в идею
        деревянной сумки и создала своего первого «Розового Фламинго», потом подруге сделала сумочку, потом еще одну, а
        потом их оказалось больше 200 и они учувствуют в показах, выставках и ярмарках.
      </p>
      </div>
    </div>
    </div>
    `;
  }
}
export default Galary;
