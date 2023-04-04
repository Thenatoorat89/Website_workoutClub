const navBtn = document.querySelector('.nav__btn')
const navMenu = document.querySelector('.nav__mobile-list')

navBtn.addEventListener('click', () => {
    navMenu.classList.toggle('nav__mobile-list--active')
})