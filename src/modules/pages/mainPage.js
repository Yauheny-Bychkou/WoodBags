import About from '../components/about/about';
import Greeting from '../components/greeting/greeting';
import Header from '../components/header/header';
import Galery from '../components/galery/galery';
import Why from '../components/why/why';

class MainPage {
  constructor() {
    document.body.innerHTML = '';
    this.header = new Header();
    this.greeting = new Greeting();
    this.about = new About();
    this.galery = new Galery();
    this.why = new Why();
    document.body.append(
      this.header.element,
      this.greeting.element,
      this.about.element,
      this.galery.element,
      this.why.element
    );
    this.addEventListenerToBurgerButton();
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
