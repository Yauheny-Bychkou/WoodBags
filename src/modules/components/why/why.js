import Title from '../title/title';
import ApiService from '../api-service/api-service';
import './style.css';
import Cause from './cause';
const typeStructure = 'why';

class Why {
  element = document.createElement('section');
  container = document.createElement('div');
  whyWrapperText = document.createElement('div');
  constructor() {
    this.service = new ApiService();
    this.element.classList.add('why');
    this.container.classList.add('container');
    this.whyWrapperText.classList.add('why-wrapper__text');
    this.container.append(this.whyWrapperText);
    this.title = new Title('Почему  именнно WOODBAG.S?');
    this.titleElement = this.title.element;
    this.title.title.classList.add('title-why');
    this.element.append(this.titleElement, this.container);
    this.getStructure();
  }
  async getStructure() {
    const structure = await this.service.getStructure(typeStructure);
    this.getCauses(structure);
  }
  getCauses(structure) {
    structure.causes.forEach((elem, i) => {
      this.whyWrapperText.append(new Cause(elem.cause, i).element);
    });
  }
}
export default Why;
