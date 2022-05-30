class Stage {
  element = document.createElement('div');
  number = document.createElement('h3');
  text = document.createElement('p');
  constructor(text, number) {
    this.element.classList.add('stage-box');
    this.number.classList.add('stage-number');
    this.text.classList.add('stage-text');
    this.number.innerHTML = number + 1;
    this.text.innerHTML = text;
    this.element.append(this.number, this.text);
  }
}
export default Stage;
