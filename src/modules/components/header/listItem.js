class ListItem {
  element = document.createElement('li');
  link = document.createElement('a');
  line = document.createElement('div');
  constructor(link, wrapper) {
    this.element.classList.add(`${wrapper}-wrapper__item`);
    this.link.classList.add(`${wrapper}-wrapper__link`);
    this.link.setAttribute('href', `#${link.name}`);
    this.link.innerHTML = link.nameTranslate;
    this.element.append(this.link, this.line);
    this.line.classList.add(`${wrapper}-item-line`);
    this.link.setAttribute('data-id', link.name);
  }
}
export default ListItem;
