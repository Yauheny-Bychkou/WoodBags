import ContactLinks from '../contactLinks/contactLinks';
import Form from '../form/form';
import Contact from '../contacts/contacts';
import './style.css';

class ModalProduct {
  element = document.createElement('div');
  overlay = document.createElement('div');
  modalDialog = document.createElement('div');
  wrapperRight = document.createElement('div');
  wrapperContent = document.createElement('div');
  wrapperTitle = document.createElement('div');
  titleLine = document.createElement('div');
  title = document.createElement('h2');
  constructor() {
    this.form = new Form('contacts');
    this.addContent();
    this.addClassName();
    this.appendWrappers();
  }
  addContent() {
    this.title.innerHTML = 'Как с нами связаться?';
  }
  appendWrappers() {
    this.wrapperRight.append(this.form.element);
    this.wrapperTitle.append(this.titleLine, this.title);
    this.wrapperContent.append(new ContactLinks('contacts').wrapper, this.wrapperRight);
    this.modalDialog.append(this.wrapperTitle, this.wrapperContent);
    this.element.append(this.overlay, this.modalDialog);
  }
  addClassName() {
    this.wrapperTitle.classList.add('modal-wrrapper-title');
    this.title.classList.add('modal-product-title');
    this.titleLine.classList.add('modal-title-line');
    this.wrapperContent.classList.add('modal-product-wrapper-content');
    this.element.classList.add('modal-product');
    this.modalDialog.classList.add('modal-product-dialog');
    this.overlay.classList.add('modal-product-overlay');
  }
}
export default ModalProduct;
