const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;
const main = document.querySelector('main');
let lastScroll = 0;


window.addEventListener('scroll', () => {
  const scrollDown = window.scrollY;

  if (scrollDown >= 0) {
    header.classList.add('scrolldown');
    main.style.marginTop = `${headerHeight}px`;

  }
  if (scrollDown >= 100) {
    header.classList.add('opacity');
  }


  if (scrollDown < lastScroll) {
    header.classList.remove('opacity');
  }
  if (scrollDown === 0) {
    main.style.marginTop = null;
    header.classList.remove('scrolldown');
  }

  lastScroll = scrollDown;
});
