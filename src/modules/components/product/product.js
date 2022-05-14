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
  wrapperSliders = document.createElement('div');
  constructor() {
    // this.bigSlider = new BigSlider();
    // this.smallSlider = new SmallSlider();
    this.aboutProduct = new AboutProduct();
    this.addClassName();
    this.appendWrappers();
  }
  appendWrappers() {
    this.content.append(this.wrapperSliders, this.aboutProduct.element);
    this.buttonClose.append(this.imgClose);
    this.container.append(this.content, this.buttonClose);
    this.element.append(this.container);
  }
  addClassName() {
    this.imgClose.setAttribute('alt', 'close');
    this.imgClose.setAttribute('src', 'close.svg');
    this.element.classList.add('product');
    this.container.classList.add('container-product');
    this.content.classList.add('product-content');
    this.wrapperSliders.classList.add('product-sliders');
    this.buttonClose.classList.add('product-close');
  }
  showProduct(type, id) {
    const infoProduct = structureProduct[type].filter((image) => image.id === id)[0];
    this.wrapperSliders.innerHTML = '';
    this.wrapperSliders.append(new BigSlider(infoProduct.images).element, new SmallSlider(infoProduct.images).element);
    // this.smallSlider.changeSlides(infoProduct.images);
    // this.bigSlider.changeSlides(infoProduct.images);
    this.aboutProduct.fillContent(infoProduct);
  }
}
export default Product;
