const burgerButton = document.querySelector('.nav__burger')
const burgerMenu = document.querySelector('.burger__menu')
const closeButton = document.querySelector('.close__button')

function menuActivate() {
    burgerMenu.style.display = 'flex'
    burgerButton.style.display = 'none'
}

function menuClose() {
    burgerMenu.style.display = 'none'
    burgerButton.style.display = 'flex'
}

burgerButton.addEventListener('click', menuActivate)
closeButton.addEventListener('click', menuClose)
