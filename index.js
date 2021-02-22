import cardTpl from './templates/card.hbs';
import menu from './menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const bodyRef = document.querySelector('body');
console.log(bodyRef);
const checkboxRef = document.querySelector('#theme-switch-toggle');
const menuContainer = document.querySelector('.js-menu');
const cardsMarkup = createCardsMarkup(menu);

menuContainer.insertAdjacentHTML('beforeend', cardsMarkup);

checkboxRef.addEventListener('change', onThemeChange);

function onThemeChange() {
  // bodyRef.classlist.add(Theme.DARK);
}

function createCardsMarkup(menu) {
  return menu.map(cardTpl).join('');
}
