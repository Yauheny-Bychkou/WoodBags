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
import Product from '../components/product/product';
import ModalProduct from '../components/modalProduct/modalProduct';
import ModalForm from '../components/modalForm/modalForm';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

class MainPage {
  wrapper = document.createElement('div');
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
  product = new Product();
  modalProduct = new ModalProduct();
  modalForm = new ModalForm();

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
    this.addActiveClassToHeaderLink();
    this.addEventListenerToModalMainButton();
    this.addEventListenerToWrapperModalContent();
    this.addEventListenerToCloseProduct();
    this.addEventListenerToButtonProductOrder();
    this.addEventListenerToCloseProductOrder();
    this.addEventListenerToFormMainPage();
    this.addEventListenerToCloseModalForm();
    this.addEventListenerToFormProductPage();
  }
  addEventListenerToCloseModalForm() {
    this.modalForm.buttonClose.addEventListener('click', () => {
      this.modalForm.overlay.classList.remove('modal-form-overlay--visible');
      this.modalForm.content.classList.remove('modal-form-content--visible');
      document.body.classList.remove('overflow-hidden');
      this.header.element.classList.remove('header-modal-active');
    });
  }
  addEventListenerToFormProductPage() {
    this.modalProduct.form.element.addEventListener('submit', (e) => {
      e.preventDefault();
      let formData = new FormData(this.modalProduct.form.element);
      let xhr = new XMLHttpRequest();
      this.checkInputName(this.modalProduct.form.inputName, this.modalProduct.form.errorInputName);
      this.checkInputPhone(this.modalProduct.form.inputPhone, this.modalProduct.form.errorInputPhone);
      this.checkTextArea(this.modalProduct.form.textArea, this.modalProduct.form.errorArea);
      if (
        this.checkInputName(this.modalProduct.form.inputName, this.modalProduct.form.errorInputName) === true &&
        this.checkInputPhone(this.modalProduct.form.inputPhone, this.modalProduct.form.errorInputPhone) === true &&
        this.checkTextArea(this.modalProduct.form.textArea, this.modalProduct.form.errorArea)
      ) {
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              document.body.classList.add('overflow-hidden');
              this.header.element.classList.add('header-modal-active');
              this.modalForm.overlay.classList.add('modal-form-overlay--visible');
              this.modalForm.content.classList.add('modal-form-content--visible');
              this.modalForm.addTextMessage('success');
              this.modalProduct.form.inputName.value = '';
              this.modalProduct.form.inputPhone.value = '';
              this.contacts.form.textArea.value = 'Здравствуйте! Хочу заказать сумку...';
            } else {
              document.body.classList.add('overflow-hidden');
              this.header.element.classList.add('header-modal-active');
              this.modalForm.overlay.classList.add('modal-form-overlay--visible');
              this.modalForm.content.classList.add('modal-form-content--visible');
              this.modalForm.addTextMessage('error');
            }
          }
        };
        xhr.open('POST', './send.php', true);
        xhr.send(formData);
      }
    });
  }
  addEventListenerToFormMainPage() {
    this.contacts.form.element.addEventListener('submit', (e) => {
      e.preventDefault();
      let formData = new FormData(this.contacts.form.element);
      let xhr = new XMLHttpRequest();
      this.checkInputName(this.contacts.form.inputName, this.contacts.form.errorInputName);
      this.checkInputPhone(this.contacts.form.inputPhone, this.contacts.form.errorInputPhone);
      this.checkTextArea(this.contacts.form.textArea, this.contacts.form.errorArea);
      if (
        this.checkInputName(this.contacts.form.inputName, this.contacts.form.errorInputName) === true &&
        this.checkInputPhone(this.contacts.form.inputPhone, this.contacts.form.errorInputPhone) === true &&
        this.checkTextArea(this.contacts.form.textArea, this.contacts.form.errorArea)
      ) {
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              document.body.classList.add('overflow-hidden');
              this.header.element.classList.add('header-modal-active');
              this.modalForm.overlay.classList.add('modal-form-overlay--visible');
              this.modalForm.content.classList.add('modal-form-content--visible');
              this.modalForm.addTextMessage('success');
              this.contacts.form.inputName.value = '';
              this.contacts.form.inputPhone.value = '';
              this.contacts.form.textArea.value = 'Здравствуйте! Хочу заказать сумку...';
            } else {
              document.body.classList.add('overflow-hidden');
              this.header.element.classList.add('header-modal-active');
              this.modalForm.overlay.classList.add('modal-form-overlay--visible');
              this.modalForm.content.classList.add('modal-form-content--visible');
              this.modalForm.addTextMessage('error');
            }
          }
        };
        xhr.open('POST', './send.php', true);
        xhr.send(formData);
      }
    });
  }
  checkInputName(input, error) {
    if (input.value.length < 3 || input.value.match(/[\d/@-_.~!*'"№#$%^:+]/g)) {
      input.classList.add('contacts-input-error');
      error.classList.remove('none');
      return false;
    } else {
      input.classList.remove('contacts-input-error');
      error.classList.add('none');
      return true;
    }
  }
  checkInputPhone(input, error) {
    if (input.value.length < 8 || input.value.match(/[^0-9 + ()-]/gi)) {
      input.classList.add('contacts-input-error');
      error.classList.remove('none');
      return false;
    } else {
      input.classList.remove('contacts-input-error');
      error.classList.add('none');
      return true;
    }
  }
  checkTextArea(area, error) {
    if (area.value.length < 8) {
      area.classList.add('contacts-area-error');
      error.classList.remove('none');
      return false;
    } else {
      area.classList.remove('contacts-area-error');
      error.classList.add('none');
      return true;
    }
  }
  addEventListenerToCloseProductOrder() {
    this.modalProduct.buttonClose.addEventListener('click', (e) => {
      this.modalProduct.overlay.classList.remove('modal-product-overlay--visible');
      this.modalProduct.modalDialog.classList.remove('modal-product-dialog--visible');
    });
  }
  addEventListenerToButtonProductOrder() {
    this.product.aboutProduct.button.addEventListener('click', (e) => {
      this.modalProduct.overlay.classList.add('modal-product-overlay--visible');
      this.modalProduct.modalDialog.classList.add('modal-product-dialog--visible');
    });
  }
  addEventListenerToWrapperModalContent() {
    this.modal.wrapperCards.addEventListener('click', (e) => {
      if (e.target.classList.contains('product-button')) {
        Promise.resolve()
          .then(() => this.product.showProduct(e.target.dataset.type, e.target.id))
          .then(() => this.initSliderProduct())
          .then(() => this.product.element.classList.add('product-active'));
      }
    });
  }
  addEventListenerToCloseProduct() {
    this.product.buttonClose.addEventListener('click', () => {
      this.product.element.classList.remove('product-active');
    });
  }
  addActiveClassToHeaderLink() {
    const sections = document.querySelectorAll('section');
    const nav = document.querySelector('.header-wrapper__nav');
    const nav_height = nav.offsetHeight;

    document.addEventListener('scroll', (e) => {
      const cur_pos = document.documentElement.scrollTop;

      sections.forEach((item) => {
        const top = item.offsetTop - nav_height;
        const bottom = top + item.offsetHeight;
        if (cur_pos >= top && cur_pos <= bottom) {
          document.querySelectorAll('.header-wrapper__link').forEach((item) => {
            item.parentNode.children[1].classList.remove('header-item-line--active');
          });
          document.querySelectorAll('.menu-wrapper__link').forEach((elem) => {
            if (elem.dataset.id === item.id) {
              elem.parentElement.children[1].classList.add('menu-item-line--active');
            } else elem.parentElement.children[1].classList.remove('menu-item-line--active');
          });
          if (document.querySelector(`a[href|="#${item.id}"]`) !== null && item.id !== '') {
            document
              .querySelector(`a[href|="#${item.id}"]`)
              .parentNode.children[1].classList.add('header-item-line--active');
          }
        }
      });
    });
  }
  addEventListenerToModalBurger() {
    this.modal.wrapperBurger.addEventListener('click', (e) => {
      if (e.target.classList.contains('menu-btn-modal') || e.target.classList.contains('menu-span-modal')) {
        e.preventDefault();
        this.modal.wrapperBurger.children[1].children[0].classList.toggle('menu-btn__active');
        this.modal.modalHeader.classList.toggle('modal-header-active');
      }
    });
  }
  addEventListenerToModalMainButton() {
    this.modal.buttonMain.addEventListener('click', () => {
      this.closeModal();
    });
  }
  addEventListenerToModalHeader() {
    this.modal.modalNav.addEventListener('click', (e) => {
      e.preventDefault();
      if (e.target.href && e.target.dataset.id !== 'main') {
        document.querySelectorAll('.modal-item-line').forEach((elem) => {
          if (elem === e.target.parentElement.children[1]) {
            elem.classList.add('modal-item-line--active');
          } else elem.classList.remove('modal-item-line--active');
        });
        this.modal.addWrapperProducts(e.target.dataset.id);
        this.modal.modalHeader.classList.remove('modal-header-active');
        this.modal.wrapperBurger.children[1].children[0].classList.remove('menu-btn__active');
      }
      if (e.target.href && e.target.dataset.id === 'main') {
        this.closeModal();
      }
    });
  }
  closeModal() {
    this.header.element.classList.remove('header-overflow');
    this.wrapper.classList.remove('wrapper-hidden');
    Promise.resolve()
      .then(() => document.body.classList.remove('overflow-hidden'))
      .then(() => {
        this.modal.element.classList.remove('modal-active');
        this.modal.content.classList.remove('modal-content-active');
        this.modal.modalHeader.classList.remove('modal-header-active');
        this.modal.wrapperBurger.children[1].children[0].classList.remove('menu-btn__active');
      });
  }
  addEventListenerToGaleryWrapper() {
    this.galery.element.addEventListener('click', (e) => {
      if (e.target.classList.contains('galery-overlay-forClick')) {
        this.modal.element.classList.add('modal-active');
        this.modal.content.classList.add('modal-content-active');
        this.wrapper.classList.add('wrapper-hidden');
        document.body.classList.add('overflow-hidden');
        this.modal.addWrapperProducts(e.target.id);
        this.header.element.classList.add('header-overflow');
        document.querySelectorAll('.modal-item-line').forEach((elem) => {
          if (elem === document.querySelector(`a[href='#${e.target.id}']`).parentNode.children[1]) {
            elem.classList.add('modal-item-line--active');
          } else elem.classList.remove('modal-item-line--active');
        });
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
    this.wrapper.append(
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
      this.footer.element
    );
    document.body.append(
      this.wrapper,
      this.menu.element,
      this.modal.element,
      this.product.element,
      this.modalProduct.element,
      this.modalForm.element
    );
  }
  showElementsAfterOnLoad() {
    window.onload = () => {
      this.header.element.classList.remove('none');
      this.greeting.element.classList.remove('none');
      setTimeout(() => {
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
    this.why.link.addEventListener('click', (e) => {
      this.scrollToAnchor(e);
    });
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
      if (e.target.classList.contains('menu-wrapper__link')) {
        this.wrapper.classList.remove('wrapper-hidden');
        Promise.resolve()
          .then(() => document.body.classList.remove('overflow-hidden'))
          .then(() => {
            this.menu.element.classList.remove('menu-visible');
            this.header.navMenu.burgerMenu.element.children[0].classList.remove('menu-btn__active');
            if (e.target.classList.contains('menu-wrapper__link')) {
              this.scrollToAnchor(e);
            }
          });
      }
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
      loop: false,
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
  initSliderProduct() {
    const swiper_1 = new Swiper('.swiper-1', {
      modules: [Navigation, Pagination],
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
      },
      loop: false,
      navigation: {
        nextEl: '.slider-product-button-next-big',
        prevEl: '.slider-product-button-prev-big',
        disabledClass: 'button-disabled-big',
      },
    });
    const swiper_2 = new Swiper('.swiper-2', {
      modules: [Navigation, Pagination],
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 100,
        },
      },
      loop: false,
      navigation: {
        nextEl: '.slider-product-button-next',
        prevEl: '.slider-product-button-prev',
        disabledClass: 'button-disabled',
      },
    });
    const swipeAllSliders = (index) => {
      swiper_1.slideTo(index);
      swiper_2.slideTo(index);
    };
    const funcSwiper_1 = () => swipeAllSliders(swiper_1.activeIndex);
    const funcSwiper_2 = () => swipeAllSliders(swiper_2.activeIndex);
    swiper_1.on('slideChange', funcSwiper_1);
    swiper_2.on('slideChange', funcSwiper_2);
  }
  addEventListenerToBurgerButton() {
    this.header.navMenu.burgerMenu.element.addEventListener('click', (e) => {
      e.preventDefault();
      this.menu.element.classList.toggle('menu-visible');
      if (e.target.classList.contains('menu-btn') || e.target.classList.contains('menu-span')) {
        if (!this.header.navMenu.burgerMenu.element.children[0].classList.contains('menu-btn__active')) {
          document.body.classList.add('overflow-hidden');
        } else document.body.classList.remove('overflow-hidden');
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
