import './style.css';

class Greeting {
  element = document.createElement('section');
  constructor() {
    this.element.classList.add('greeting');
    this.element.insertAdjacentHTML('afterbegin', this.getCode());
  }
  getCode() {
    return `
    <img class="greeting-img" src="main.jpg" alt="main">
     <div class="greeting-wrapper">
        <h1 class="greeting-wrapper__title">Woodbag.s</h1>
        <h2 class="greeting-wrapper__name">Деревянные шедевры ручной&nbsp;работы</h2>
        <a href="#" class="greeting-wrapper__button">Каталог</a>
      </div>
    `;
  }
}
export default Greeting;
