import { createElement } from './rendering.js';

function changeMarker(elem) {
  elem.classList.add('selected');
  elem.classList.add('changeColor');
  elem.classList.add('cancelClick');
}

export function addYourIngredients(tag, parents, el) {
  let tagCreate = createElement(tag);
  tagCreate.textContent = el.textContent;
  parents.append(tagCreate);
  changeMarker(el);
}
