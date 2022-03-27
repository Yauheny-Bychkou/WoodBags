import './style.css';

class Greeting {
  element = document.createElement('section');
  constructor() {
    this.element.classList.add('greeting');
    this.element.insertAdjacentHTML('afterbegin', this.getCode());
  }
  getCode() {
    return `
    <img class="greeting-img" src="main.png" alt="main">
    <div class="container">
      <div class="greeting-wrapper">
      </div>
    `;
  }
}
export default Greeting;
