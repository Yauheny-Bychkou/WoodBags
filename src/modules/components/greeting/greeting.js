import './style.css';
import { structureGreeting } from '../structure/structure';

class Greeting {
  element = document.createElement('section');
  img = document.createElement('img');
  constructor(type) {
    this.img.classList.add('greeting-img');
    this.element.setAttribute('id', 'main');
    this.typeStructure = type;
    this.element.classList.add('greeting', 'none');
    this.img.setAttribute('src', structureGreeting.img);
    this.img.onload = () => {
      this.element.prepend(this.img);
      this.element.insertAdjacentHTML('afterbegin', this.getGreetingWrapper(structureGreeting));
    };
  }
  getGreetingWrapper(structure) {
    return `
     <div class="greeting-wrapper">
        <h1 class="greeting-wrapper__title">${structure.title}</h1>
        <h2 class="greeting-wrapper__name">${structure.description}</h2>
        <a href="#catalog" class="greeting-wrapper__button">${structure.nameButton}</a>
      </div>
    `;
  }
}
export default Greeting;
