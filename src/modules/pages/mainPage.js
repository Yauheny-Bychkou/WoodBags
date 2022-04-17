import About from '../components/about/about';
import Greeting from '../components/greeting/greeting';
import Header from '../components/header/header';
import Galery from '../components/galery/galery';
import List from '../components/List/List';
import Order from '../components/order/order';
import Comment from '../components/comments/comment';
import Footer from '../components/footer/footer';
import Menu from '../components/Menu/Menu';
import Contact from '../components/contacts/contacts';
import Delivery from '../components/delivery/delivery';
import Collage from '../components/collage/collage';
import Modal from '../components/modal/modal';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

class MainPage {
  menu = new Menu();
  header = new Header();
  greeting = new Greeting();
  about = new About();
  galery = new Galery();
  why = new List('why');
  advice = new List('care');
  order = new Order();
  comment = new Comment();
  footer = new Footer();
  contacts = new Contact();
  delivery = new Delivery();
  collage = new Collage();
  modal = new Modal();
  constructor() {
    this.appendElements();
    this.showElementsAfterOnLoad();
    this.initSlider();
    this.addEventListenerToCalalogButton();
    this.addEventListenerToBurgerButton();
    this.addEventListenerToAnchorHeader();
    this.addEventListenerToAnchorMenu();
    this.addEventListenerToLinkForm();
    this.addEventListenerToGaleryWrapper();
    this.setPropertyForOverflow();
    this.addEventListenerToModalHeader();
    this.addEventListenerToModalBurger();
  }
  addEventListenerToModalBurger() {
    this.modal.wrapperBurger.addEventListener('click', (e) => {
      if (e.target.classList.contains('menu-btn-modal') || e.target.classList.contains('menu-span-modal')) {
        this.modal.wrapperBurger.children[0].children[0].classList.toggle('menu-btn__active');
        this.modal.modalHeader.classList.toggle('modal-header-active');
      }
    });
  }
  addEventListenerToModalHeader() {
    this.modal.modalNav.addEventListener('click', (e) => {
      e.preventDefault();
      if (e.target.href && e.target.dataset.id !== 'main') {
        this.modal.addWrapperProducts(e.target.dataset.id);
      } else if (e.target.href && e.target.dataset.id === 'main') {
        Promise.resolve()
          .then(() => document.body.classList.remove('overflow-hidden'))
          .then(() => {
            this.modal.element.classList.remove('modal-active');
            this.modal.content.classList.remove('modal-content-active');
          });
      }
    });
  }
  addEventListenerToGaleryWrapper() {
    this.galery.element.addEventListener('click', (e) => {
      if (e.target.classList.contains('galery-overlay-forClick')) {
        this.modal.element.classList.add('modal-active');
        this.modal.content.classList.add('modal-content-active');
        document.body.classList.add('overflow-hidden');
        this.modal.addWrapperProducts(e.target.id);
      }
    });
  }
  addEventListenerToDocumentForRemoveModalActive() {
    document.addEventListener('click', () => {
      if (this.modal.element.classList.contains('modal-active')) {
        this.modal.element.classList.remove('modal-active');
        this.modal.content.classList.remove('modal-content-active');
      }
    });
  }
  appendElements() {
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
      this.menu.element,
      this.modal.element
    );
  }
  showElementsAfterOnLoad() {
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
      }, 50);
    };
  }
  addEventListenerToLinkForm() {
    this.why.link.addEventListener('click', (e) => this.scrollToAnchor(e));
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
  setPropertyForOverflow() {
    document.documentElement.style.setProperty(
      '--scrollbar-width',
      window.innerWidth - document.documentElement.clientWidth + 'px'
    );
  }
}
export default MainPage;
