document.addEventListener('DOMContentLoaded', function () {
	const menuBtn = document.getElementById('menu-btn');
	const mobileMenu = document.getElementById('mobileMenu');
	const closeBtn = document.getElementById('close-menu');
	const overlay = document.querySelector('.mobile-menu__overlay');

	// Menyu ochish
	menuBtn.addEventListener('click', function () {
		mobileMenu.classList.add('active');
	});

	// Menyu yopish (X tugmasi)
	closeBtn.addEventListener('click', function () {
		mobileMenu.classList.remove('active');
	});

	// Overlay bosilganda yopish
	overlay.addEventListener('click', function () {
		mobileMenu.classList.remove('active');
	});

	// Havolalar bosilganda menyu yopish (ixtiyoriy)
	const menuLinks = document.querySelectorAll('.mobile-menu__link');
	menuLinks.forEach(link => {
		link.addEventListener('click', function () {
			mobileMenu.classList.remove('active');
		});
	});
});
	