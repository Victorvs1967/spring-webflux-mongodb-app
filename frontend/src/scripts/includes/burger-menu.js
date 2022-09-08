const MENU_OPENED_CLASS = 'burger-menu_opened';

// Burger menu support
const body = document.querySelector('body'),
  control = document.querySelector('.burger-menu__control'),
  burger = document.querySelector('.burger__item'),
  close = document.querySelector('.close__item'),
  links = document.querySelectorAll('.main-nav__link'),
  login = document.querySelector('.modal__login'),
  signup = document.querySelector('.modal__signup');

const openMenu = () => {
  body.classList.add(MENU_OPENED_CLASS);
  burger.style.display = 'none';
  close.style.display = 'block';
  signup.style.display = 'block';
  // login.style.display = 'block';
};

const closeMenu = () => {
  body.classList.remove(MENU_OPENED_CLASS);
  burger.style.display = 'block';
  close.style.display = 'none';
  signup.style.display = 'none';
  // login.style.display = 'none';
};

export const burgerMenu = () => {
  control.addEventListener('click', () => body.classList.contains(MENU_OPENED_CLASS) ? closeMenu() : openMenu());
  // control.addEventListener('click', () => body.classList.contains(MENU_OPENED_CLASS) ? closeMenu() : openMenu());
  // links.forEach(link => link.addEventListener('click', () => closeMenu()));
};
