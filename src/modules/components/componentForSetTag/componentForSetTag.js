import Button from '../button/button';
import Input from '../input/input';

class ComponentForSetTag {
  element = document.createElement('div');
  wrapperForTags = document.createElement('div');
  listTags = document.createElement('ul');
  titleSet = document.createElement('h5');

  constructor({ buttonAddTags, buttonGetTags, inputAddTag, text, classNames }) {
    this.buttonAddTag = new Button(buttonAddTags);
    this.buttonSet = new Button(buttonGetTags);
    this.inputAdd = new Input(inputAddTag);
    this.addText(text);
    this.addClassNames(classNames);
    this.appendElements();
  }

  addText(text) {
    this.titleSet.innerHTML = text;
  }

  appendElements() {
    this.wrapperForTags.append(this.inputAdd.element, this.buttonAddTag.element);
    this.element.append(this.buttonSet.element, this.wrapperForTags, this.listTags, this.titleSet);
  }

  addClassNames({ element, wrapperForTags, list, title }) {
    this.element.classList.add(element);
    this.wrapperForTags.classList.add(wrapperForTags);
    this.listTags.classList.add(list);
    this.titleSet.classList.add(title);
  }

  addTag(func) {
    this.buttonAddTag.addEventListenerForButton(() => func());
  }

  setTags(func) {
    this.buttonSet.addEventListenerForButton(() => func());
  }

  renderTags(tags) {
    this.listTags.innerHTML = '';
    tags.forEach((tag) => {
      const item = document.createElement('li');
      item.innerHTML = tag;
      this.listTags.append(item);
    });
  }
}
export default ComponentForSetTag;
