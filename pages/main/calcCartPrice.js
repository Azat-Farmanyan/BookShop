function calcCartPrice() {
   const cartItems = document.querySelectorAll('.order-card')

   const totalPriceEl = document.querySelector('.total')

   let totalPrice = 0
   cartItems.forEach(item => {
      const amountEl = item.querySelector('[data-counter]')
      const priceEl = item.querySelector('.order-item-price')
      const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText)
      totalPrice += currentPrice
   })
   totalPriceEl.innerText = totalPrice
}
