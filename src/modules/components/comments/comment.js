import Title from '../title/title';
import Slider from './slider';
import './style.css';

class Comment {
  element = document.createElement('section');
  container = document.createElement('div');
  containerArrows = document.createElement('div');
  swiperButtonPrev = document.createElement('button');
  swiperButtonNext = document.createElement('button');

  arrowPrev = document.createElement('img');
  arrowNext = document.createElement('img');

  constructor() {
    this.arrowPrev.setAttribute('src', 'arrow-left.svg');
    this.arrowNext.setAttribute('src', 'arrow-right.svg');
    this.swiperButtonPrev.append(this.arrowPrev);
    this.swiperButtonNext.append(this.arrowNext);
    this.swiperButtonPrev.classList.add('slider-button-prev', 'slider-button');
    this.swiperButtonNext.classList.add('slider-button-next', 'slider-button');

    this.element.classList.add('comments');
    this.container.classList.add('container', 'container-slider');
    this.container.append(new Slider().swiper);
    this.containerArrows.classList.add('container-arrows');
    this.containerArrows.append(this.container, this.swiperButtonPrev, this.swiperButtonNext);
    this.element.append(new Title('Отзывы').element, this.containerArrows);
  }
}
export default Comment;
