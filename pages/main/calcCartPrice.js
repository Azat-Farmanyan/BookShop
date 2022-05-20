function calcCartPrice() {
   const cartItems = document.querySelectorAll('.order-card')

   const totalPriceEl = document.querySelector('.total')

   const shoppingCard = document.querySelector('.booking-cart-count')
   // console.log(shoppingCard);
   let totalPrice = 0
   let summaryAmountOfOrderBooks = []
   cartItems.forEach(item => {
      const amountEl = item.querySelector('[data-counter]')
      const priceEl = item.querySelector('.order-item-price')
      const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText)
      totalPrice += currentPrice

      summaryAmountOfOrderBooks.push(amountEl.innerHTML);
   })

   shoppingCard.innerText = summaryAmountOfOrderBooks.reduce((sum, el) => sum += +el, 0)
   totalPriceEl.innerText = `${totalPrice} $`
}
