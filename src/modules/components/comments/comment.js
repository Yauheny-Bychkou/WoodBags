import Title from '../title/title';
import './style.css';

class Comment {
  element = document.createElement('section');
  constructor() {
    this.element.classList.add('about');
    this.element.append(new Title('Отзывы').element);
    // this.element.insertAdjacentHTML('beforeend', this.getCode());
  }
}
export default Comment;
