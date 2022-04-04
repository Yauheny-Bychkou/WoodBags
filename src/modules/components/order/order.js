import Title from '../title/title';
import ApiService from '../api-service/api-service';
import Stage from './stage';
import './style.css';

class Order {
  element = document.createElement('section');
  orderWrapper = document.createElement('div');
  stageWrapper = document.createElement('div');
  container = document.createElement('div');
  button = document.createElement('button');
  constructor(type) {
    this.button.innerHTML = 'Контакты';
    this.button.classList.add('order-button');
    this.container.classList.add('container');
    this.service = new ApiService();
    this.type = type;
    this.stageWrapper.classList.add('stage-wrapper');
    this.orderWrapper.classList.add('order-wrapper');
    this.element.classList.add('order');
    this.orderWrapper.append(this.stageWrapper, this.button);
    this.container.append(this.orderWrapper);
    this.getStructure();
  }
  async getStructure() {
    const structure = await this.service.getStructure(this.type);
    this.element.append(new Title(structure.title).element, this.container);
    this.getStages(structure);
  }
  getStages(structure) {
    structure.stages.forEach((elem, i) => {
      this.stageWrapper.append(new Stage(elem.stage, i).element);
    });
  }
}
export default Order;
