import { structureSlider } from './structure';

class BigSlider {
  element = document.createElement('div');
  container = document.createElement('div');
  containerArrows = document.createElement('div');
  swiperButtonPrev = document.createElement('button');
  swiperButtonNext = document.createElement('button');
  arrowPrev = document.createElement('img');
  arrowNext = document.createElement('img');
  arrowPrevSmall = document.createElement('img');
  arrowNextSmall = document.createElement('img');
  sliderSmallImages = document.createElement('div');
  swiperWrapperSmallImages = document.createElement('div');

  constructor(arrayImages) {
    this.addClassName();
    this.appendContent();
    this.changeSlides(arrayImages);
  }
  appendContent() {
    this.arrowPrev.setAttribute('src', 'arrow-left.svg');
    this.arrowNext.setAttribute('src', 'arrow-right.svg');
    this.arrowPrevSmall.setAttribute('src', 'arrow-left-small.svg');
    this.arrowNextSmall.setAttribute('src', 'arrow-right-small.svg');
    this.swiperButtonPrev.append(this.arrowPrev, this.arrowPrevSmall);
    this.swiperButtonNext.append(this.arrowNext, this.arrowNextSmall);
    this.sliderSmallImages.append(this.swiperWrapperSmallImages);
    this.container.append(this.sliderSmallImages);
    this.containerArrows.append(this.container, this.swiperButtonPrev, this.swiperButtonNext);
    this.element.append(this.containerArrows);
  }
  addClassName() {
    this.arrowPrev.classList.add('arrow-big-screen');
    this.arrowNext.classList.add('arrow-big-screen');
    this.arrowPrevSmall.classList.add('arrow-small-screen');
    this.arrowNextSmall.classList.add('arrow-small-screen');
    this.sliderSmallImages.classList.add('swiper-2');
    this.swiperWrapperSmallImages.classList.add('swiper-wrapper');
    this.swiperButtonPrev.classList.add('slider-product-button-prev', 'button-product-slider-big');
    this.swiperButtonNext.classList.add('slider-product-button-next', 'button-product-slider-big');
    this.element.classList.add('product-slider');
    this.container.classList.add('container-slider-product', 'container-slider-product-big');
    this.containerArrows.classList.add('container-product-arrows');
  }
  changeSlides(arrayImages) {
    this.swiperWrapperSmallImages.innerHTML = '';
    for (let i = 0; i < arrayImages.length; i++) {
      const swiperSlide = document.createElement('div');
      const wrapper = document.createElement('div');
      const image = document.createElement('img');
      swiperSlide.classList.add('swiper-slide', 'swiper-slide-big');
      wrapper.classList.add('swiper-wripper-big-prod', 'img-slide-big-prod');
      image.classList.add('image-slide-big-prod');
      image.setAttribute('alt', 'image');
      image.setAttribute('src', arrayImages[i]);
      image.onload = () => {
        wrapper.append(image);
      };
      swiperSlide.append(wrapper);
      this.swiperWrapperSmallImages.append(swiperSlide);
    }
  }
}

export default BigSlider;
