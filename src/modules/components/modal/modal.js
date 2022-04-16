import './style.css';

class About {
  element = document.createElement('div');
  content = document.createElement('div');
  constructor() {
    this.element.classList.add('modal');
    this.content.classList.add('modal-content');
    this.element.append(this.content);
  }
}
export default About;
