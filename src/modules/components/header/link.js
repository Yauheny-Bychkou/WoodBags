import Svg from './svg';
class Link {
  element = document.createElement('a');
  constructor() {
    this.element.classList.add('header-wrapper__link-svg');
    this.element.setAttribute('href', 'https://instagram.com/woodbag.s?utm_medium=copy_link');
    this.element.setAttribute('target', 'blank');
    this.element.insertAdjacentHTML('afterbegin', new Svg().getSvgInst());
  }
}
export default Link;
