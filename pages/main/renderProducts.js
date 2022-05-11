const productsContainer = document.querySelector('#products-container')
getProducts()

async function getProducts() {
   const response = await fetch('./product.json')
   // console.log(response);

   const productsArray = await response.json()
   // console.log(productsArray);

   renderProducts(productsArray)
}


function renderProducts(productsArray) {
   productsArray.forEach(item => {
      const productHTML = `
                  <div class="card" data-id="${item.id}">
                     <img class="product-img" src="${item.imageLink}" alt="Douglas Crockford">
                     <div class="card-body">
                        <div class="card-text-block">
                           <h5 class="item-author">${item.author}</h5>
                           <h4 class="item-title">
                               ${item.title}
                           </h4>
                           <div class="price">
                              <p class="item-price-title">Price:</p>
                              <p class="item-price">${item.price}</p>
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