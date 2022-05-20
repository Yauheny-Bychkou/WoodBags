class Form {
  element = document.createElement('form');
  wrapperInputs = document.createElement('div');
  inputName = document.createElement('input');
  inputPhone = document.createElement('input');
  textArea = document.createElement('textarea');
  button = document.createElement('button');
  constructor(type) {
    this.type = type;
    this.addClassName();
    this.addContent();
    this.appendWrappers();
  }
  addClassName() {
    this.wrapperInputs.classList.add(`${this.type}-inputs`);
    this.element.classList.add(`${this.type}-form`);
    this.inputPhone.classList.add(`${this.type}-input`);
    this.inputName.classList.add(`${this.type}-input`);
    this.textArea.classList.add(`${this.type}-area`);
    this.button.classList.add(`${this.type}-button`);
  }
  addContent() {
    this.inputName.setAttribute('name', 'name');
    this.inputPhone.setAttribute('name', 'phone');
    this.textArea.setAttribute('name', 'message');
    this.button.setAttribute('type', 'submit');
    this.textArea.setAttribute('placeholder', 'Введите ваш вопрос');
    this.inputName.setAttribute('placeholder', 'Введите имя');
    this.inputPhone.setAttribute('placeholder', 'Введите телефон');
    this.button.innerHTML = 'Отправить';
  }
  appendWrappers() {
    this.wrapperInputs.append(this.inputName, this.inputPhone);
    this.element.append(this.wrapperInputs, this.textArea, this.button);
  }
}
export default Form;
