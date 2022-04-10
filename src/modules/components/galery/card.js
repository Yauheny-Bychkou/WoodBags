class Card {
  element = document.createElement('div');
  wrapperImg = document.createElement('div');
  img = document.createElement('img');
  overlay = document.createElement('div');
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
    this.overlay.classList.add('galery-overlay');
    this.wrapperImg.append(this.img, this.wrapperAbsolute, this.overlay);
    this.element.append(this.wrapperImg);
  }
}
export default Card;
