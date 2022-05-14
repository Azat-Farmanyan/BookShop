window.addEventListener('click', (event) => {
   let counter;
   if (event.target.dataset.action === 'plus' ||
      event.target.dataset.action === 'minus') {
      const counterBlock = event.target.closest('.counter-block')
      counter = counterBlock.querySelector('[data-counter]')
   }

   if (event.target.dataset.action === 'plus') {
      counter.innerText = ++counter.innerText
   }

   if (event.target.dataset.action === 'minus') {

      if (parseInt(counter.innerText) > 1) {
         counter.innerText = --counter.innerText
      }
      //проверка на товар, который находитья в корзине
      else if (event.target.closest('.order-cards') && parseInt(counter.innerText) === 1) {
         //удаляем товар из картины, если счетчик равен нулю
         event.target.closest('.order-card').remove()

         //отображение статуса карзины Пустая/полная
         toggleCartStatus()

         //пересчет общей стоимости товаров в корзине
         calcCartPrice()
      }
   }

   //проверяем клик + или минус внутри корзины
   if (event.target.hasAttribute('data-action') && event.target.closest('.order-cards')) {
      calcCartPrice()
   }
})