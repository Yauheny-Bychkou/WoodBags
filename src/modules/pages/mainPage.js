import About from '../components/about/about';
import Greeting from '../components/greeting/greeting';
import Header from '../components/header/header';
import Galery from '../components/galery/galery';
import SectionText from '../components/sectionText/sectionText';
import Order from '../components/order/order';
import Comment from '../components/comments/comment';

class MainPage {
  constructor() {
    document.body.innerHTML = '';
    this.header = new Header('header');
    this.greeting = new Greeting('greeting');
    this.about = new About();
    this.galery = new Galery();
    this.why = new SectionText('why');
    this.advice = new SectionText('advice');
    this.order = new Order('order');
    this.comment = new Comment();
    document.body.append(
      this.header.element,
      this.greeting.element,
      this.about.element,
      this.galery.element,
      this.why.element,
      this.advice.element,
      this.order.element,
      this.comment.element
    );
    this.addEventListenerToBurgerButton();
  }
  addEventListenerToBurgerButton() {
    this.header.navMenu.burgerMenu.element.addEventListener('click', (e) => {
      if (e.target.classList.contains('menu-btn') || e.target.classList.contains('menu-span')) {
        this.header.navMenu.burgerMenu.element.children[0].classList.toggle('menu-btn__active');
      }
    });
  }
}
export default MainPage;
