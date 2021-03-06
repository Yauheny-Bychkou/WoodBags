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
    this.element.setAttribute('id', 'reviews');
    this.title = new Title('Отзывы');
    this.title.title.classList.add('title-comment');
    this.arrowPrev.setAttribute('src', './main/slider/arrow-left.svg');
    this.arrowNext.setAttribute('src', './main/slider/arrow-right.svg');
    this.swiperButtonPrev.append(this.arrowPrev);
    this.swiperButtonNext.append(this.arrowNext);
    this.swiperButtonPrev.classList.add('slider-button-prev', 'slider-button', 'slider-button-comment');
    this.swiperButtonNext.classList.add('slider-button-next', 'slider-button', 'slider-button-comment');
    this.element.classList.add('comments', 'none');
    this.container.classList.add('container', 'container-slider');
    this.containerArrows.classList.add('container-arrows');
    this.container.append(new Slider().swiper);
    this.containerArrows.append(this.container, this.swiperButtonPrev, this.swiperButtonNext);
    this.element.append(this.title.element, this.containerArrows);
  }
}
export default Comment;
