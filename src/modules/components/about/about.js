import Title from '../title/title';
import './style.css';

class About {
  element = document.createElement('section');
  container = document.createElement('div');
  aboutWrapper = document.createElement('div');
  aboutWrapperImg = document.createElement('div');
  aboutWrapperImage = document.createElement('img');
  aboutWrapperText = document.createElement('div');
  aboutWrapperDescriptionTop = document.createElement('p');
  aboutWrapperDescriptionBold = document.createElement('p');
  aboutWrapperDescriptionBottom = document.createElement('p');
  constructor() {
    this.addClassName();
    this.addContent();
    this.appendWrapper();
  }
  addClassName() {
    this.element.setAttribute('id', 'about');
    this.element.classList.add('about', 'none');
    this.container.classList.add('container');
    this.aboutWrapper.classList.add('about-wrapper');
    this.aboutWrapperImg.classList.add('about-wrapper__img');
    this.aboutWrapperImage.classList.add('about-wrapper__image');
    this.aboutWrapperText.classList.add('about-wrapper__text');
    this.aboutWrapperDescriptionTop.classList.add('about-wrapper__description');
    this.aboutWrapperDescriptionBold.classList.add('about-wrapper__description-bold');
    this.aboutWrapperDescriptionBottom.classList.add('about-wrapper__description');
  }
  addContent() {
    this.aboutWrapperImage.setAttribute('src', 'about.jpg');
    this.aboutWrapperImage.setAttribute('alt', 'about');
    this.aboutWrapperDescriptionTop.innerHTML =
      'Меня зовут Аня, мне 25 и я технарь, поэтому дрелью и отверткой владею профессионально. Закончила БНТУ, энергетический факультет, и как это часто бывает:';
    this.aboutWrapperDescriptionBold.innerHTML = '&laquo;...поняла, что диплом это хорошо, а бизнес лучше.&raquo';
    this.aboutWrapperDescriptionBottom.innerHTML = `Поиски «своего дела» были долгими и мучительными, пробовала себя в разных сферах. Потом я влюбилась в идею
            деревянной сумки и создала своего первого «Розового Фламинго», потом подруге сделала сумочку, потом еще
            одну, а потом их оказалось больше 200 и они учувствуют в показах, выставках и ярмарках.`;
  }
  appendWrapper() {
    this.aboutWrapperText.append(
      this.aboutWrapperDescriptionTop,
      this.aboutWrapperDescriptionBold,
      this.aboutWrapperDescriptionBottom
    );
    this.aboutWrapper.append(this.aboutWrapperImg, this.aboutWrapperText);
    this.container.append(this.aboutWrapper);
    this.aboutWrapperImage.onload = () => {
      this.aboutWrapperImg.append(this.aboutWrapperImage);
    };
    this.element.append(new Title('О Бренде').element, this.container);
  }
}
export default About;
