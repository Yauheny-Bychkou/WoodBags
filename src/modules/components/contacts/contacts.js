import Title from '../title/title';
import Form from '../form/form';
import ContactLinks from '../contactLinks/contactLinks';
import './style.css';

class Contact {
  element = document.createElement('section');
  container = document.createElement('div');
  wrapperContent = document.createElement('div');
  wrapperLeft = document.createElement('div');
  wrapperRight = document.createElement('div');
  form = document.createElement('form');
  inputName = document.createElement('input');
  textArea = document.createElement('textarea');
  button = document.createElement('button');

  constructor() {
    this.form = new Form('contacts');
    this.addClassName();
    this.addContent();
    this.appendWrappers();
  }
  appendWrappers() {
    this.wrapperRight.append(this.form.element);
    this.element.append(new Title('Как с нами связаться?').element, this.container);
    this.wrapperContent.append(new ContactLinks('contacts').wrapper, this.wrapperRight);
    this.container.append(this.wrapperContent);
  }
  addClassName() {
    this.element.classList.add('contacts');
    this.container.classList.add('container');
    this.wrapperContent.classList.add('contacts-content');
    this.wrapperRight.classList.add('contacts-wrapper-right');
  }
  addContent() {
    this.element.setAttribute('id', 'contacts');
  }
}
export default Contact;
