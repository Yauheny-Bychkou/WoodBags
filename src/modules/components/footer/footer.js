import './style.css';

class Footer {
  element = document.createElement('footer');
  constructor() {
    this.element.classList.add('footer', 'none');
    this.element.insertAdjacentHTML('beforeend', this.getFooterWrapper());
  }
  getFooterWrapper() {
    return `
      <div class="footer-wrapper">
        <p class="footer-text">Ремесленник: <a class="footer-link" href="#">Павлюкова Анна Евгеньевна</a></p>
         <a class="footer-link" href="mailto:woodbag.s@gmail.com">woodbag.s@gmail.com</a>
      </div>
    `;
  }
}
export default Footer;
