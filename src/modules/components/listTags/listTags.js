import Button from '../button/button';

class ListTags {
  element = document.createElement('div');
  titleList = document.createElement('h5');
  listTags = document.createElement('ul');
  constructor({ buttonGetTags, text, classNames }) {
    this.buttonGetTags = this.buttonAdd = new Button(buttonGetTags);
    this.addText(text);
    this.addClassNames(classNames);
    this.appendElements();
  }

  addText(text) {
    this.titleList.innerHTML = text;
  }

  appendElements() {
    this.element.append(this.buttonGetTags.element, this.titleList, this.listTags);
  }

  addClassNames({ element, title, list }) {
    this.element.classList.add(element);
    this.titleList.classList.add(title);
    this.listTags.classList.add(list);
  }

  renderTags(tags) {
    this.listTags.innerHTML = '';
    tags.forEach((tag) => {
      const item = document.createElement('li');
      item.innerHTML = tag;
      this.listTags.append(item);
    });
  }

  addEventListenerForButtonAdd(func) {
    this.buttonGetTags.element.addEventListener('click', func);
  }
}
export default ListTags;
