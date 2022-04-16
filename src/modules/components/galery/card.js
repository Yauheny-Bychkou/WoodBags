class Card {
  element = document.createElement('div');
  wrapperImg = document.createElement('div');
  img = document.createElement('img');
  overlayDark = document.createElement('div');
  overlayForClick = document.createElement('div');
  wrapperAbsolute = document.createElement('div');
  title = document.createElement('h4');
  constructor(text, className, img) {
    this.element.classList.add('galery-box');
    this.title.classList.add('galery-title');
    this.wrapperImg.classList.add('galery-container');
    this.img.classList.add('galery-img');
    this.img.setAttribute('src', img);
    this.img.setAttribute('alt', 'image');
    this.img.setAttribute('loading', 'lazy');
    this.title.innerHTML = text;
    this.wrapperAbsolute.append(this.title);
    this.wrapperAbsolute.classList.add('galery-absolute');
    this.overlayDark.classList.add('galery-overlay-dark');
    this.overlayForClick.classList.add('galery-overlay-forClick');
    this.img.onload = () => {
      this.wrapperImg.prepend(this.img);
    };
    this.wrapperImg.append(this.wrapperAbsolute, this.overlayDark, this.overlayForClick);
    this.element.append(this.wrapperImg);
  }
}
export default Card;
