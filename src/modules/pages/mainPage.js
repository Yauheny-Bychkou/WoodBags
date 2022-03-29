import Greeting from '../components/greeting/greeting';
import Header from '../components/header/header';

class MainPage {
  constructor() {
    document.body.innerHTML = '';
    this.header = new Header();
    document.body.append(this.header.element, new Greeting().element);
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
