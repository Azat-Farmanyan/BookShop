// ------------Header------------
const header = document.createElement('header')
header.className = 'header'
document.body.append(header)

const content = document.createElement('div')
content.className = 'content'
header.append(content)

const headerBody = document.createElement('div')
headerBody.className = 'header-body'
content.append(headerBody)

// -----Logo-------
const headerLogo = document.createElement('div')
headerLogo.className = ('header-logo')
headerBody.append(headerLogo)

const headerLogoTagA = document.createElement('a')
headerLogoTagA.href = './index.html'
headerLogo.append(headerLogoTagA)

const headerLogoImg = document.createElement('img')
headerLogoImg.src = '../../assets/icons/bookShopLogo2.png'
headerLogoImg.alt = 'BookShop logo'
headerLogoTagA.append(headerLogoImg)
// ------------

// ------Navigation Items block------

//        Ul
const navItems = document.createElement('ul')
navItems.className = ('nav-items')
headerBody.append(navItems)

//        home
const home = document.createElement('li')
home.className = ('nav-item active')
const homeLink = document.createElement('a')
homeLink.href = ''
homeLink.innerText = 'Home'
home.append(homeLink)
navItems.append(home)

//        bookCatalog
const bookCatalog = document.createElement('li')
bookCatalog.className = ('active-hover-animation nav-item')
const bookCatalogLink = document.createElement('a')
bookCatalogLink.href = '#book-section'
bookCatalogLink.innerText = 'Book Catalog'
bookCatalog.append(bookCatalogLink)
navItems.append(bookCatalog)

//        Orders
const giftCards = document.createElement('li')
giftCards.className = ('active-hover-animation nav-item')
const giftCardsLink = document.createElement('a')
giftCardsLink.href = 'https://azat-farmanyan.github.io/BookShop/pages/order_form/'
giftCardsLink.innerText = 'Orders'
giftCards.append(giftCardsLink)
navItems.append(giftCards)

//        about
const about = document.createElement('li')
about.className = ('active-hover-animation nav-item')
const aboutLink = document.createElement('a')
aboutLink.href = ''
aboutLink.innerText = 'About'
about.append(aboutLink)
navItems.append(about)

//        contact
const contact = document.createElement('li')
contact.className = ('active-hover-animation nav-item')
const contactLink = document.createElement('a')
contactLink.href = ''
contactLink.innerText = 'Contact'
contact.append(contactLink)
navItems.append(contact)

//        logIn
const logIn = document.createElement('li')
logIn.className = ('active-hover-animation nav-item')
const logInLink = document.createElement('a')
logInLink.href = ''
logInLink.innerText = 'Log in'
logIn.append(logInLink)
navItems.append(logIn)

//        register
const register = document.createElement('li')
register.className = ('register-button nav-item')
const registerLink = document.createElement('a')
registerLink.href = ''
registerLink.innerText = 'Register'
register.append(registerLink)
navItems.append(register)


//        bookingCart
const bookingCart = document.createElement('li')
bookingCart.className = ('nav-item booking-cart')
const bookingCartLink = document.createElement('a')
bookingCartLink.href = ''
const bookingCartImg = document.createElement('img')
bookingCartImg.src = '../../assets/icons/shopping-cart.png'
bookingCartImg.alt = 'booking cart logo'
bookingCartLink.append(bookingCartImg)
const bookinCardCount = document.createElement('div')
bookinCardCount.className = 'booking-cart-count'
bookinCardCount.innerText = '0'
bookingCartLink.append(bookinCardCount)
bookingCart.append(bookingCartLink)
navItems.append(bookingCart)

// ------End of navigation Items block------

// ------ End of Header------------

