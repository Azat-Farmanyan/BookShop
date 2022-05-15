// -----Book section-------
const bookSection = document.createElement('section')
bookSection.className = ('book-section')
bookSection.setAttribute('id', 'book-section');
document.body.append(bookSection)

// -----content-------
const bookContent = document.createElement('div')
bookContent.className = ('content')
bookSection.append(bookContent)

// -----book section content-------
const bookSectionBody = document.createElement('div')
bookSectionBody.className = ('book-section-body')
bookContent.append(bookSectionBody)


// -----book catalog-------
const catalogOfBooks = document.createElement('div')
catalogOfBooks.className = ('book-catalog')

/// -----book catalog title-------
const bookCatalogTitle = document.createElement('h2')
bookCatalogTitle.className = ('title2')
bookCatalogTitle.innerText = 'Book Catalog'
catalogOfBooks.append(bookCatalogTitle)

/// -----book catalog cards-------
const bookCards = document.createElement('div')
bookCards.className = ('cards')
bookCards.setAttribute('id', 'products-container')
catalogOfBooks.append(bookCards)

bookSectionBody.append(catalogOfBooks)


/// -----order books-------
const orderBooks = document.createElement('div')
orderBooks.className = ('order-books')
bookSectionBody.append(orderBooks)

// -----order books block title-------
const orderBookTitle = document.createElement('h2')
orderBookTitle.className = ('title2')
orderBookTitle.innerText = 'Order Books'
orderBooks.append(orderBookTitle)

// -----order books body-------
const orderBooksBody = document.createElement('div')
orderBooksBody.className = ('order-books-body')
// -----order cards-------
const orderCards1 = document.createElement('div')
orderCards1.className = ('order-cards')
orderBooksBody.append(orderCards1)
// -----order buttons-------
const orderButtons = document.createElement('div')
orderButtons.className = ('order-buttons')
// -----empty bag-------
const emptyBag = document.createElement('div')
emptyBag.setAttribute('data-cart-empty', '')
emptyBag.className = ('empty-bag')
const cartIsEmpty = document.createElement('p')
cartIsEmpty.className = ('total-title')
cartIsEmpty.innerText = 'Cart is empty'
emptyBag.append(cartIsEmpty)
orderButtons.append(emptyBag)

// -----line-under-total-------
const lineUndertotal = document.createElement('div')
lineUndertotal.className = ('line-under-total')
orderButtons.append(lineUndertotal)

// -----total-block-------
const totalBlock = document.createElement('div')
totalBlock.className = ('total-block')
/// -----total-block-title-------
const totalTitle = document.createElement('p')
totalTitle.className = ('total-title')
totalTitle.innerText = 'Total: '
totalBlock.append(totalTitle)
/// -----total-block-total-price-------
const totalPrice = document.createElement('p')
totalPrice.className = ('total')
totalPrice.innerText = '0'
totalBlock.append(totalPrice)
orderButtons.append(totalBlock)

// -----order-button-------
const orderButton = document.createElement('div')
orderButton.className = ('order-button')
/// -----order-button-link-------
const orderButtonLink = document.createElement('a')
orderButtonLink.setAttribute('href', 'https://azat-farmanyan.github.io/BookShop/pages/order_form/')
orderButton.append(orderButtonLink)
/// -----order-button-link BUTTON-------
const confirmOrder = document.createElement('button')
confirmOrder.className = ('order')
confirmOrder.innerText = 'Confirm order'
orderButtonLink.append(confirmOrder)
orderButtons.append(orderButton)

orderBooksBody.append(orderButtons)
orderBooks.append(orderBooksBody)


