function toggleCartStatus() {

   const cartEmpty = document.querySelector('[data-cart-empty]')
   // console.log(cartEmpty);

   if (orderCards.children.length > 0) {
      cartEmpty.classList.add('none')
      // console.log('full card');
   } else {
      cartEmpty.classList.remove('none')
      // console.log('empty');
   }
}