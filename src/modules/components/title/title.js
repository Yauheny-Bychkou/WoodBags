import './style.css';

class Title {
  element = document.createElement('div');
  line = document.createElement('span');
  title = document.createElement('h2');
  constructor(text) {
    this.element.classList.add('title-wrapper');
    this.line.classList.add('title-line');
    this.title.classList.add('title');
    this.title.innerHTML = text;
    this.element.append(this.line, this.title);
  }
}
export default Title;
