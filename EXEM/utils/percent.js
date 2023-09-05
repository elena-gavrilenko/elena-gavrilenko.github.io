import { orderObject } from './yourPizza.js';

const completionsPercentage = document.querySelectorAll(
  '.orderForm__completionPercentage>div'
);

export function percentResult(elem, arr) {
  let name = elem.innerHTML;
  completionsPercentage.forEach((el, i) => {
    if (Object.keys(arr[i]).includes(name)) {
      el.classList.add('displayNone');
    }
  });
}

export function percentDeleteResult(elem, arr) {
  let name = elem.innerHTML;
  completionsPercentage.forEach((el, i) => {
    if (Object.keys(arr[i]).includes(name)) {
      el.classList.remove('displayNone');
    }
  });
}

const btn = document.querySelector('.orderForm__submit');
export function switchButton() {
  let sum = 0;
  completionsPercentage.forEach((el) => {
    if (el.classList.contains('displayNone')) {
      sum += 1;
    }
  });
  if (sum == 4 && btn.hasAttribute('disabled')) {
    btn.removeAttribute('disabled');
    btn.addEventListener('click', () => {
      let order = orderObject();
      console.log(typeof order);
      console.log('Заказ: ', order);
      alert('заказ готов');
    });
  } else if (sum !== 4 && !btn.hasAttribute('disabled')) {
    btn.disabled = true;
  }
}
