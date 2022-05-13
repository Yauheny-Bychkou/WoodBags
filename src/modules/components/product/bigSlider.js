import { structureSlider } from './structure';

class BigSlider {
  element = document.createElement('div');
  container = document.createElement('div');
  containerArrows = document.createElement('div');
  swiperButtonPrev = document.createElement('button');
  swiperButtonNext = document.createElement('button');
  arrowPrev = document.createElement('img');
  arrowNext = document.createElement('img');
  sliderSmallImages = document.createElement('div');
  swiperWrapperSmallImages = document.createElement('div');

  constructor() {
    this.addClassName();
    this.appendContent();
  }
  appendContent() {
    this.arrowPrev.setAttribute('src', 'arrow-left.svg');
    this.arrowNext.setAttribute('src', 'arrow-right.svg');
    this.swiperButtonPrev.append(this.arrowPrev);
    this.swiperButtonNext.append(this.arrowNext);
    this.swiperWrapperSmallImages.insertAdjacentHTML(
      'afterbegin',
      `
        <div class="swiper-slide swiper-slide-big">Slide 1</div>
        <div class="swiper-slide swiper-slide-big">Slide 2</div>
        <div class="swiper-slide swiper-slide-big">Slide 3</div>   
    `
    );
    this.sliderSmallImages.append(this.swiperWrapperSmallImages);
    this.container.append(this.sliderSmallImages);
    this.containerArrows.append(this.container, this.swiperButtonPrev, this.swiperButtonNext);
    this.element.append(this.containerArrows);
  }
  addClassName() {
    this.sliderSmallImages.classList.add('swiper-2');
    this.swiperWrapperSmallImages.classList.add('swiper-wrapper');
    this.swiperButtonPrev.classList.add('slider-product-button-prev', 'button-product-slider');
    this.swiperButtonNext.classList.add('slider-product-button-next', 'button-product-slider');
    this.element.classList.add('product-slider');
    this.container.classList.add('container-slider-product');
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
      wrapper.append(image);
      swiperSlide.append(wrapper);
      this.swiperWrapperSmallImages.append(swiperSlide);
    }
  }
}

export default BigSlider;
