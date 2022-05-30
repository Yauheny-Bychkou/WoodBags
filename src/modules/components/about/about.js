import Title from '../title/title';
import { structureAbout } from './structure';
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
    this.aboutWrapperImage.setAttribute('src', structureAbout.img);
    this.aboutWrapperImage.setAttribute('alt', 'about');
    this.aboutWrapperDescriptionTop.innerHTML = structureAbout.textTop;
    this.aboutWrapperDescriptionBold.innerHTML = structureAbout.textBold;
    this.aboutWrapperDescriptionBottom.innerHTML = structureAbout.textBottom;
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
    this.element.append(new Title(structureAbout.title).element, this.container);
  }
}
export default About;
