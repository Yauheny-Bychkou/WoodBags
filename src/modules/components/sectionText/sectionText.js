import Title from '../title/title';
import ApiService from '../api-service/api-service';
import './style.css';
import Cause from './cause';

class SectionText {
  element = document.createElement('section');
  container = document.createElement('div');
  whyWrapperText = document.createElement('div');
  constructor(type) {
    this.type = type;
    this.service = new ApiService();
    this.element.classList.add('sectionText');
    this.container.classList.add('container');
    this.whyWrapperText.classList.add('sectionText-text');
    this.container.append(this.whyWrapperText);
    this.getStructure();
  }
  async getStructure() {
    const structure = await this.service.getStructure(this.type);
    this.getPoints(structure);
  }
  getPoints(structure) {
    const title = new Title(structure.title);
    const titleElement = title.element;
    title.title.classList.add(`title-${structure.type}`);
    this.element.append(titleElement, this.container);
    structure.points.forEach((elem, i) => {
      if (this.type === 'why' && i === 4) {
        this.whyWrapperText.append(new Cause(elem.point, i, structure.namePoint, true).element);
      } else this.whyWrapperText.append(new Cause(elem.point, i, structure.namePoint, false).element);
    });
  }
}
export default SectionText;
