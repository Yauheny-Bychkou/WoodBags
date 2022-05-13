import SmallSlider from './smallSlider';
import BigSlider from './bigSlider';
import AboutProduct from './aboutProduct';
import { structureProduct } from './structure';

class Product {
  element = document.createElement('div');
  container = document.createElement('div');
  content = document.createElement('div');
  wrapperSliders = document.createElement('div');
  constructor() {
    this.bigSlider = new BigSlider();
    this.smallSlider = new SmallSlider();
    this.aboutProduct = new AboutProduct();
    this.addClassName();
    this.appendWrappers();
  }
  appendWrappers() {
    this.wrapperSliders.append(this.bigSlider.element, this.smallSlider.element);
    this.content.append(this.wrapperSliders, this.aboutProduct.element);
    this.container.append(this.content);
    this.element.append(this.container);
  }
  addClassName() {
    this.element.classList.add('product');
    this.container.classList.add('container-product');
    this.content.classList.add('product-content');
    this.wrapperSliders.classList.add('product-sliders');
  }
  showProduct(type, id) {
    const arrayImages = structureProduct[type].filter((image) => image.id === id)[0].images;
    // this.smallSlider.changeSlides(arrayImages);
    this.bigSlider.changeSlides(arrayImages);
    // console.log(arrayImages);
    // console.log(type, id);
    // this.wrapperSliders.append(new BigSlider().element, new SmallSlider().element);
    // this.content.append(this.wrapperSliders, new AboutProduct().element);
    // this.container.append(this.content);
    // this.element.append(this.container);
  }
}
export default Product;
