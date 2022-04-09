import About from '../components/about/about';
import Greeting from '../components/greeting/greeting';
import Header from '../components/header/header';
import Galery from '../components/galery/galery';
import SectionText from '../components/sectionText/sectionText';
import Order from '../components/order/order';
import Comment from '../components/comments/comment';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

class MainPage {
  constructor() {
    document.body.innerHTML = '';
    this.header = new Header('header');
    this.greeting = new Greeting('greeting');
    this.about = new About();
    this.galery = new Galery();
    this.why = new SectionText('why');
    this.advice = new SectionText('advice');
    this.order = new Order('order');
    this.comment = new Comment();
    document.body.append(
      this.header.element,
      this.greeting.element,
      this.about.element,
      this.galery.element,
      this.why.element,
      this.advice.element,
      this.order.element,
      this.comment.element
    );
    this.initSlider();
    this.addEventListenerToBurgerButton();
  }
  initSlider() {
    const swiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination],
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      navigation: {
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev',
      },
      slidesPerView: 1,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 100,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        770: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  }
  addEventListenerToBurgerButton() {
    this.header.navMenu.burgerMenu.element.addEventListener('click', (e) => {
      if (e.target.classList.contains('menu-btn') || e.target.classList.contains('menu-span')) {
        this.header.navMenu.burgerMenu.element.children[0].classList.toggle('menu-btn__active');
      }
    });
  }
}
export default MainPage;
