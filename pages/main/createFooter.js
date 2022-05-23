// ------------Footer------------
const footer = document.createElement('footer')
footer.className = 'footer'
footer.setAttribute('id', 'footer')
document.body.append(footer)


// ------------Footer body------------
const footerBody = document.createElement('div')
footerBody.className = 'footer-body'
footer.append(footerBody)

// ------------Footer content------------
const footerContent = document.createElement('div')
footerContent.className = 'content'
footerBody.append(footerContent)

// ------------Footer navigation------------
const footerNav = document.createElement('div')
footerNav.className = 'footer-nav'
footerContent.append(footerNav)

// ------------Footer nav-item CONTACT US------------
const footerNavItem1 = document.createElement('div')
footerNavItem1.className = 'footer-nav-item contact-us'
//------------Title-------------
const navTitle1 = document.createElement('h3')
navTitle1.className = 'footer-nav-title'
navTitle1.innerText = 'CONTACT US'
footerNavItem1.append(navTitle1)
// ------------Footer nav-list------------
const footerNavList = document.createElement('div')
footerNavList.className = 'footer-nav-list'
// ------------Footer nav-list item------------
const contact1 = document.createElement('a')
contact1.setAttribute('href', '#')
contact1.innerText = 'BOOKSHOP SANTA CRUZ 1520 PACIFIC AVENUE SANTA CRUZ, CA 95060'
footerNavList.append(contact1)
const contact2 = document.createElement('a')
contact2.setAttribute('href', '#')
contact2.innerText = 'HOURS: 9AM-9PM DAILY'
footerNavList.append(contact2)
const contact3 = document.createElement('a')
contact3.setAttribute('href', '#')
contact3.innerText = 'TEL: 831-423-0900'
footerNavList.append(contact3)
const contact4 = document.createElement('a')
contact4.setAttribute('href', '#')
contact4.innerText = 'CONTACT US'
footerNavList.append(contact4)
footerNavItem1.append(footerNavList)
footerNav.append(footerNavItem1)


// ------------Footer nav-item ABOUT US------------
const footerNavItem2 = document.createElement('div')
footerNavItem2.className = 'footer-nav-item contact-us'
//------------Title-------------
const navTitle2 = document.createElement('h3')
navTitle2.className = 'footer-nav-title'
navTitle2.innerText = 'ABOUT US'
footerNavItem2.append(navTitle2)
// ------------Footer nav-list------------
const footerNavList2 = document.createElement('div')
footerNavList2.className = 'footer-nav-list'
// ------------Footer nav-list item------------
const contact5 = document.createElement('a')
contact5.setAttribute('href', '#')
contact5.innerText = 'OUR HISTORY'
footerNavList2.append(contact5)
const contact6 = document.createElement('a')
contact6.setAttribute('href', '#')
contact6.innerText = 'NOTES FROM CASEY'
footerNavList2.append(contact6)
const contact7 = document.createElement('a')
contact7.setAttribute('href', '#')
contact7.innerText = 'RETURN POLICY'
footerNavList2.append(contact7)
const contact8 = document.createElement('a')
contact8.setAttribute('href', '#')
contact8.innerText = 'WEBSITE FAQ'
footerNavList2.append(contact8)
footerNavItem2.append(footerNavList2)
footerNav.append(footerNavItem2)

// ------------Footer nav-item MY ACCOUNT------------
const footerNavItem3 = document.createElement('div')
footerNavItem3.className = 'footer-nav-item contact-us'
//------------Title-------------
const navTitle3 = document.createElement('h3')
navTitle3.className = 'footer-nav-title'
navTitle3.innerText = 'MY ACCOUNT'
footerNavItem3.append(navTitle3)
// ------------Footer nav-list------------
const footerNavList3 = document.createElement('div')
footerNavList3.className = 'footer-nav-list'
// ------------Footer nav-list item------------
const contact9 = document.createElement('a')
contact9.setAttribute('href', '#')
contact9.innerText = 'LOG IN'
footerNavList3.append(contact9)
const contact10 = document.createElement('a')
contact10.setAttribute('href', '#')
contact10.innerText = 'LOG OUT'
footerNavList3.append(contact10)
const contact11 = document.createElement('a')
contact11.setAttribute('href', '#')
contact11.innerText = 'WISHLIST'
footerNavList3.append(contact11)
const contact12 = document.createElement('a')
contact12.setAttribute('href', '#')
contact12.innerText = 'NEW PASSWORD'
footerNavList3.append(contact12)
footerNavItem3.append(footerNavList3)
footerNav.append(footerNavItem3)

// ------------Footer floor------------
const footerFloor = document.createElement('div')
footerFloor.className = 'footer-floor'

const footerFloorContent = document.createElement('div')
footerFloorContent.className = 'content'

const footerFloorBody = document.createElement('footer-floor-body')
footerFloorBody.className = 'footer-floor-body'

// ------------Footer BookShop logo------------
const footerBookshopLogoLink = document.createElement('a')
footerBookshopLogoLink.className = 'footer-bookshop-logo'
footerBookshopLogoLink.setAttribute('href', 'index.html')
const footerBookshopLogo = document.createElement('img')
footerBookshopLogo.setAttribute('src', '../../assets/icons/bookShopLogo3.png')
footerBookshopLogo.setAttribute('alt', 'bookShop logo')
footerBookshopLogoLink.append(footerBookshopLogo)
footerFloorBody.append(footerBookshopLogoLink)

// ------------Footer All Rights Reserved------------
const allRIghts = document.createElement('p')
allRIghts.className = 'all-rights'
allRIghts.innerText = '© Copyright 2022 Azat Farmanyan'
footerFloorBody.append(allRIghts)

// ------------Footer RsSchool logo------------
const footerRsSchoolLink = document.createElement('a')
footerRsSchoolLink.className = 'footer-rsschool-logo'
footerRsSchoolLink.setAttribute('href', 'https://rs.school/')
footerRsSchoolLink.setAttribute('target', '_blank')
const footerRsSchool = document.createElement('img')
footerRsSchool.setAttribute('src', '../../assets/icons/rs_school-logo-white.png')
footerRsSchool.setAttribute('alt', 'rschool logo')
footerRsSchoolLink.append(footerRsSchool)
footerFloorBody.append(footerRsSchoolLink)


footerFloorContent.append(footerFloorBody)
footerFloor.append(footerFloorContent)
footerBody.append(footerFloor)