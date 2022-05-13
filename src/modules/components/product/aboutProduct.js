class AboutProduct {
  element = document.createElement('div');
  title = document.createElement('h3');
  line = document.createElement('div');
  price = document.createElement('h4');
  size = document.createElement('h4');
  material = document.createElement('h4');
  button = document.createElement('button');
  constructor() {
    this.addClassName();
    this.appendWrappers();
    this.addContent();
  }
  addContent() {
    this.title.innerHTML = '';
    this.price.innerHTML = 'Цена: ';
    this.size.innerHTML = 'Размер: ';
    this.material.innerHTML = 'Материал: ';
    this.button.innerHTML = 'Заказать';
  }
  addClassName() {
    this.element.classList.add('product-about');
    this.title.classList.add('product-title');
    this.line.classList.add('product-line');
    this.price.classList.add('product-cost');
    this.size.classList.add('product-size');
    this.material.classList.add('product-material');
    this.button.classList.add('product-button');
  }
  appendWrappers() {
    this.element.append(this.title, this.line, this.price, this.size, this.material, this.button);
  }
}

export default AboutProduct;
