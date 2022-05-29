class Tag {
  element = document.createElement('div');
  nameTag = document.createElement('h4');
  removeButton = document.createElement('button');
  constructor(text) {
    this.nameTag.innerHTML = text;
    this.nameTag.classList.add('tag-name');
    this.element.classList.add('tag');
    this.removeButton.classList.add('tag-remove');
    this.removeButton.setAttribute('data-tag', text);
    this.element.append(this.nameTag, this.removeButton);
  }
}

export default Tag;
