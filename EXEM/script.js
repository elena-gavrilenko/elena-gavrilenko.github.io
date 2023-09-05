import { ingredientsPrice, ingredients } from '../constants/ingredients.js';
import { addIngredients } from './utils/rendering.js';
import { addYourIngredients } from './utils/formation.js';
import { percentResult } from './utils/percent.js';
import { remove } from './utils/yourPizza.js';
import { percentDeleteResult } from './utils/percent.js';
import { ingredientsYourPizza } from './utils/yourPizza.js';
import { newPrice } from './utils/yourPizza.js';
import { switchButton } from './utils/percent.js';

ingredientsPrice.forEach((obj, i) => addIngredients(obj, ingredients[i]));

const sumOfOrder = document.querySelector('.orderForm__price-new');

const allIngredients = document.querySelectorAll('.ingredients__elements>li');

const arr = [[], [], [], []];

allIngredients.forEach((el) => {
  el.addEventListener('click', () => {
    console.log(ingredientsYourPizza);

    addYourIngredients('li', ingredientsYourPizza, el);
    percentResult(el, ingredientsPrice);
    sumOfOrder.innerHTML = newPrice(ingredientsPrice) + '$';
    switchButton();
  });
});

ingredientsYourPizza.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    let elYour = event.target;
    percentDeleteResult(elYour, ingredientsPrice);
    allIngredients.forEach((elIngr) => {
      remove(elYour, elIngr);
      sumOfOrder.innerHTML = newPrice(ingredientsPrice) + '$';
      switchButton();
    });
  }
});
