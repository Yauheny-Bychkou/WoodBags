class Input {
  element = document.createElement('input');
  constructor({ className, type, placeholder }) {
    this.element.classList.add(className);
    this.element.setAttribute('type', type);
    this.element.setAttribute('placeholder', placeholder);
  }

  addEventListenerForInput(func) {
    this.element.addEventListener('change', func);
  }
}

export default Input;
