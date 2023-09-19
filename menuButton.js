const menuButton = document.querySelector('.header__menu-button');
const screenCover = document.querySelector('.header__screen-cover');
const headerMenu = document.querySelector('.header__menu')

const toggleMenu = () => {
  screenCover.classList.toggle('header__screen-cover_enabled');
  headerMenu.classList.toggle('header__menu_enabled')
  menuButton.classList.toggle('header__menu-button_enabled');
}

menuButton.addEventListener('click', toggleMenu);
screenCover.addEventListener('click', toggleMenu);