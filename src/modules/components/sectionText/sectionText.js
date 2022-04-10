import Title from '../title/title';
import ApiService from '../api-service/api-service';
import './style.css';

class SectionText {
  element = document.createElement('section');
  container = document.createElement('div');
  whyWrapperText = document.createElement('div');
  link = document.createElement('a');

  constructor(type) {
    this.type = type;
    this.service = new ApiService();
    this.element.classList.add('sectionText', 'none');
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
    this.element.setAttribute('id', structure.type);
    const title = new Title(structure.title);
    const titleElement = title.element;
    title.title.classList.add(`title-${structure.type}`);
    this.element.append(titleElement, this.container);
    structure.points.forEach((elem, i) => {
      if (this.type === 'why' && i === 4) {
        this.whyWrapperText.append(this.getCause(elem.point, i, structure.namePoint, true));
      } else this.whyWrapperText.append(this.getCause(elem.point, i, structure.namePoint, false));
    });
  }
  getCause(cause, number, namePoint, link) {
    const element = document.createElement('div');
    const causeNumber = document.createElement('h4');
    const causeText = document.createElement('p');
    element.classList.add('cause-box');
    causeText.classList.add('cause-text');
    causeNumber.classList.add('cause-number');
    causeNumber.innerHTML = `${namePoint} ${number + 1}`;
    if (link === false) {
      causeText.innerHTML = cause;
    } else {
      const arrTextCause = cause.split(' ');
      const [first, second, ...arr] = arrTextCause;
      this.link.setAttribute('href', '#catalog');
      this.link.innerHTML = second;
      this.link.classList.add('cause-link');
      causeText.append(first, this.link, arr.join(' '));
    }
    element.append(causeNumber, causeText);
    return element;
  }
}
export default SectionText;
