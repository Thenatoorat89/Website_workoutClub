const navMenu = document.querySelector('.nav__list');
const burgerBtn = document.querySelector('.nav__btn');
const mobileNavList = document.querySelectorAll('.nav__list-item');
const footerYear = document.querySelector('.footer__year');

burgerBtn.addEventListener('click', () => {
	navMenu.classList.toggle('nav__list--active');
	burgerBtn.classList.toggle('active');
	document.body.classList.toggle('sticky-body');

	mobileNavList.forEach((el) => {
		el.addEventListener('click', () => {
			navMenu.classList.remove('nav__list--active');
			burgerBtn.classList.remove('active');
			document.body.classList.remove('sticky-body');
		});
	});
});

const year = new Date().getFullYear();
footerYear.innerHTML = year;
