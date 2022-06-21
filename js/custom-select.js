﻿class CustomSelect {
  static CLASS_NAME_SELECT = 'select';
  static CLASS_NAME_ACTIVE = 'select_show';
  static CLASS_NAME_SELECTED = 'select__option_selected';
  static SELECTOR_ACTIVE = '.select_show';
  static SELECTOR_DATA = '[data-select]';
  static SELECTOR_DATA_TOGGLE = '[data-select="toggle"]';
  static SELECTOR_OPTION_SELECTED = '.select__option_selected';

  constructor(target, params) {
    this._elRoot = typeof target === 'string' ? document.querySelector(target) : target;
    this._params = params || {};
    this._onClickFn = this._onClick.bind(this);
    if (this._params.options) {
      this._elRoot.classList.add(CustomSelect.CLASS_NAME_SELECT);
      this._elRoot.innerHTML = CustomSelect.template(this._params);
    }
    this._elToggle = this._elRoot.querySelector(CustomSelect.SELECTOR_DATA_TOGGLE);
    this._elRoot.addEventListener('click', this._onClickFn);
  }
  _onClick(e) {
    const target = e.target;
    const type = target.closest(CustomSelect.SELECTOR_DATA).dataset.select;
    if (type === 'toggle') {
      this.toggle();
    } else if (type === 'option') {
      this._changeValue(target);
    }
  }
  _update(option) {
    option = option.closest('.select__option');
    const selected = this._elRoot.querySelector(CustomSelect.SELECTOR_OPTION_SELECTED);
    if (selected) {
      selected.classList.remove(CustomSelect.CLASS_NAME_SELECTED);
    }
    option.classList.add(CustomSelect.CLASS_NAME_SELECTED);
    this._elToggle.textContent = option.textContent;
    this._elToggle.value = option.dataset['value'];
    this._elToggle.dataset.index = option.dataset['index'];
    this._elRoot.dispatchEvent(new CustomEvent('select.change'));
    this._params.onSelected ? this._params.onSelected(this, option) : null;
    return option.dataset['value'];
  }
  _reset() {
    const selected = this._elRoot.querySelector(CustomSelect.SELECTOR_OPTION_SELECTED);
    if (selected) {
      selected.classList.remove(CustomSelect.CLASS_NAME_SELECTED);
    }
    this._elToggle.textContent = 'Выберите из списка';
    this._elToggle.value = '';
    this._elToggle.dataset.index = -1;
    this._elRoot.dispatchEvent(new CustomEvent('select.change'));
    this._params.onSelected ? this._params.onSelected(this, null) : null;
    return '';
  }
  _changeValue(option) {
    if (option.classList.contains(CustomSelect.CLASS_NAME_SELECTED)) {
      return;
    }
    this._update(option);
    this.hide();
  }
  show() {
    document.querySelectorAll(CustomSelect.SELECTOR_ACTIVE).forEach(select => {
      select.classList.remove(CustomSelect.CLASS_NAME_ACTIVE);
    });
    this._elRoot.classList.add(CustomSelect.CLASS_NAME_ACTIVE);
  }
  hide() {
    this._elRoot.classList.remove(CustomSelect.CLASS_NAME_ACTIVE);
  }
  toggle() {
    if (this._elRoot.classList.contains(CustomSelect.CLASS_NAME_ACTIVE)) {
      this.hide();
    } else {
      this.show();
    }
  }
  dispose() {
    this._elRoot.removeEventListener('click', this._onClickFn);
  }
  get value() {
    return this._elToggle.value;
  }
  set value(value) {
    let isExists = false;
    this._elRoot.querySelectorAll('.select__option').forEach((option) => {
      if (option.dataset['value'] === value) {
        isExists = true;
        return this._update(option);
      }
    });
    if (!isExists) {
      return this._reset();
    }
  }
  get selectedIndex() {
    return this._elToggle.dataset['index'];
  }
  set selectedIndex(index) {
    const option = this._elRoot.querySelector(`.select__option[data-index="${index}"]`);
    if (option) {
      return this._update(option);
    }
    return this._reset();
  }
}

CustomSelect.template = params => {
  const name = params['name'];
  const options = params['options'];
  const targetValue = params['targetValue'];
  const items = [];
  let selectedIndex = -1;
  let selectedValue = '';
  let selectedContent = 'Выберите из списка';
  options.forEach((option, index) => {
    let selectedClass = '';
    if (option[0] === targetValue) {
      selectedClass = ' select__option_selected';
      selectedIndex = index;
      selectedValue = option[0];
      selectedContent = option[1];
    }
    items.push(`<li class="select__option${selectedClass}" data-select="option" tabindex="0" data-value="${option[0]}" data-index="${index}"><span>${option[1]}</span></li>`);
  });
  return `<button type="button" class="select__toggle" name="${name}" value="${selectedValue}" data-select="toggle" data-index="${selectedIndex}"><span tabindex="0">${selectedContent}</span></button>
  <div class="select__dropdown">
    <ul class="select__options">${items.join('')}</ul>
  </div>`;
};
/*<input type="hidden" value="" > '#select-3 .select__toggle'*/
document.addEventListener('click', (e) => {
  if (!e.target.closest('.select')) {
    document.querySelectorAll(CustomSelect.SELECTOR_ACTIVE).forEach(select => {
      select.classList.remove(CustomSelect.CLASS_NAME_ACTIVE);
    });
  }
});

function addTextToTarget(selector,target){
  const data = document.querySelector(selector);
let text = document.querySelector(target);
data.parentElement.addEventListener('click',()=>{
    text.value = data.textContent;
  //  console.log(data.textContent + '    ' + text.value)

})
}


