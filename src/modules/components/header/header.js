import NavMenu from './navMenu';
import './style.css';

class Header {
  element = document.createElement('header');
  constructor() {
    this.element.classList.add('header');
    this.navMenu = new NavMenu();
    this.element.append(this.navMenu.container);
  }
}
export default Header;
