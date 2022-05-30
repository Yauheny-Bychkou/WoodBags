class Form {
  element = document.createElement('form');
  wrapperInputs = document.createElement('div');
  inputName = document.createElement('input');
  inputPhone = document.createElement('input');
  textArea = document.createElement('textarea');
  wrapperInputName = document.createElement('div');
  wrapperInputPhone = document.createElement('div');
  wrapperTextArea = document.createElement('div');
  errorInputName = document.createElement('h5');
  errorInputPhone = document.createElement('h5');
  errorArea = document.createElement('h5');
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
    this.wrapperInputName.classList.add(`${this.type}-wrapper-input`);
    this.wrapperInputPhone.classList.add(`${this.type}-wrapper-input`);
    this.errorInputName.classList.add(`${this.type}-wrapper-error`, 'none');
    this.errorInputPhone.classList.add(`${this.type}-wrapper-error`, 'none');
    this.wrapperTextArea.classList.add(`${this.type}-wrapper-area`);
    this.errorArea.classList.add(`${this.type}-wrapper-error`, 'none');
  }
  addContent() {
    this.errorInputName.innerHTML = 'Неверный формат (не менее 3 букв)';
    this.errorInputPhone.innerHTML = 'Неверный формат (не менее 7 цифр)';
    this.errorArea.innerHTML = 'Это поле обязательно к заполнению';
    this.inputName.setAttribute('name', 'name');
    this.inputPhone.setAttribute('name', 'phone');
    this.textArea.setAttribute('name', 'message');
    this.button.setAttribute('type', 'submit');
    this.textArea.setAttribute('placeholder', 'Введите ваш вопрос');
    this.inputName.setAttribute('placeholder', 'Введите имя');
    this.inputPhone.setAttribute('placeholder', 'Введите телефон');
    this.textArea.value = 'Здравствуйте! Хочу заказать сумку...';
    this.button.innerHTML = 'Отправить';
  }
  appendWrappers() {
    this.wrapperInputName.append(this.inputName, this.errorInputName);
    this.wrapperInputPhone.append(this.inputPhone, this.errorInputPhone);
    this.wrapperTextArea.append(this.textArea, this.errorArea);
    this.wrapperInputs.append(this.wrapperInputName, this.wrapperInputPhone);
    this.element.append(this.wrapperInputs, this.wrapperTextArea, this.button);
  }
}
export default Form;
