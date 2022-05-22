const productsContainer = document.querySelector('#products-container')
getProducts()
let productsArray = []
async function getProducts() {
   const response = await fetch('./product.json')
   // console.log(response);

   productsArray = await response.json()
   // console.log(productsArray);

   renderProducts(productsArray)
}


function renderProducts(productsArray) {
   productsArray.forEach((item, i) => {
      const productHTML = `
      <div  class="card" data-id="${item.id}">
                     <img class="product-img" src="${item.imageLink}" alt="Douglas Crockford">
                     <div class="card-body">
                        <div class="card-text-block">
                           <h5 class="item-author">${item.author}</h5>
                           <h4 class="item-title">
                               ${item.title}
                           </h4>
                           <div class="price">
                              <p class="item-price-title">Price:</p>
                              <p class="item-price">${item.price} $</p>
                           </div>
                           <div class="counter-block">
                              <div class="counter-minus" data-action="minus">-</div>
                              <div class="counter-current" data-counter>1</div>
                              <div class="counter-plus" data-action="plus">+</div>
                           </div>
                        </div>
                        <div class="card-buttons">
                           <button showMore class="show-more">Show more</button>
                           <button data-cart class="add-to-bag">Add to bag</button>
                        </div>
                     </div>
                  </div>`;

      productsContainer.insertAdjacentHTML('beforeend', productHTML)
   });
}
function renderModal(elem) {
   const htmlElement = `
   <div class="modal-block">
      <div class="modal-body">
         <div class="show-more-img-block">
            <img src="${elem.imageLink}" alt="">
         </div>
         <div class="show-more-text-box">
            <h5 class="item-author order-item-author">${elem.author}</h5>

            <div class="modal-title">
              ${elem.title}
            </div>
            <div class="modal-text">
               ${elem.description}
            </div>
            <button closeModal class="close-modal" id="close-modal">
               <p closeModal>Close</p>
            </button>
         </div>
      </div>
   </div>`
   document.body.insertAdjacentHTML('beforeend', htmlElement)
}
window.addEventListener('click', function (event) {
   if (event.target.hasAttribute('showMore')) {
      const card = event.target.closest('.card')
      console.log(card.dataset.id)
      const elem = productsArray.find(el => el.id == card.dataset.id)
      renderModal(elem)
   }

   if (event.target.hasAttribute("closeModal")) {
      const card = document.querySelector('.modal-block')
      document.body.removeChild(card)
   }
})
