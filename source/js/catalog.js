const mainListImage = document.querySelectorAll('.catalog-left__main-item');
const thumbnails = document.querySelectorAll('.catalog-left-item ');


const resetActiveSlides = () => {
  mainListImage.forEach((item) => {
    item.classList.remove('catalog-left__main-item--active');
  });
  thumbnails.forEach((item) => {
    item.classList.remove('catalog-left-item--active');
  });
};

thumbnails.forEach((item, i) => {
  item.addEventListener('click', () => {
    resetActiveSlides();
    mainListImage[i].classList.add('catalog-left__main-item--active');
    item.classList.add('catalog-left-item--active');
  });
});
