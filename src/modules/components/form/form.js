class Form {
  element = document.createElement('form');
  inputName = document.createElement('input');
  textArea = document.createElement('textarea');
  button = document.createElement('button');
  constructor(type) {
    this.type = type;
    this.addClassName();
    this.addContent();
    this.appendWrappers();
  }
  addClassName() {
    this.element.classList.add(`${this.type}-form`);
    this.inputName.classList.add(`${this.type}-input`);
    this.textArea.classList.add(`${this.type}-area`);
    this.button.classList.add(`${this.type}-button`);
  }
  addContent() {
    this.textArea.setAttribute('placeholder', 'введите ваш вопрос');
    this.inputName.setAttribute('placeholder', 'введите маил');
    this.button.innerHTML = 'Отправить';
  }
  appendWrappers() {
    this.element.append(this.inputName, this.textArea, this.button);
  }
}
export default Form;
