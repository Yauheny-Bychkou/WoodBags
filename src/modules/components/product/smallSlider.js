import './style.css';

class SmallSlider {
  element = document.createElement('div');
  container = document.createElement('div');
  containerArrows = document.createElement('div');
  swiperButtonPrev = document.createElement('button');
  swiperButtonNext = document.createElement('button');
  arrowPrev = document.createElement('img');
  arrowNext = document.createElement('img');
  sliderSmallImages = document.createElement('div');
  swiperWrapperSmallImages = document.createElement('div');

  constructor(arrayImages) {
    this.addClassName();
    this.appendContent();
    this.changeSlides(arrayImages);
  }
  appendContent() {
    this.arrowPrev.setAttribute('src', './main/slider/arrow-left-small.svg');
    this.arrowNext.setAttribute('src', './main/slider/arrow-right-small.svg');
    this.swiperButtonPrev.append(this.arrowPrev);
    this.swiperButtonNext.append(this.arrowNext);
    this.sliderSmallImages.append(this.swiperWrapperSmallImages);
    this.container.append(this.sliderSmallImages);
    this.containerArrows.append(this.container, this.swiperButtonPrev, this.swiperButtonNext);
    this.element.append(this.containerArrows);
  }
  addClassName() {
    this.sliderSmallImages.classList.add('swiper-1');
    this.swiperWrapperSmallImages.classList.add('swiper-wrapper');
    this.swiperButtonPrev.classList.add('slider-product-button-prev', 'button-product-slider');
    this.swiperButtonNext.classList.add('slider-product-button-next', 'button-product-slider');
    this.element.classList.add('product-slider');
    this.container.classList.add('container-slider-product-small');
    this.containerArrows.classList.add('container-product-arrows');
  }
  changeSlides(arrayImages) {
    this.swiperWrapperSmallImages.innerHTML = '';
    for (let i = 0; i < arrayImages.length; i++) {
      const swiperSlide = document.createElement('div');
      const wrapper = document.createElement('div');
      const image = document.createElement('img');
      swiperSlide.classList.add('swiper-slide', 'swiper-slide-small');
      wrapper.classList.add('swiper-wripper-small-prod', 'img-slide-small-prod');
      image.classList.add('image-slide-small-prod');
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
export default SmallSlider;
