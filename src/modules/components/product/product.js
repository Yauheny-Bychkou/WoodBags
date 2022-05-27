import SmallSlider from './smallSlider';
import BigSlider from './bigSlider';
import AboutProduct from './aboutProduct';
import { structureProduct } from './structure';

class Product {
  element = document.createElement('div');
  container = document.createElement('div');
  content = document.createElement('div');
  buttonClose = document.createElement('button');
  imgClose = document.createElement('img');
  imgCloseSmall = document.createElement('img');
  wrapperSliders = document.createElement('div');
  wrapperTitleForSmallScreen = document.createElement('div');
  lineTitleForSmallScreen = document.createElement('div');
  titleForSmallScreen = document.createElement('div');
  constructor() {
    this.aboutProduct = new AboutProduct();
    this.addClassName();
    this.appendWrappers();
  }
  appendWrappers() {
    this.content.append(this.wrapperSliders, this.aboutProduct.element, this.buttonClose);
    this.buttonClose.append(this.imgClose, this.imgCloseSmall);
    this.container.append(this.content);
    this.element.append(this.container);
  }
  addClassName() {
    this.wrapperTitleForSmallScreen.classList.add('product-wrapper-title');
    this.lineTitleForSmallScreen.classList.add('product-line-title');
    this.titleForSmallScreen.classList.add('product-title-small');
    this.imgCloseSmall.setAttribute('alt', 'close');
    this.imgCloseSmall.setAttribute('src', 'close-small.svg');
    this.imgClose.setAttribute('alt', 'close');
    this.imgClose.setAttribute('src', 'close.svg');
    this.imgCloseSmall.classList.add('product-close-img-small');
    this.imgClose.classList.add('product-close-img');
    this.element.classList.add('product', 'none');
    this.container.classList.add('container-product');
    this.content.classList.add('product-content');
    this.wrapperSliders.classList.add('product-sliders');
    this.buttonClose.classList.add('product-close');
  }
  showProduct(type, id) {
    const infoProduct = structureProduct[type].filter((image) => image.id === id)[0];
    this.wrapperTitleForSmallScreen.innerHTML = '';
    this.titleForSmallScreen.innerHTML = infoProduct.name;
    this.wrapperTitleForSmallScreen.append(this.lineTitleForSmallScreen, this.titleForSmallScreen);
    this.content.prepend(this.wrapperTitleForSmallScreen);
    this.wrapperSliders.innerHTML = '';
    this.wrapperSliders.append(new BigSlider(infoProduct.images).element, new SmallSlider(infoProduct.images).element);
    this.aboutProduct.fillContent(infoProduct);
  }
}
export default Product;
