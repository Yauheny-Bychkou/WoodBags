import Tag from '../components/tag/tag';
import ComponentForCreateTag from '../components/componentForCreateTag/componentForCreateTag';
import ListTags from '../components/listTags/listTags';
import ComponentForSetTag from '../components/componentForSetTag/componentForSetTag';
import { infoComponentForCreateTag, infoListTags, infoComponentForSetTag } from './infoComponents';

const MIN_LENGTH_ELEMENTS = 2;
const MIN_LENGTH = 0;
const NAME_KEY_TAGS = 'tags';
const NONE_CLASSNAME = 'none';
const DISABLED_ATTRIBUTE = 'disabled';
const CONTAINER_CLASSNAME = 'container';
const TAG_REMOVE_CLASSNAME = 'tag-remove';
const EMPTY_STRING = '';

class MainPage {
  container = document.createElement('div');

  constructor() {
    this.arrayTags = localStorage.getItem(NAME_KEY_TAGS) ? JSON.parse(localStorage.getItem(NAME_KEY_TAGS)) : [];
    this.arrayTagsForSet = [];
    this.componentForCreateTag = new ComponentForCreateTag(infoComponentForCreateTag);
    this.listTags = new ListTags(infoListTags);
    this.componentForSetTag = new ComponentForSetTag(infoComponentForSetTag);
    this.appendElements();
    this.renderTagFromLocalStorage();
    this.addTag();
    this.removeTag();
    this.saveTags();
    this.enableReadOnlyMode();
    this.getTags();
    this.setTags();
    this.addTagsForSet();
  }

  setTags() {
    this.componentForSetTag.setTags(() => {
      if (this.arrayTagsForSet.length !== MIN_LENGTH) {
        this.arrayTags = this.arrayTagsForSet;
        this.arrayTagsForSet = [];
        this.componentForSetTag.listTags.innerHTML = EMPTY_STRING;
        this.componentForSetTag.titleSet.classList.remove(NONE_CLASSNAME);
        this.componentForCreateTag.wrapperForTableTag.innerHTML = EMPTY_STRING;
        this.arrayTags.forEach((tag) => {
          this.componentForCreateTag.wrapperForTableTag.append(new Tag(tag).element);
        });
      }
    });
  }

  addTagsForSet() {
    this.componentForSetTag.addTag(() => {
      if (this.componentForSetTag.inputAdd.element.value.length !== MIN_LENGTH) {
        this.arrayTagsForSet.push(this.componentForSetTag.inputAdd.element.value);
        this.componentForSetTag.inputAdd.element.value = EMPTY_STRING;
        console.log(this.componentForSetTag.listTags);
        this.componentForSetTag.renderTags(this.arrayTagsForSet);
        this.componentForSetTag.titleSet.classList.add(NONE_CLASSNAME);
      }
    });
  }

  getTags() {
    this.listTags.addEventListenerForButtonAdd(() => {
      if (this.arrayTags.length !== MIN_LENGTH) {
        this.listTags.renderTags(this.arrayTags);
        this.listTags.titleList.classList.add(NONE_CLASSNAME);
      } else {
        this.listTags.renderTags(this.arrayTags);
        this.listTags.titleList.classList.remove(NONE_CLASSNAME);
      }
    });
  }

  enableReadOnlyMode() {
    this.componentForCreateTag.inputCheckbox.addEventListenerForInput((e) => {
      if (e.target.checked) {
        this.componentForCreateTag.inputNameTag.element.setAttribute(DISABLED_ATTRIBUTE, EMPTY_STRING);
        this.componentForCreateTag.buttonAdd.element.setAttribute(DISABLED_ATTRIBUTE, EMPTY_STRING);
        this.componentForCreateTag.overlayForTableTag.classList.remove(NONE_CLASSNAME);
      } else {
        this.componentForCreateTag.inputNameTag.element.removeAttribute(DISABLED_ATTRIBUTE);
        this.componentForCreateTag.buttonAdd.element.removeAttribute(DISABLED_ATTRIBUTE);
        this.componentForCreateTag.overlayForTableTag.classList.add(NONE_CLASSNAME);
      }
    });
  }

  appendElements() {
    this.container.classList.add(CONTAINER_CLASSNAME);
    this.container.append(
      this.componentForCreateTag.wrapperMain,
      this.listTags.element,
      this.componentForSetTag.element
    );
    document.body.append(this.container);
  }

  renderTagFromLocalStorage() {
    this.componentForCreateTag.renderTagFromLocalStorage(() => {
      if (localStorage.getItem(NAME_KEY_TAGS)) {
        const tags = JSON.parse(localStorage.getItem(NAME_KEY_TAGS));
        tags.length !== MIN_LENGTH
          ? this.componentForCreateTag.titleTableTag.classList.add(NONE_CLASSNAME)
          : this.componentForCreateTag.titleTableTag.classList.remove(NONE_CLASSNAME);
        tags.forEach((tag) => {
          this.componentForCreateTag.wrapperForTableTag.append(new Tag(tag).element);
        });
      }
    });
  }

  addTag() {
    this.componentForCreateTag.addTag(() => {
      if (this.componentForCreateTag.inputNameTag.element.value.length !== MIN_LENGTH) {
        this.arrayTags.push(this.componentForCreateTag.inputNameTag.element.value);
        this.componentForCreateTag.wrapperForTableTag.append(
          new Tag(this.componentForCreateTag.inputNameTag.element.value).element
        );
        this.componentForCreateTag.inputNameTag.element.value = EMPTY_STRING;
        this.componentForCreateTag.titleTableTag.classList.add(NONE_CLASSNAME);
      }
    });
  }

  removeTag() {
    this.componentForCreateTag.removeTag((e) => {
      if (e.target.classList.contains(TAG_REMOVE_CLASSNAME)) {
        this.arrayTags = this.arrayTags.filter((tag) => tag !== e.target.dataset.tag);
        if (localStorage.getItem(NAME_KEY_TAGS)) {
          localStorage.setItem(NAME_KEY_TAGS, JSON.stringify(this.arrayTags));
          if (JSON.parse(localStorage.getItem(NAME_KEY_TAGS)).length === MIN_LENGTH) {
            localStorage.removeItem(NAME_KEY_TAGS);
          }
        }
        e.target.parentNode.remove();
        if (this.componentForCreateTag.wrapperForTableTag.children.length === MIN_LENGTH_ELEMENTS) {
          this.componentForCreateTag.titleTableTag.classList.remove(NONE_CLASSNAME);
        }
      }
    });
  }

  saveTags() {
    this.componentForCreateTag.saveTags(() => {
      localStorage.setItem(NAME_KEY_TAGS, JSON.stringify(this.arrayTags));
    });
  }
}

export default MainPage;
