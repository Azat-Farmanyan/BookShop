const CompleteButton = document.querySelector('.complete-button');

window.addEventListener('click', event => {
   if (event.target.hasAttribute('complete')) {
      const orderForm = event.target.closest('.order-form-block')
      const personInfo = {
         name: orderForm.querySelector('#input-name').value,
         surname: orderForm.querySelector('#input-surname').value,
         street: orderForm.querySelector('#input-street').value,
         houseNumber: orderForm.querySelector('#input-house-number').value,
         flatNumber: orderForm.querySelector('#input-flat-number').value,
      }

      function renderModal(elem) {
         const htmlElement = `
         <div class="modal-block">
            <div class="modal-block-body">
               <img class="checked-icon" src="../../assets/icons/checked.png" alt="complete-icon">
               <h3 class="modal-title">The order created</h3>
               <p class="order-description">
               The delivery address is
                ${elem.street}
                house ${elem.houseNumber} 
                flat ${elem.houseNumber}. 
                Customer ${elem.name} ${elem.surname}.
               </p>
               <button close-modal class="modal-block-close-button" type="button">Close</button>
            </div>
      </div>`
         document.body.insertAdjacentHTML('beforeend', htmlElement)
      }

      if (Object.values(personInfo).every(el => el != '')) {
         renderModal(personInfo)
         window.addEventListener('click', closeEvent => {
            if (closeEvent.target.hasAttribute('close-modal')) {
               const card = document.querySelector('.modal-block')
               if (card != null) {
                  document.body.removeChild(card)
               }
            }
         })
      }

   }
});