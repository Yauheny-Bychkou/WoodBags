import NavMenu from './navMenu';
import './style.css';

class Header {
  element = document.createElement('header');
  constructor(type) {
    this.element.classList.add('header');
    this.navMenu = new NavMenu(type);
    this.element.append(this.navMenu.container);
  }
}
export default Header;
