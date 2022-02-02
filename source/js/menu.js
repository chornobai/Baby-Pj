const MENU_ACTIVE = 'header--open-menu';
const headerBlock = document.querySelector('.header');
const menuOpen = document.querySelector('.header-nav__button');
const menu = document.querySelector('.header-nav-list');

// Открыть меню

menuOpen.addEventListener('click', (evt) => {
  evt.stopPropagation();
  headerBlock.classList.toggle(MENU_ACTIVE);

});

// Закрыть вне области меню

document.addEventListener('click', (e) => {
  const target = e.target;
  const itsMenu = target === menu || menu.contains(target);
  const itsBtnMenu = target === menuOpen;
  const menuIsActive = headerBlock.classList.contains(MENU_ACTIVE);

  if (!itsMenu && !itsBtnMenu && menuIsActive) {
    headerBlock.classList.toggle(MENU_ACTIVE);
  }
});
