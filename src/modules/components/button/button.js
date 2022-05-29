class Button {
  element = document.createElement('button');
  constructor({ className, text }) {
    this.element.classList.add(className);
    this.element.innerHTML = text;
  }
  addEventListenerForButton(func) {
    this.element.addEventListener('click', func);
  }
}

export default Button;
