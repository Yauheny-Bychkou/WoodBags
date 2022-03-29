class ListItem {
  element = document.createElement('li');
  link = document.createElement('a');
  constructor(link) {
    this.element.classList.add('header-wrapper__item');
    this.link.classList.add('header-wrapper__link');
    this.link.setAttribute('href', `#${link.name}`);
    this.link.innerHTML = link.nameTranslate;
    this.element.append(this.link);
  }
}
export default ListItem;
