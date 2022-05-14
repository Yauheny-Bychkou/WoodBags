import Title from '../title/title';
import './style.css';
const structureContact = ['inst.svg', 'vk.svg', 'teleg.svg'];

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
  // <textarea
  // class="footer__form-area"
  // cols="30"
  // rows="10"
  // placeholder="Message"
  // name="message"
  //  ></textarea>
  constructor() {
    this.addClassName();
    this.addContent();
    this.appendWrappers();
  }
  appendWrappers() {
    this.form.append(this.inputName, this.textArea, this.button);
    this.wrapperRight.append(this.form);
    this.wrapperContent.append(this.addWrapperLeft(), this.wrapperRight);
    this.container.append(this.wrapperContent);
    this.element.append(new Title('Как с нами связаться?').element, this.container);
  }
  addClassName() {
    this.element.classList.add('contacts');
    this.container.classList.add('container');
    this.wrapperContent.classList.add('contacts-content');
    this.wrapperRight.classList.add('contacts-wrapper-right');
    this.form.classList.add('contacts-form');
    this.inputName.classList.add('contacts-input');
    this.textArea.classList.add('contacts-area');
    this.button.classList.add('contacts-button');
  }
  addContent() {
    this.textArea.setAttribute('placeholder', 'введите ваш вопрос');
    this.inputName.setAttribute('placeholder', 'введите маил');
    this.element.setAttribute('id', 'contacts');
    this.button.innerHTML = 'Отправить';
  }
  addWrapperLeft() {
    const wrapper = document.createElement('div');
    const wrapperLinks = document.createElement('div');
    wrapper.classList.add('contacts-wrapper-left');
    wrapperLinks.classList.add('contacts-wrapper-links');
    const telContact = document.createElement('p');
    telContact.classList.add('contacts-text-tel');
    const telLink = document.createElement('a');
    telLink.classList.add('contacts-link-tel');
    const mailLink = document.createElement('a');
    mailLink.classList.add('contacts-link-mail');
    const wrapperSocial = document.createElement('div');
    wrapperSocial.classList.add('contacts-wrapper-social');

    const linkInst = document.createElement('a');
    const linkVk = document.createElement('a');
    const linkTeleg = document.createElement('a');
    const iconInst = document.createElement('img');
    const iconVk = document.createElement('img');
    const iconTeleg = document.createElement('img');

    telContact.innerHTML = 'Телефон/Viber: ';
    telLink.setAttribute('href', 'tel:+375293033712');
    telLink.innerHTML = '+375 29 3033712';
    telContact.append(telLink);
    mailLink.setAttribute('href', 'mailto:woodbag.s@gmail.com');
    mailLink.innerHTML = 'woodbag.s@gmail.com';

    linkInst.setAttribute('href', 'https://www.instagram.com/woodbag.s');
    linkInst.classList.add('contacts-social-link');
    linkInst.setAttribute('target', 'blank');
    iconInst.setAttribute('src', 'inst.svg');

    linkVk.setAttribute('href', 'https://www.instagram.com/woodbag.s');
    linkVk.classList.add('contacts-social-link');
    linkVk.setAttribute('target', 'blank');
    iconVk.setAttribute('src', 'vk.svg');

    linkTeleg.setAttribute('href', 'https://www.instagram.com/woodbag.s');
    linkTeleg.classList.add('contacts-social-link');
    linkTeleg.setAttribute('target', 'blank');
    iconTeleg.setAttribute('src', 'teleg.svg');

    linkInst.append(iconInst);
    linkVk.append(iconVk);
    linkTeleg.append(iconTeleg);
    wrapperSocial.append(linkInst, linkVk, linkTeleg);
    wrapperLinks.append(telContact, mailLink);
    wrapper.append(wrapperLinks, wrapperSocial);
    return wrapper;
  }
}
export default Contact;
