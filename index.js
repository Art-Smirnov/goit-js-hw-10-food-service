import cardTpl from './templates/card.hbs';
import menu from './menu.json';

const menuContainer = document.querySelector('.js-menu');
const cardsMarkup = createCardsMarkup(menu);
console.log(menu);

menuContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createCardsMarkup(menu) {
  return menu.map(cardTpl).join('');
}
