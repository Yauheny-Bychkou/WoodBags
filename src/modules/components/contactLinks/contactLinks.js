class ContactLinks {
  wrapper = document.createElement('div');
  wrapperLinks = document.createElement('div');
  telContact = document.createElement('p');
  telLink = document.createElement('a');
  mailLink = document.createElement('a');
  wrapperSocial = document.createElement('div');
  linkInst = document.createElement('a');
  linkVk = document.createElement('a');
  linkTeleg = document.createElement('a');
  iconInst = document.createElement('img');
  iconVk = document.createElement('img');
  iconTeleg = document.createElement('img');
  constructor(type) {
    this.type = type;
    this.addClassName();
    this.addContent();
    this.appendWrappers();
  }
  addContent() {
    this.telContact.innerHTML = 'Телефон/Viber: ';
    this.telLink.setAttribute('href', 'tel:+375293033712');
    this.telLink.innerHTML = '+375 29 3033712';
    this.mailLink.setAttribute('href', 'mailto:woodbag.s@gmail.com');
    this.mailLink.innerHTML = 'woodbag.s@gmail.com';
    this.linkInst.setAttribute('href', 'https://www.instagram.com/woodbag.s');
    this.linkInst.setAttribute('target', 'blank');
    this.iconInst.setAttribute('src', './main/contacts/inst.svg');
    this.linkVk.setAttribute('href', 'https://www.instagram.com/woodbag.s');
    this.linkVk.setAttribute('target', 'blank');
    this.iconVk.setAttribute('src', './main/contacts/vk.svg');
    this.linkTeleg.setAttribute('href', 'https://www.instagram.com/woodbag.s');
    this.linkTeleg.classList.add('contacts-social-link');
    this.linkTeleg.setAttribute('target', 'blank');
    this.iconTeleg.setAttribute('src', './main/contacts/teleg.svg');
  }
  addClassName() {
    this.wrapper.classList.add(`${this.type}-wrapper-left`);
    this.wrapperLinks.classList.add(`${this.type}-wrapper-links`);
    this.telContact.classList.add(`${this.type}-text-tel`);
    this.telLink.classList.add(`${this.type}-link-tel`);
    this.mailLink.classList.add(`${this.type}-link-mail`);
    this.wrapperSocial.classList.add(`${this.type}-wrapper-social`);
    this.linkInst.classList.add(`${this.type}-social-link`);
    this.linkVk.classList.add(`${this.type}-social-link`);
  }
  appendWrappers() {
    this.telContact.append(this.telLink);
    this.linkInst.append(this.iconInst);
    this.linkVk.append(this.iconVk);
    this.linkTeleg.append(this.iconTeleg);
    this.wrapperSocial.append(this.linkInst, this.linkVk, this.linkTeleg);
    this.wrapperLinks.append(this.telContact, this.mailLink);
    this.wrapper.append(this.wrapperLinks, this.wrapperSocial);
  }
}
export default ContactLinks;
