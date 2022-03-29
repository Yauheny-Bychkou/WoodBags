class BurgerMenu {
  element = document.createElement('div');
  link = document.createElement('a');
  span = document.createElement('span');
  constructor() {
    this.element.classList.add('header-burger');
    this.span.classList.add('menu-span');
    this.link.classList.add('menu-btn');
    this.link.setAttribute('href', '#');
    this.link.append(this.span);
    this.element.append(this.link);
    // for (let i = 0; i < 3; i++) {
    //   const span = document.createElement('span');
    //   span.classList.add('header-burger__line');
    //   this.element.append(span);
    // }
  }
}
export default BurgerMenu;
