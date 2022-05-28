window.addEventListener('click', e => {
   if (e.target.hasAttribute('open_order_form')) {
      const orderFormModal = document.querySelector('#order-books')
      // console.log(orderFormModal);
      orderFormModal.style.display = 'block'
   } else {
      orderFormModal.style.display = 'none'
   }
})