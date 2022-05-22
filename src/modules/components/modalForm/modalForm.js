import './style.css';

class ModalForm {
  element = document.createElement('div');
  overlay = document.createElement('div');
  content = document.createElement('div');
  titleName = document.createElement('h3');
  line = document.createElement('div');
  titleModal = document.createElement('h3');
  textModal = document.createElement('p');
  wrapperButton = document.createElement('div');
  buttonClose = document.createElement('button');
  imageClose = document.createElement('img');
  constructor() {
    this.addClassName();
    this.addContent();
    this.appendWrappers();
  }
  addContent() {
    this.titleName.innerHTML = 'WOODBAG.S';
    this.imageClose.setAttribute('alt', 'close');
    this.imageClose.setAttribute('src', 'close-small.svg');
  }
  addClassName() {
    this.buttonClose.classList.add('modal-form-button');
    this.textModal.classList.add('modal-form-text');
    this.titleModal.classList.add('modal-form-titleModal');
    this.line.classList.add('modal-form-line');
    this.titleName.classList.add('modal-form-titleName');
    this.wrapperButton.classList.add('modal-form-wrapperButton');
    this.content.classList.add('modal-form-content');
    this.overlay.classList.add('modal-form-overlay');
    this.element.classList.add('modal-form');
  }
  appendWrappers() {
    this.wrapperButton.append(this.buttonClose);
    this.buttonClose.append(this.imageClose);
    this.wrapperButton.append(this.buttonClose);
    this.content.append(this.wrapperButton, this.titleName, this.line, this.titleModal, this.textModal);
    this.element.append(this.overlay, this.content);
  }
  addTextMessage(typeModal) {
    this.titleModal.innerHTML = '';
    this.textModal.innerHTML = '';
    if (typeModal === 'success') {
      this.titleModal.innerHTML = 'Спасибо!';
      this.textModal.innerHTML = 'Ваша заявка принята в обработку. Мы&nbsp;свяжемся с Вами в ближайшее время.';
    } else {
      this.titleModal.innerHTML = 'Ошибка!';
      this.textModal.innerHTML = 'К сожалению, во время отправки сообщения произошла ошибка. Повторите попытку позже.';
    }
  }
}
export default ModalForm;
