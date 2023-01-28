const burgerButton = document.querySelector('.nav__burger')
const burgerMenu = document.querySelector('.burger__menu')
const closeButton = document.querySelector('.close__button')
const closeLogo = document.querySelector('.nav__logo')

function menuActivate() {
    burgerMenu.style.display = 'flex'
    burgerButton.style.display = 'none'
    closeLogo.style.display = 'none'
}

function menuClose() {
    burgerMenu.style.display = 'none'
    closeLogo.style.display = 'flex'
    burgerButton.style.display = 'flex'
	window.addEventListener("resize", function() {
        if (window.matchMedia("(min-width: 1000px)").matches) {
            burgerButton.style.display = 'none'
        } else {
            burgerButton.style.display = 'flex'
        }
    })
}

burgerButton.addEventListener('click', menuActivate)
closeButton.addEventListener('click', menuClose)
