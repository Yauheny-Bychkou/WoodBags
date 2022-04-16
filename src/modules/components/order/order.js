import Title from '../title/title';
import Stage from './stage';
import { structureOrder } from './structure';
import './style.css';

class Order {
  element = document.createElement('section');
  orderWrapper = document.createElement('div');
  stageWrapper = document.createElement('div');
  container = document.createElement('div');
  button = document.createElement('button');
  constructor() {
    this.element.setAttribute('id', structureOrder.type);
    this.button.innerHTML = 'Контакты';
    this.button.classList.add('order-button');
    this.container.classList.add('container');
    this.stageWrapper.classList.add('stage-wrapper');
    this.orderWrapper.classList.add('order-wrapper');
    this.element.classList.add('order', 'none');
    this.orderWrapper.append(this.stageWrapper, this.button);
    this.container.append(this.orderWrapper);
    this.element.append(new Title(structureOrder.title).element, this.container);
    this.getStages();
  }

  getStages() {
    structureOrder.stages.forEach((elem, i) => {
      this.stageWrapper.append(new Stage(elem.stage, i).element);
    });
  }
}
export default Order;
