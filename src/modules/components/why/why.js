import Title from '../title/title';
import ApiService from '../api-service/api-service';
import './style.css';

const structure = {
  type: 'why',
  title: 'Почему  именнно WOODBAG.S?',
  namePoint: 'Причина',
  points: [
    { point: '100% эксклюзив.' },
    { point: 'Только качественные и проверенные материалы.' },
    { point: 'Уникальная техника вышивки прямо по дереву (вышивка не приклеивается).' },
    { point: 'Возможность самому придумать сумочку мечты или вместе со мной что-то подобрать для себя ' },
    {
      point: 'Актуальные формы деревянных минималистичных сумок',
    },
    {
      point:
        'У меня нет отложенного производства и конвейера для создания десятка однотипных сумок. Каждая новая сумочка - результат кропотливого ручного труда, за который я переживаю не меньше Вас и всегда готова придти на помощь.',
    },
  ],
};

class Why {
  element = document.createElement('section');
  container = document.createElement('div');
  whyWrapperText = document.createElement('div');
  link = document.createElement('a');

  constructor() {
    this.service = new ApiService();
    this.element.classList.add('sectionText', 'none');
    this.container.classList.add('container');
    this.whyWrapperText.classList.add('sectionText-text');
    this.container.append(this.whyWrapperText);
    this.getPoints();
  }
  getPoints() {
    this.element.setAttribute('id', structure.type);
    const title = new Title(structure.title);
    const titleElement = title.element;
    title.title.classList.add(`title-${structure.type}`);
    this.element.append(titleElement, this.container);
    structure.points.forEach((elem, i) => {
      if (i === 4) {
        this.whyWrapperText.append(this.getCause(elem.point, i, structure.namePoint, true));
      } else this.whyWrapperText.append(this.getCause(elem.point, i, structure.namePoint, false));
    });
  }
  getCause(cause, number, namePoint, link) {
    const element = document.createElement('div');
    const causeNumber = document.createElement('h4');
    const causeText = document.createElement('p');
    element.classList.add('cause-box');
    causeText.classList.add('cause-text');
    causeNumber.classList.add('cause-number');
    causeNumber.innerHTML = `${namePoint} ${number + 1}`;
    if (link === false) {
      causeText.innerHTML = cause;
    } else {
      const arrTextCause = cause.split(' ');
      const [first, second, ...arr] = arrTextCause;
      this.link.setAttribute('href', '#catalog');
      this.link.innerHTML = second;
      this.link.classList.add('cause-link');
      causeText.append(first, this.link, arr.join(' '));
    }
    element.append(causeNumber, causeText);
    return element;
  }
}
export default Why;
