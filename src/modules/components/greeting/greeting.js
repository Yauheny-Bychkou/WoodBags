import './style.css';
import ApiService from '../api-service/api-service';

class Greeting {
  element = document.createElement('section');
  img = document.createElement('img');
  constructor(type) {
    this.element.setAttribute('id', 'main');
    this.service = new ApiService();
    this.typeStructure = type;
    this.element.classList.add('greeting');
    this.getStructure();
  }
  async getStructure() {
    const structure = await this.service.getStructure(this.typeStructure);
    this.img.setAttribute('src', structure.img);
    this.element.insertAdjacentHTML('afterbegin', this.getCode(structure));
    this.img.onload = () => {
      this.element.prepend(this.img);
    };
  }
  getCode(structure) {
    return `
    
     <div class="greeting-wrapper">
        <h1 class="greeting-wrapper__title">${structure.title}</h1>
        <h2 class="greeting-wrapper__name">${structure.description}</h2>
        <a href="#" class="greeting-wrapper__button">${structure.nameButton}</a>
      </div>
    `;
  }
}
export default Greeting;
