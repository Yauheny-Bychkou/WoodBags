import Button from '../button/button';
import Input from '../input/input';

class ComponentForCreateTag {
  wrapperMain = document.createElement('div');
  wrapperForCreatePanel = document.createElement('div');
  wrapperForTableTag = document.createElement('div');
  wrapperForReadOnlyPanel = document.createElement('div');
  overlayForTableTag = document.createElement('div');
  spanReadOnly = document.createElement('span');
  titleTableTag = document.createElement('h5');
  titleMain = document.createElement('h2');

  constructor({ inputNameTag, inputCheckbox, buttonAdd, buttonSave, titleText, classNames }) {
    this.inputNameTag = new Input(inputNameTag);
    this.inputCheckbox = new Input(inputCheckbox);
    this.buttonAdd = new Button(buttonAdd);
    this.buttonSave = new Button(buttonSave);
    this.addClassNames(classNames);
    this.addText(titleText);
    this.appendElements();
  }

  addText({ titleMainText, titleTableTag, spanReadOnly }) {
    this.titleMain.innerHTML = titleMainText;
    this.titleTableTag.innerHTML = titleTableTag;
    this.spanReadOnly.innerHTML = spanReadOnly;
  }

  addClassNames({
    titleMain,
    titleTableTag,
    wrapperMain,
    wrapperForCreatePanel,
    wrapperForTableTag,
    overlayForTableTag,
    wrapperForReadOnlyPanel,
    spanReadOnly,
    none,
  }) {
    this.titleMain.classList.add(titleMain);
    this.wrapperMain.classList.add(wrapperMain);
    this.titleTableTag.classList.add(titleTableTag);
    this.wrapperForCreatePanel.classList.add(wrapperForCreatePanel);
    this.wrapperForTableTag.classList.add(wrapperForTableTag);
    this.overlayForTableTag.classList.add(overlayForTableTag, none);
    this.wrapperForReadOnlyPanel.classList.add(wrapperForReadOnlyPanel);
    this.spanReadOnly.classList.add(spanReadOnly);
  }

  appendElements() {
    this.wrapperForTableTag.append(this.titleTableTag, this.overlayForTableTag);
    this.wrapperForCreatePanel.append(this.inputNameTag.element, this.buttonAdd.element);
    this.wrapperForReadOnlyPanel.append(this.inputCheckbox.element, this.spanReadOnly);
    this.wrapperMain.append(
      this.titleMain,
      this.wrapperForCreatePanel,
      this.wrapperForTableTag,
      this.buttonSave.element,
      this.wrapperForReadOnlyPanel
    );
  }

  renderTagFromLocalStorage(func) {
    func();
  }

  addTag(func) {
    this.buttonAdd.addEventListenerForButton(() => func());
  }

  removeTag(func) {
    this.wrapperForTableTag.addEventListener('click', (e) => func(e));
  }

  saveTags(func) {
    this.buttonSave.addEventListenerForButton(() => func());
  }
}
export default ComponentForCreateTag;
