window.addEventListener('click', function (event) {
   if (event.target.hasAttribute('clear')) {
      event.target.closest('.order-card').remove()
      calcCartPrice()
      toggleCartStatus()
   }
})