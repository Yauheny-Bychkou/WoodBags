class AboutProduct {
  element = document.createElement('div');
  title = document.createElement('h3');
  line = document.createElement('div');
  price = document.createElement('h4');
  size = document.createElement('h4');
  material = document.createElement('h4');
  time = document.createElement('h4');
  description = document.createElement('p');
  button = document.createElement('button');
  constructor() {
    this.addClassName();
    this.appendWrappers();
    // this.addContent();
  }
  // addContent() {

  // }
  addClassName() {
    this.element.classList.add('product-about');
    this.title.classList.add('product-title');
    this.line.classList.add('product-line');
    this.price.classList.add('product-cost', 'product-text');
    this.size.classList.add('product-size', 'product-text');
    this.material.classList.add('product-material', 'product-text');
    this.time.classList.add('product-time', 'product-text');
    this.button.classList.add('product-button-order');
    this.description.classList.add('product-description');
  }
  appendWrappers() {
    this.element.append(
      this.title,
      this.line,
      this.price,
      this.size,
      this.material,
      this.time,
      this.button,
      this.description
    );
  }
  fillContent(infoProduct) {
    this.title.innerHTML = '';
    this.price.innerHTML = 'Цена: ';
    this.size.innerHTML = 'Размер: ';
    this.material.innerHTML = 'Материал: ';
    this.time.innerHTML = 'Срок изготовление: ';
    this.button.innerHTML = 'Заказать';
    this.description.innerHTML =
      '* Помните, каждая сумочка создаётся индивидуально, что позволяет Вам изменить форму, цвет, вышивку и размер';
    this.title.append(infoProduct.name);
    this.price.append(infoProduct.price);
    this.size.append(infoProduct.size);
    this.material.append(infoProduct.material);
    this.time.append(infoProduct.time);
  }
}

export default AboutProduct;
