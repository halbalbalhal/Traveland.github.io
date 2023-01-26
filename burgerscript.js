const burgerButton = document.querySelector('.nav__burger')
const burgerMenu = document.querySelector('.burger__menu')
const closeButton = document.querySelector('.close__button')

function menuActivate() {
    burgerMenu.style.display = 'flex'
    burgerButton.style.display = 'none'
}

function menuClose() {
    burgerMenu.style.display = 'none'
	window.addEventListener("resize", function() {
        if (window.matchMedia("(max-width: 1000px)").matches) {
            burgerButton.style.display = 'flex'
        } else {
            burgerButton.style.display = 'none'
        }
    })
}

burgerButton.addEventListener('click', menuActivate)
closeButton.addEventListener('click', menuClose)
