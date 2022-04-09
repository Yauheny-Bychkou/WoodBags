class Slider {
  swiper = document.createElement('div');
  swiperWrapper = document.createElement('div');

  constructor() {
    this.swiper.classList.add('swiper');
    this.swiperWrapper.classList.add('swiper-wrapper');
    for (let i = 0; i < 10; i++) {
      const swiperSlide = document.createElement('div');
      const image = document.createElement('img');
      image.classList.add('image-slide');
      image.setAttribute('alt', 'comment');
      image.setAttribute('src', `comment-2.jpg`);
      swiperSlide.classList.add('swiper-slide', 'img-slide');
      swiperSlide.append(image);
      this.swiperWrapper.append(swiperSlide);
    }
    this.swiper.append(this.swiperWrapper);
  }
}
export default Slider;
