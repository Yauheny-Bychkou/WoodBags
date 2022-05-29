export const infoComponentForCreateTag = {
  inputNameTag: { className: 'input', type: 'text', placeholder: 'Enter tag' },
  inputCheckbox: { className: 'input-checkbox', type: 'checkbox', placeholder: '' },
  buttonAdd: { className: 'button', text: 'Add' },
  buttonSave: { className: 'button-save', text: 'Save in localStorage' },
  titleText: { titleMainText: 'Tags creator', titleTableTag: 'no tags', spanReadOnly: 'Read Only Mode' },
  classNames: {
    titleMain: 'title',
    titleTableTag: 'title-tag',
    wrapperMain: 'wrapper',
    wrapperForCreatePanel: 'wrapper-create',
    wrapperForTableTag: 'wrapper-table',
    overlayForTableTag: 'overlay-table',
    wrapperForReadOnlyPanel: 'wrapper-read',
    spanReadOnly: 'span-read',
    none: 'none',
  },
};

export const infoListTags = {
  buttonGetTags: { className: 'button-get', text: 'Get tags' },
  text: 'no tags',
  classNames: {
    element: 'list-wrapper',
    title: 'list-title',
    list: 'list-tags',
  },
};

export const infoComponentForSetTag = {
  buttonAddTags: { className: 'button-add', text: 'Add tags' },
  buttonGetTags: { className: 'button-set', text: 'Set tags' },
  inputAddTag: { className: 'input', type: 'text', placeholder: 'Enter tag' },
  text: 'no tags',
  classNames: {
    element: 'set-wrapper',
    wrapperForTags: 'set-add',
    list: 'set-list',
    title: 'set-title',
  },
};
