export function remove(elYour, elIngr) {
  if (elYour.innerHTML === elIngr.innerHTML) {
    elYour.remove();
    elIngr.classList.remove('selected');
    elIngr.classList.remove('changeColor');
    elIngr.classList.remove('cancelClick');
  }
}

export const ingredientsYourPizza = document.querySelector(
  '.orderForm__ingredientsYourPizza'
);

export function newPrice(arr) {
  let sum = 0;
  Array.from(ingredientsYourPizza.children).forEach((item) => {
    let price = item.innerHTML;
    arr.forEach((obj) => {
      if (Object.keys(obj).includes(price)) sum += obj[price];
    });
  });
  return sum;
}

export function orderObject() {
  let order = {};
  Array.from(ingredientsYourPizza.children).forEach((el, i) => {
    order[i + 1] = el.innerHTML;
  });

  return order;
}
