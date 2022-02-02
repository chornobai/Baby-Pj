const hearts = document.querySelectorAll('.gallery-overlay-like');
const heartsCount = document.querySelectorAll('.overlay-hearts-count');

hearts.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('gallery-overlay-like--like');
    if (item.classList.contains('gallery-overlay-like--like')) {
      heartsCount.forEach((text) => {
        text.textContent++;
      });
    } else {
      heartsCount.forEach((text) => {
        text.textContent--;
      });
    }
  });
});
