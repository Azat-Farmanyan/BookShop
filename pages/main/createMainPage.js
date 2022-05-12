const mainBlock = document.createElement('div')
mainBlock.className = 'main-block'
document.body.append(mainBlock)

const mainPage = document.createElement('div')
mainPage.className = 'main-page'
mainBlock.append(mainPage)

const mainPageContent = document.createElement('div')
mainPageContent.className = 'content main-page-content'
mainPage.append(mainPageContent)

const mainPageBody = document.createElement('div')
mainPageBody.className = 'main-page-body'
mainPageContent.append(mainPageBody)

//          Main page left side
const mainPageLeftSide = document.createElement('div')
mainPageLeftSide.className = 'main-left-side'
//   main page title
const mainPageTitle = document.createElement('h1')
mainPageTitle.innerText = 'Welcome to amazing book shop'
mainPageLeftSide.append(mainPageTitle)
//   main page button
const mainPageButton = document.createElement('a')
mainPageButton.href = '#book-section'
mainPageButton.className = 'main-button'
mainPageButton.innerText = 'Select books'
mainPageLeftSide.append(mainPageButton)

mainPageBody.append(mainPageLeftSide)

//          Main page Right side
const mainPageRightSide = document.createElement('div')
mainPageRightSide.className = 'main-right-side'
const mainPageImg = document.createElement('img')
mainPageImg.src = '../../assets/images/main-page-bg.png'
mainPageImg.alt = 'main-page-illustration'

mainPageRightSide.append(mainPageImg)
mainPageBody.append(mainPageRightSide)

