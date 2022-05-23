class ProductCard {
  element = document.createElement('div');
  wrapperImg = document.createElement('div');
  imgProduct = document.createElement('img');
  nameProduct = document.createElement('h3');
  priceProduct = document.createElement('h4');
  button = document.createElement('button');
  constructor(img, name, price, id, type) {
    this.type = type;
    this.price = price;
    this.name = name;
    this.img = img;
    this.id = id;
    this.addContent();
    this.appendWrappers();
    this.addClassName();
  }
  addContent() {
    this.imgProduct.setAttribute('src', this.img);
    this.imgProduct.setAttribute('alt', 'product');
    this.nameProduct.innerHTML = this.name;
    this.priceProduct.innerHTML = this.price;
    this.button.innerHTML = 'Подробнее';
    this.button.setAttribute('data-id', this.id);
    this.button.setAttribute('data-type', this.type);
    this.wrapperImg.setAttribute('data-id', this.id);
    this.wrapperImg.setAttribute('data-type', this.type);
  }
  appendWrappers() {
    this.imgProduct.onload = () => this.wrapperImg.append(this.imgProduct);
    this.element.append(this.wrapperImg, this.nameProduct, this.priceProduct, this.button);
  }
  addClassName() {
    this.element.classList.add('product-card');
    this.wrapperImg.classList.add('wrapper-card-img');
    this.imgProduct.classList.add('wrapper-card-image');
    this.nameProduct.classList.add('product-name');
    this.priceProduct.classList.add('product-price');
    this.button.classList.add('product-button');
  }
}
export default ProductCard;
