const controls = document.querySelectorAll('.gallery-overlay-button');
const mainImage = document.querySelector('.gallery-big').querySelector('img');


controls.forEach((item) => {
  item.addEventListener('click', (evt) => {
    evt.preventDefault();
    const imgOfBlock = item.parentElement.parentElement.querySelector('img').src;
    mainImage.src = imgOfBlock;
    mainImage.style.width = '686px';

    if (window.innerWidth < 768) {
      mainImage.style.width = '100%';
    }
    if (window.innerWidth > 768) {
      mainImage.style.width = '686px';
    }
  });

});
