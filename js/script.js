const wrapper = document.querySelectorAll('.faq-list-item');
// faq toggle answer
wrapper.forEach(item => {
	item.addEventListener('click', () => {
		item.classList.toggle('active');
		const btn = item.querySelector('i');

		if (btn.classList.contains('fa-chevron-up')) {
			btn.classList.remove('fa-chevron-up');
			btn.classList.add('fa-chevron-down');
		} else {
			btn.classList.remove('fa-chevron-down');
			btn.classList.add('fa-chevron-up');
		}
	});
});

//mobile navbar
const navBtn = document.querySelector('.mobile-nav-btn');
const mobileNav = document.querySelector('.mobile-nav');

navBtn.addEventListener('click', e => {
	mobileNav.classList.toggle('active-nav');

	const icon = navBtn.querySelector('i');
	if (icon.classList.contains('fa-bars')) {
		icon.classList.remove('fa-bars');
		icon.classList.add('fa-xmark');
	} else {
		icon.classList.add('fa-bars');
		icon.classList.remove('fa-xmark');
	}
});
