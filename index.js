import cardTpl from './templates/card.hbs';
import menu from './menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const bodyRef = document.querySelector('body');

const checkboxRef = document.querySelector('#theme-switch-toggle');
const menuContainer = document.querySelector('.js-menu');
const cardsMarkup = createCardsMarkup(menu);

menuContainer.insertAdjacentHTML('beforeend', cardsMarkup);

// bodyRef.classList.add(Theme.LIGHT);
checkboxRef.addEventListener('change', onThemeChange);

function onThemeChange() {
  bodyRef.classList.toggle(
    bodyRef.classList.contains(Theme.LIGHT) ? Theme.LIGHT : Theme.DARK,
  );
  localStorage.setItem('theme', JSON.stringify(bodyRef.classList));
}

function createCardsMarkup(menu) {
  return menu.map(cardTpl).join('');
}
// checkboxRef.checked = true;
console.log(checkboxRef.checked);
