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

  save('theme', bodyRef.classList[0]);
}

function createCardsMarkup(menu) {
  return menu.map(cardTpl).join('');
}

function populateBodyClassList() {
  const savedMassage = load('theme');

  if (savedMassage) {
    bodyRef.classList.add(savedMassage);
  }
  if (savedMassage === 'dark-theme') {
    bodyRef.classList.remove(Theme.LIGHT);
    checkboxRef.checked = true;
  }
}

function load(key) {
  try {
    const serializedState = localStorage.getItem(key);

    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (err) {
    console.error('Get state error: ', err);
  }
}

function save(key, value) {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.error('Set state error: ', err);
  }
}
