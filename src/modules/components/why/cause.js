class Cause {
  element = document.createElement('div');
  causeNumber = document.createElement('h4');
  causeText = document.createElement('p');
  constructor(cause, number) {
    this.element.classList.add('cause-box');
    this.causeText.classList.add('cause-text');
    this.causeNumber.classList.add('cause-number');
    this.causeNumber.innerHTML = `причина ${number + 1}`;
    this.causeText.innerHTML = cause;
    this.element.append(this.causeNumber, this.causeText);
  }
}
export default Cause;
