import cardTpl from './templates/card.hbs';
import menu from './menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const bodyRef = document.querySelector('body');
bodyRef.classList.add(Theme.LIGHT);

const checkboxRef = document.querySelector('#theme-switch-toggle');
const menuContainer = document.querySelector('.js-menu');
const cardsMarkup = createCardsMarkup(menu);

menuContainer.insertAdjacentHTML('beforeend', cardsMarkup);

checkboxRef.addEventListener('change', onThemeChange);
populateBodyClassList();

function onThemeChange() {
  bodyRef.classList.toggle(Theme.DARK);
  bodyRef.classList.toggle(Theme.LIGHT);

  localStorage.setItem('theme', JSON.stringify(bodyRef.classList));
}

function createCardsMarkup(menu) {
  return menu.map(cardTpl).join('');
}

function populateBodyClassList() {
  const savedMassage = JSON.parse(localStorage.getItem('theme'));
  console.log(savedMassage);
  if (savedMassage) {
    bodyRef.classList.add(savedMassage[0]);
  }
  if (savedMassage[0] === 'dark-theme') {
    checkboxRef.checked = true;
  }
}
