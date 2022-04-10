class Cause {
  element = document.createElement('div');
  causeNumber = document.createElement('h4');
  causeText = document.createElement('p');
  link = document.createElement('a');
  constructor(cause, number, namePoint, link) {
    this.element.classList.add('cause-box');
    this.causeText.classList.add('cause-text');
    this.causeNumber.classList.add('cause-number');
    this.causeNumber.innerHTML = `${namePoint} ${number + 1}`;
    if (link === false) {
      this.causeText.innerHTML = cause;
    } else {
      const arrTextCause = cause.split(' ');
      const [first, second, ...arr] = arrTextCause;
      this.link.setAttribute('href', '#catalog');
      this.link.innerHTML = second;
      this.link.classList.add('cause-link');
      this.causeText.append(first, this.link, arr.join(' '));
    }
    this.element.append(this.causeNumber, this.causeText);
  }
}
export default Cause;
