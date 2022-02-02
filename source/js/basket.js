const addButton = document.querySelector('.buy-quantity-button--plus');
const removeButton = document.querySelector('.buy-quantity-button--minus');
const amount = document.querySelector('.buy-amount');


const goodsName = document.querySelector('.goods-name');
const goodsArticle = document.querySelector('.goods-article');


const favoriteButton = document.querySelector('.buy-favorite');
const addFavoriteMessage = document.querySelector('#favorite').content.querySelector('.favorite').cloneNode(true);
const removeFavoriteMessage = document.querySelector('#favorite').content.querySelector('.favorite').cloneNode(true);

const addBasket = document.querySelector('.buy-basket');
const addBasketMessage = document.querySelector('#basket-add').content.querySelector('.basket-add').cloneNode(true);


removeFavoriteMessage.querySelector('.favorite__message').textContent = 'Перенравился!';
addFavoriteMessage.querySelector('.favorite__message').textContent = 'Добавлен в избранное';
addBasketMessage.querySelector('.basket-add__message').textContent = `Товар  ${goodsName.textContent} ${goodsArticle.textContent}  в количестве  ${amount.textContent}  единиц добавлен в корзину`;
amount.textContent = 0;


//  --- Добавление/Удаление количества товара

addButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  amount.textContent++;
});
removeButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  amount.textContent--;
  if (parseInt(amount.textContent, 2) < 0) {
    amount.textContent = 0;
  }
});

//  ---

// --- Сообщение


//  --- Избранное

favoriteButton.addEventListener('click', (evt) => {
  evt.stopPropagation();
  favoriteButton.classList.toggle('buy-favorite--add');

  if (favoriteButton.classList.contains('buy-favorite--add')) {
    document.body.appendChild(addFavoriteMessage);
    setTimeout(() => {
      addFavoriteMessage.remove();
    }, 1500);

  } else {
    document.body.appendChild(removeFavoriteMessage);
    removeFavoriteMessage.style.background = 'rgba(232, 65, 65, 0.8)';
    setTimeout(() => {
      removeFavoriteMessage.remove();
    }, 1500);
  }

});

// Корзина

addBasket.addEventListener('click', (evt) => {
  evt.stopPropagation();
  document.body.appendChild(addBasketMessage);
  setTimeout(() => {
    addBasketMessage.remove();
  }, 2000);
});
