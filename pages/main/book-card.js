const orderCards = document.querySelector('.order-cards')

window.addEventListener('click', function (event) {
   if (event.target.hasAttribute('data-cart')) {
      const card = event.target.closest('.card')

      // собираем данние о продукте
      const productInfo = {
         id: card.dataset.id,
         imgScr: card.querySelector('.product-img')
            .getAttribute('src'),
         author: card.querySelector('.item-author').innerText,
         title: card.querySelector('.item-title').innerText,
         counter: card.querySelector('.counter-current').innerText,
         price: card.querySelector('.item-price').innerText,
      }


      const itemInCart = orderCards.querySelector(`[data-id="${productInfo.id}"]`)
      // console.log(itemInCart);

      // Если товар в корзине
      if (itemInCart) {
         const counterElement = itemInCart.querySelector('[data-counter]')
         counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter)
      } else {
         const cartItemHTML = `
      <div class="order-card" data-id="${productInfo.id}">
      <img class="order-product-img" src="${productInfo.imgScr}" alt="">
      <div class="order-card-text-box">
         <div class="clear-button" href="#">
            <img clear class="clear-logo" src="../../assets/icons/clear-logo.png" alt="clear logo">
         </div>
         <h4 class="order-item-title">
             ${productInfo.title}
         </h4>
         <div class="counter-block">
               <div class="counter-minus" data-action="minus">-</div>
               <div class="counter-current" data-counter>${productInfo.counter}</div>
               <div class="counter-plus" data-action="plus">+</div>
             </div>
         <div class="order-item-price-block">
            <p class="order-item-price-title">
               Price:
            </p>
            <p class="order-item-price">${productInfo.price}</p>
         </div>
      </div>
        </div>`
         // Если нет, добавляем товар в корзину
         orderCards.insertAdjacentHTML('beforeend', cartItemHTML)
      }
      // зброс счетчика в карте
      card.querySelector('[data-counter]').innerText = '1'

      //отображение статуса карзины Пустая/полная
      toggleCartStatus()

      //Обшая сумма товаров
      calcCartPrice()
   }
})