import Title from '../title/title';
import './style.css';

class About {
  element = document.createElement('section');
  constructor() {
    this.element.classList.add('about');
    this.element.append(new Title('О Бренде').element);
    this.element.insertAdjacentHTML('beforeend', this.getCode());
  }
  getCode() {
    return `
    <div class="container">
    <div class="about-wrapper">
      <div class="about-wrapper__img">
        <img class="about-wrapper__image" src="about.png" alt="about" />
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
export default About;
