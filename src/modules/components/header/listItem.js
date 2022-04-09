class ListItem {
  element = document.createElement('li');
  link = document.createElement('a');
  constructor(link, wrapper) {
    this.element.classList.add(`${wrapper}-wrapper__item`);
    this.link.classList.add(`${wrapper}-wrapper__link`);
    this.link.setAttribute('href', `#${link.name}`);
    this.link.innerHTML = link.nameTranslate;
    this.element.append(this.link);
  }
}
export default ListItem;
