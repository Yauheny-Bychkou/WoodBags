const arrayImg = [
  'comment-1.jpg',
  'comment-2.jpg',
  'comment-3.jpg',
  'comment-1.jpg',
  'comment-2.jpg',
  'comment-3.jpg',
  'comment-1.jpg',
  'comment-2.jpg',
  'comment-3.jpg',
  'comment-1.jpg',
];

class Slider {
  swiper = document.createElement('div');
  swiperWrapper = document.createElement('div');

  constructor() {
    this.swiper.classList.add('swiper');
    this.swiperWrapper.classList.add('swiper-wrapper', 'swiper-cont');
    for (let i = 0; i < arrayImg.length; i++) {
      const swiperSlide = document.createElement('div');
      const wrapper = document.createElement('div');
      const image = document.createElement('img');
      wrapper.classList.add('wrapper-slide');
      image.classList.add('image-slide');
      image.setAttribute('alt', 'comment');
      image.setAttribute('src', arrayImg[i]);
      swiperSlide.classList.add('swiper-slide', 'img-slide');
      wrapper.append(image);
      swiperSlide.append(wrapper);
      this.swiperWrapper.append(swiperSlide);
    }
    this.swiper.append(this.swiperWrapper);
  }
}
export default Slider;
