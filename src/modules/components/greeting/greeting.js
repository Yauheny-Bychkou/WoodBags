import './style.css';

class Greeting {
  element = document.createElement('section');
  constructor() {
    this.element.classList.add('greeting');
    this.element.insertAdjacentHTML('afterbegin', this.getCode());
  }
  getCode() {
    return `
    <img class="greeting-img" src="mainn.jpg" alt="main">
     <div class="greeting-wrapper">
        <h1 class="greeting-wrapper__title">Woodbag.s</h1>
        <h2 class="greeting-wrapper__name">Деревянные шедевры ручной&nbsp;работы</h2>
        <button class="greeting-wrapper__button">Галерея</button>
      </div>
    `;
  }
}
export default Greeting;
