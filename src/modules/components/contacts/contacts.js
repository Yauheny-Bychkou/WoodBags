import Title from '../title/title';
import './style.css';

class Contact {
  element = document.createElement('section');
  constructor() {
    this.element.setAttribute('id', 'contacts');
    this.element.classList.add('contacts', 'none');
    this.element.append(new Title('Как с нами связаться?').element);
  }
}
export default Contact;
