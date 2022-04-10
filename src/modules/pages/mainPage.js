import About from '../components/about/about';
import Greeting from '../components/greeting/greeting';
import Header from '../components/header/header';
import Galery from '../components/galery/galery';
import SectionText from '../components/sectionText/sectionText';
import Order from '../components/order/order';
import Comment from '../components/comments/comment';
import Footer from '../components/footer/footer';
import Menu from '../components/Menu/Menu';
import Contact from '../components/contacts/contacts';
import Delivery from '../components/delivery/delivery';
import Collage from '../components/collage/collage';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

class MainPage {
  constructor() {
    document.body.innerHTML = '';
    this.menu = new Menu();
    this.header = new Header('header');
    this.greeting = new Greeting('greeting');
    this.about = new About();
    this.galery = new Galery();
    this.why = new SectionText('why');
    this.advice = new SectionText('care');
    this.order = new Order('order');
    this.comment = new Comment('comments');
    this.footer = new Footer();
    this.contacts = new Contact();
    this.delivery = new Delivery();
    this.collage = new Collage();
    document.body.append(
      this.header.element,
      this.greeting.element,
      this.about.element,
      this.galery.element,
      this.why.element,
      this.collage.element,
      this.advice.element,
      this.order.element,
      this.comment.element,
      this.delivery.element,
      this.contacts.element,
      this.footer.element,
      this.menu.element
    );
    window.onload = () => {
      setTimeout(() => {
        this.header.element.classList.remove('none');
        this.greeting.element.classList.remove('none');
        this.about.element.classList.remove('none');
        this.galery.element.classList.remove('none');
        this.why.element.classList.remove('none');
        this.collage.element.classList.remove('none');
        this.advice.element.classList.remove('none');
        this.order.element.classList.remove('none');
        this.comment.element.classList.remove('none');
        this.delivery.element.classList.remove('none');
        this.contacts.element.classList.remove('none');
        this.footer.element.classList.remove('none');
        this.menu.element.classList.remove('none');
      }, 200);
    };
    this.initSlider();
    this.addEventListenerToCalalogButton();
    this.addEventListenerToBurgerButton();
    this.addEventListenerToAnchorHeader();
    this.addEventListenerToAnchorMenu();
  }
  addEventListenerToCalalogButton() {
    this.greeting.element.addEventListener('click', (e) => {
      if (e.target.classList.contains('greeting-wrapper__button')) {
        this.scrollToAnchor(e);
      }
    });
  }

  addEventListenerToAnchorMenu() {
    this.menu.nav.addEventListener('click', (e) => {
      Promise.resolve()
        .then(() => document.body.classList.remove('overflow-hidden'))
        .then(() => {
          this.menu.element.classList.remove('menu-visible');
          this.header.navMenu.burgerMenu.element.children[0].classList.remove('menu-btn__active');
          if (e.target.classList.contains('menu-wrapper__link')) {
            this.scrollToAnchor(e);
          }
        });
    });
  }
  addEventListenerToAnchorHeader() {
    this.header.navMenu.headerWrapperNav.addEventListener('click', (e) => {
      if (e.target.classList.contains('header-wrapper__link')) {
        this.scrollToAnchor(e);
      }
    });
  }
  initSlider() {
    const swiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination],
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
      e.preventDefault();
      document.body.classList.add('overflow-hidden');
      this.menu.element.classList.toggle('menu-visible');
      if (e.target.classList.contains('menu-btn') || e.target.classList.contains('menu-span')) {
        this.header.navMenu.burgerMenu.element.children[0].classList.toggle('menu-btn__active');
      }
    });
  }
  scrollToAnchor(e) {
    e.preventDefault();
    const blockID = e.target.getAttribute('href').substr(1);
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
export default MainPage;
