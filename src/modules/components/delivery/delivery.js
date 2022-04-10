import Title from '../title/title';
import './style.css';

class Delivery {
  element = document.createElement('section');
  constructor() {
    this.element.setAttribute('id', 'delivery');
    this.element.classList.add('delivery', 'none');
    this.element.append(new Title('Доставка и оплата').element);
  }
}
export default Delivery;
