(function() {
	'use strict';
	console.log('Navigation scroll script loaded');
	const bodyElement = document.body;
	const navHeader = document.getElementById('laguntzaFisioterapiaNavHeader');
	const mobileMenu = document.getElementById('mobile-menu');
	const langToggleBtn = document.getElementById('lang-toggle-btn');
	const dropdown = document.getElementById('lang-dropdown');

	let lastScrollY = window.scrollY;
	let ticking = false;

	if (!navHeader || !bodyElement) return;

	function closeDropdown() {
		if (!dropdown || !langToggleBtn) return;
		dropdown.hidden = true;
		langToggleBtn.setAttribute('aria-expanded', 'false');
	}

	function onScroll() {
		const currentScrollY = window.scrollY;
		if (!navHeader) return;
		
		// Hide dropdown on scroll
		if (
			dropdown &&
			langToggleBtn &&
			window.scrollY > 60 &&
			!dropdown.hidden
		) {
			closeDropdown();
			langToggleBtn.blur();
		}
		
		// Prevent scroll logic if mobile menu is open
		if (mobileMenu && mobileMenu.hasAttribute('open')) {
			navHeader.classList.remove('header-nav__container--scrolling-down');
			return;
		}
		
		// Twitter-like header hide/show
		if (currentScrollY < 60) {
			navHeader.classList.remove('header-nav__container--scrolled');
		} else {
			navHeader.classList.add('header-nav__container--scrolled');

			if (currentScrollY > lastScrollY) {
				navHeader.classList.add('header-nav__container--scrolling-down');
			} else {
				navHeader.classList.remove('header-nav__container--scrolling-down');
			}
		}
		
		lastScrollY = currentScrollY;
		ticking = false;
	}

	function onScrollHandler() {
		if (!ticking) {
			window.requestAnimationFrame(onScroll);
			ticking = true;
		}
	}

	// Initialize scroll listener when DOM is ready
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', function() {
			window.addEventListener('scroll', onScrollHandler);
		});
	} else {
		window.addEventListener('scroll', onScrollHandler);
	}

	// Cleanup function for potential module usage
	window.navigationScrollCleanup = function() {
		window.removeEventListener('scroll', onScrollHandler);
	};
})();